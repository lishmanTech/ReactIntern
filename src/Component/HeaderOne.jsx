import React from 'react'
// import {BsFillHouseFill} from 'react-icons/bs'
import {FaFacebook, FaGooglePlus, FaPhoneVolume, FaLinkedin, FaRegPaperPlane, FaTwitter, FaInstagram, FaRegUser, FaRegFileAlt} from 'react-icons/fa'
//import { Link } from 'react-router-dom'
import '../Component/HeaderOne.css'

const HeaderOne = () => {
    
  return (
<>
   <div className='header'>
    <h1 className='logo'>envatoMarket</h1>
    <ul>
        <button className='btn'>Buy Now</button>
    </ul>
   </div>
   <div className='head'>
    <div className='nav'>
    <h1 className='symbol'><span><FaRegPaperPlane /></span>support@konnectpluckin.com</h1>
    <p className='symbol'><span><FaPhoneVolume /></span>(040) 123-4567</p>
    </div>
    <ul className='nav'>
    <li><span><FaRegUser /></span>Login</li>
    <li><span><FaRegFileAlt /></span>Register</li>
    <li><FaTwitter size="1rem" /></li>
    <li><FaGooglePlus size="1rem"/></li>
    <li><FaFacebook size="1rem" /></li>
    <li><FaInstagram size="1rem" /></li>
    <li><FaLinkedin size="1rem" /></li>
    </ul>
   </div>
</>
  )
}

export default HeaderOne