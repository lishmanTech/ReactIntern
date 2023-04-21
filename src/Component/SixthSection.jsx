import React from 'react'
import { Link } from 'react-router-dom'
import Fifimg from '../asset/Community.jpg';
import '../Component/SixthSection.css'

const SixthSection = () => {
  return (
    <>
    <div className="discc">
   <h1>OFFERING COURSES</h1>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
         Qui tempora laboriosam<br/> nisi nulla recusandae reiciendis quasi 
         aperiam hic ratione officia?</p>
   </div>
    <div className='Sixth'>
        <div className="picture">
        <img src={Fifimg} alt="Home" width="300" height="200" />
        </div>
   </div>
   <div className='Sixth'>
        <div className="picture">
        <img src={Fifimg} alt="Home" width="300" height="200" />
        </div>
   </div>
   <div className='Sixth'>
        <div className="picture">
        <img src={Fifimg} alt="Home" width="300" height="200" />
        </div>
   </div>
   <div className='Sixth'>
        <div className="picture">
        <img src={Fifimg} alt="Home" width="300" height="200" />
        </div>
   </div>
   <div className="butnnBox">
            <div className="btnnn">
            <Link to='/aboutus'className="readMore">VIEW MORE GALLERY</Link>
            </div>
        </div>
 </>
  )
}

export default SixthSection