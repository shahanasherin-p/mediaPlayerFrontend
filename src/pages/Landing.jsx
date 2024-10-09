import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/musical-image.avif'
import { Card } from 'react-bootstrap'

import feature1 from '../assets/cardimg1.avif'
import feature2 from '../assets/cardimg2.jpg'
import feature3 from '../assets/cardimg3.jpg'

const Landing = () => {
  return (
    <div style={{paddingTop:'80px'}} className='container'>
      {/* landing head */}
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}} className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ratione dignissimos iusto qui laborum minus! Consectetur totam optio nostrum aut temporibus deserunt perspiciatis, eum adipisci provident commodi necessitatibus magnam asperiores.</p>
          <Link to={'/home'} className='btn btn-info'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img src={landingImg} alt="" className="img-fluid" />
        </div>
      </div>
      {/* features */}
      <div className="my-5">
        <h3 className="text-center">Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
          <Card.Img height={'250px'} variant="top" src={feature2} />
              <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
              Users can upload ,view and remove the videos.
              </Card.Text>
              </Card.Body>
          </Card>
          </div>
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
          <Card.Img height={'250px'} variant="top" src={feature1} />
              <Card.Body>
              <Card.Title>Cateogrise Videos</Card.Title>
              <Card.Text>
              Usera can cateogrise the videos by drag and drop feature.
              </Card.Text>
              </Card.Body>
          </Card>
          </div>
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
          <Card.Img height={'250px'} variant="top" src={feature3} />
              <Card.Body>
              <Card.Title>Managing History</Card.Title>
              <Card.Text>
              Users can manage the watch history of all videos.
              </Card.Text>
              </Card.Body>
          </Card>
          </div>
        </div>
      </div>
      {/* youtube */}
      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
          <h3 className="text-warning">Simple,Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything:</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus delectus sed hic explicabo facere recusandae maiores quaerat iusto quas, culpa, dolor laborum nam laboriosam, nostrum reprehenderit in rem voluptatibus. Eos.
          </p>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Cateogrise Videos:</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus delectus sed hic explicabo facere recusandae maiores quaerat iusto quas, culpa, dolor laborum nam laboriosam, nostrum reprehenderit in rem voluptatibus. Eos.
          </p>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Managing History:</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus delectus sed hic explicabo facere recusandae maiores quaerat iusto quas, culpa, dolor laborum nam laboriosam, nostrum reprehenderit in rem voluptatibus. Eos.
          </p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="500" height="369" src="https://www.youtube.com/embed/e1BHIY9p2WU" title="Eyy Banane - Video  | Vaazha | Vipin Das | Anand Menen | Electronic Kili |Siju Sunny |Joemon Jyothir" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing