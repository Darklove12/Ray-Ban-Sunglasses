import React, { useState } from 'react'
import video from '../assets/Clipchamp.mp4'
import './Ray.css'
import image from '../assets/rb.jpg'
import Footer from './Footer'


const Ray = () => {
  const [toggle, setToggle] = useState(false)


  return (
    <div>
      <div>
      <a>
          <button
            onClick={() => setToggle(!toggle)} // 3rd add setToggle and toggle from useState at as above
            className="video1">
            Discover Ray-Ban Videos
          </button>
        </a>
      <h1 className="txt">EXPLORE THE COMPLETE COLLECTION</h1>
        <img src={image} className='imge' alt="" />
        <div className="wordsecond">IT TAKES COURAGE TO BE GENUINE</div>
        <h3 className='wordfirst'>Live is the moment and successfully make it with Ray-Ban smarter glasses.</h3>

      </div>
     
      {
      
      toggle && ( // 4th add {toggle }
        <>
          <video className="videos" height="500" controls >
            <source src={video} type="video/mp4" />
          </video>
        </>
      )}
       <Footer/>
    </div>
  )
}

export default Ray;