import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './VideoCard';
import { getAllVideosAPI, getSingleCateogryAPI, updateCateogryAPI, uploadVideoApi } from '../services/allAPI';
const View = ({videoUploadResponse,removeVideoResponseFromCateogry,setRemoveVideoResponseFromView}) => {
  const [allVideos,setallVideos]=useState([])
  const[deleteVideoRespone,setdeleteVideoRespone]=useState("")
  useEffect(()=>{
    getAllVideos()
  },[videoUploadResponse,deleteVideoRespone,removeVideoResponseFromCateogry])

  const getAllVideos=async()=>{
    try{
      const response=await getAllVideosAPI()
      // console.log(response);
      setallVideos(response.data)
      
    }catch(err){
      
    }
  }
  // console.log(allVideos);
  const dragOverView=(e)=>{
    e.preventDefault()
  }

  const cateogryVideoDrop= async(e)=>{
    const {cateogryId,video}=JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(`Video id:${video.id} from cateogry id: ${cateogryId} dropped in view component`);
    // remove video from cateogry
    // get cateogry details from where we have to remove video
    const {data}=await getSingleCateogryAPI(cateogryId)
    // update cateogry   after removing video
    const updateAllVideos=data?.allVideos.filter(item=>item.id!=video?.id)
    const updateCateogryDetails= {id:cateogryId,cateogryName:data.cateogryName,allVideos:updateAllVideos} 
    const response =await updateCateogryAPI(cateogryId,updateCateogryDetails)
    // pass response to cateogry
    setRemoveVideoResponseFromView(response)
    await uploadVideoApi(video)
    getAllVideos()

    
  }
  return (
    <>
     <Row droppable="true" onDragOver={dragOverView} onDrop={e=>cateogryVideoDrop(e)}>
        {
          allVideos.length>0?
           allVideos?.map(video=>(
            <Col key={video?.id} className='mb-4' sm={12} md={6} lg={4}>
            <VideoCard setdeleteVideoRespone={setdeleteVideoRespone} displayData={video}/>
          </Col>
           ))
           :
           <div>No Videos Are Uploaded Yet </div>
        }
     </Row>
    </>
  )
}

export default View