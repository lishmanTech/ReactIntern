import React from 'react'
import { Link } from 'react-router-dom'
import Secimage from '../asset/Community.jpg';
import '../Component/FirstSection.css'

const firstSection = () => {
  return (
    <>
     <div className='mainSec'>
      <div className="contentbox">
        <h1>Learning Made Easy</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eaque dolor porro quae nobis, iste provident delectus error
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eaque dolor porro quae nobis, iste provident delectus error  
        nisi incidunt veritatis.</p>
        <div className="butnBox">
            <div className="btnn">
            <Link to='/aboutus'className="readMore">Read More</Link>
            </div>
        </div>
      </div> 
      <div className="imgContainer">
        <img src={Secimage} alt="Home" />
    </div> 
   </div>
    </>
  )
}

export default firstSection