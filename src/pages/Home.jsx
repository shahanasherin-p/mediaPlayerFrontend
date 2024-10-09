import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Cateogry from '../components/Cateogry'

const Home = () => {
  const [removeVideoResponseFromView,setRemoveVideoResponseFromView]=useState("")
  const [removeVideoResponseFromCateogry,setRemoveVideoResponseFromCateogry]=useState("")
  const [videoUploadResponse,setvideoUploadResponse]=useState("")
  return (
    <div style={{paddingTop:'100px'}}>
      <div className="container mt-5 d-flex justify-content-between">
        <Add  setvideoUploadResponse={setvideoUploadResponse}/>
        <Link to={'/history'}>Watch History</Link>
      </div>
      <div className="container-fluid my-5 row">
        <div className="col-lg-6">
          <h3>All Videos</h3>
          <View setRemoveVideoResponseFromView={setRemoveVideoResponseFromView} removeVideoResponseFromCateogry={removeVideoResponseFromCateogry} videoUploadResponse={videoUploadResponse}/>
        </div>
        <div className="col-lg-6">
          <Cateogry removeVideoResponseFromView={removeVideoResponseFromView} setRemoveVideoResponseFromCateogry={setRemoveVideoResponseFromCateogry} />
        </div>
      </div>
    </div>
  )
}

export default Home