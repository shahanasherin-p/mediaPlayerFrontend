import React, { useState }  from 'react'
import { Card,Modal } from 'react-bootstrap'
import { removeVideoApi, saveHistoryAPI } from '../services/allAPI';

const VideoCard = ({displayData,setdeleteVideoRespone,insideCateogry}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = async() => {
      setShow(true);
      const {caption,link}=displayData
      const today=new Date()
      const timeStamp=today.toLocaleString('en-US',{timeZoneName:'short'})
      console.log(timeStamp);
      const videoDetails={caption,link,timeStamp}
      await saveHistoryAPI(videoDetails)
    }
    const deleteVideo=async(id)=>{
      const result=await removeVideoApi(id)
      setdeleteVideoRespone(result)
    }
    const videoDragStart=(e,videoId)=>{
      // console.log(`video with id :${videoId} has started dragging..`);
      e.dataTransfer.setData("id",videoId)
    }
  return (
    <>
      <Card draggable={true} onDragStart={e=>videoDragStart(e,displayData?.id)} style={{ height:'250px' }}>
      <Card.Img onClick={handleShow} variant="top" height={'150px'} src={displayData?.url} />
      <Card.Body>
        <Card.Text className='d-flex justify-content-between'>
          <p>{displayData?.caption}</p>
          { !insideCateogry && <button onClick={()=>deleteVideo(displayData?.id)} className="btn"><i className='fa-solid fa-trash text-danger'></i></button>}
        </Card.Text>
      </Card.Body>
    </Card>
    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="656" height="369" src={`${displayData?.link}?autoplay=1`} title="caption"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard