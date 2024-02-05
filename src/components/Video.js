import React from 'react'
import video from '../videos/background.mp4'
import Navbar from './Navbar'

const Video = () => {
  return (
    <div className="main">
       
       <video src={video} autoPlay loop muted />
      <div className='content'>
       <Navbar/> 
      
      </div>
    </div>
  )
}

export default Video