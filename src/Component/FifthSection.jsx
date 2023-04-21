import React from 'react'
import { Link } from 'react-router-dom'
import Fifimg from '../asset/Community.jpg';
import '../Component/FifthSection.css'

const FifthSection = () => {
  return (
    <>
    <div className="desccc">
        <h1>OFFERING COURSES</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
         Qui tempora laboriosam<br/> nisi nulla recusandae reiciendis quasi 
         aperiam hic ratione officia?</p>
    </div>
    <div className='Fifth'>
        <div className="gallery">
        <Link to='/aboutus'className="readMore"><img src={Fifimg} alt="Home" width="300" height="200" /></Link>
        <div className="desc">
            <h1>COURSE ONE</h1>
            <p>3-4 WEEKS</p>
        </div>
        </div>
   </div>
   <div className='Fifth'>
        <div className="gallery">
        <Link to='/aboutus'className="readMore"><img src={Fifimg} alt="Home" width="300" height="200" /></Link>
        <div className="desc">
            <h1>COURSE TWO</h1>
            <p>3-4 WEEKS</p>
        </div>
        </div>
   </div>
   <div className='Fifth'>
        <div className="gallery">
        <Link to='/aboutus'className="readMore"><img src={Fifimg} alt="Home" width="300" height="200" /></Link>
        <div className="desc">
            <h1>COURSE THREE</h1>
            <p>5-6 WEEKS</p>
        </div>
        </div>
   </div>
        </>
  )
}

export default FifthSection