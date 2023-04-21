import React from 'react'
import { Link } from 'react-router-dom'
import Secimg from '../asset/Community.jpg';
import '../Component/ThirdSection.css'

const ThirdSection = () => {
  return (
    <>
    <div className="beg">
        <h1>Who We Are?</h1>
    </div>
    <hr className='hii'/>
   <div className='mainSecc'>
      <div className="contentbox">
        <h1>ABOUT EDUCOURSE TEMPLATE</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eaque dolor porro quae nobis, iste provident delectus error
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eaque dolor porro quae nobis, iste provident delectus error  
        nisi incidunt veritatis. Lorem ipsum dolor sit amet
         consectetur adipisicing elit. Nobis, facere. Lorem ipsum, dolor sit amet consectetur 
         adipisicing elit. Sapiente, quae!</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Minus qui quisquam voluptatem voluptatum temporibus omnis ratione, 
        porro quod quia expedita?</p>
        <div className="butnBox">
            <div className="btnn">
            <Link to='/aboutus'className="readMore">Read More</Link>
            </div>
        </div>
      </div> 
      <div className="imgContainer">
        <img src={Secimg} alt="Home" />
    </div> 
   </div>
    </>
  )
}

export default ThirdSection