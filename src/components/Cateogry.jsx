import React,{useEffect, useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { addCateogryAPI, getAllCateogriesAPI, getSingleVideoAPI, removeCateogryAPI, removeVideoApi, updateCateogryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';


const Cateogry = ({setRemoveVideoResponseFromCateogry,removeVideoResponseFromView}) => {
  const [allCateogries,setAllCateogries]=useState([])
  const [cateogryName,setcateogryName]=useState("")
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>{
    getAllCateogry()
  },[removeVideoResponseFromView])
  const handleAddCateogry=async()=>{
    if(cateogryName){
      const cateogryDetails={cateogryName,allVideos:[]}
      await addCateogryAPI(cateogryDetails)
      handleClose()
      setcateogryName("")
      getAllCateogry()
    }else{
      alert("please fill the form completely")
    }
  }
  const getAllCateogry=async()=>{
      const response=await getAllCateogriesAPI()
      setAllCateogries(response.data)
  }
  // console.log(allCateogries);
  const deleteCateogry=async(id)=>{
    await removeCateogryAPI(id)
    getAllCateogry() 
  }
  const dragOverCateogry=e=>{
    e.preventDefault()
  }
  const videoDropOverCateogry=async(e,cateogryId)=>{
    const videoId=e.dataTransfer.getData("id")
    // console.log(`video id :${videoId} dropped inside cateogry id :${cateogryId}`);
    
    // add video into cateogry

    // get dropping video details -call api
    const {data}=await getSingleVideoAPI(videoId)
    // console.log(data);
    // get details dropping cateogry and insert videoDetails of cateogry allVodeos
    const selectCateogry=allCateogries?.find(item=>item.id==cateogryId)
    selectCateogry.allVideos.push(data)
    // console.log(selectCateogry);
    // update selected cateogry into json file -call api
    await updateCateogryAPI(cateogryId,selectCateogry)
    // remove video from allVideos -call api
    const response=await removeVideoApi(videoId)
    // pass response to view componet
    setRemoveVideoResponseFromCateogry(response)
    // get all updated cateogries
    getAllCateogry()

  }

  const cateogryVideoDragStart=(e,cateogryId,video)=>{
    console.log(`Video with id ${video.id} from cateogry id: ${cateogryId} has started dragging `);
    let dataShare ={cateogryId,video}
    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
    
  }
  




  return(
    <> 
    <div className="d-flex justify-content-around">
      <h3>All Cateogries</h3>
      <button onClick={handleShow} className="btn btn-warning ms-3 rounded-circle  fs-5 fw-bolder">+</button>
    </div>

    <div className="container-fluid mt-3">
      {
        allCateogries?.length>0?
        allCateogries?.map(cateogryDetails=>(
          <div droppable="true" onDragOver={dragOverCateogry} onDrop={e=>videoDropOverCateogry(e,cateogryDetails?.id)} className="border rounded p-3 mb-2">
          <div className="d-flex justify-content-between">
            <h5>{cateogryDetails?.cateogryName}</h5>
            <button onClick={()=>deleteCateogry(cateogryDetails?.id)} className="btn"><i className='fa-solid fa-trash text-danger'></i></button>
          </div>
          {/* each cateogry videos */}
          <div className="row mt-2">
            {
              cateogryDetails?.allVideos?.length>0 &&
              cateogryDetails?.allVideos?.map(video=>(
                <div draggable={true} onDragStart={e=>cateogryVideoDragStart(e,cateogryDetails?.id,video)} key={video?.id} className='col-md-4'>
                  <VideoCard displayData={video} insideCateogry={true}/>
                </div>
              ))
            }
          </div>
        </div>
        ))
        :
        <div className='text-danger fw-bolder'>No Categries added yet!!</div>
      }
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Cateogry Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
        controlId="floatingInputName"
        label="Cateogry Name"
        
      >
        <Form.Control onChange={e=>setcateogryName(e.target.value)} type="text" placeholder="Cateogry Name" />
      </FloatingLabel>
    
  
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCateogry} className='btn btn-info'>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Cateogry