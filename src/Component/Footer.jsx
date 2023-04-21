import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebook, FaGooglePlus, FaPhoneVolume, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import logimg from '../asset/Cis.ico';
import '../Component/Footer.css'
import {FiChevronDown} from 'react-icons/fi'

const Footer = () => {
  return (
    <>
<footer>
    <div className="contan">
        <div className="rooww">
            <div className="footer-col">
            <img className='loggoo' src={logimg} alt="Home" />
               <p className='slogan'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
               Impedit officia suscipit illo rem atque laudantium.
                Dolorem enim ipsum perferendis placeat.</p>
                <div className="bbttnn">
                <Link to='/aboutus'className="readMore">>>Read More</Link>
                </div>
            </div>
          {/* <!-- Secound Col---> */}
          <div className="footer-col">
                <h4>Contact</h4>
                <ul>
                    <li><p className='lik'>#Koramangala, Banglore<br/>Karnataka, INDIA</p> </li>
                    <li>Youremail@yourdomain.com </li>
                    <li><p><FaPhoneVolume size="1rem" />+88 (0) 101 0000 00</p><span>+88 (0) 202 0000 001</span></li>
                </ul>
            </div>
               {/* Third Column */}
               <div className="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><Link to='/'className="lik"><FiChevronDown />Online Classes</Link> </li>
                    <li><Link to='/'className="lik"><FiChevronDown />Events</Link> </li>
                    <li><Link to='/'className="lik"><FiChevronDown />Contact Us</Link> </li>
                    <li><Link to='/'className="lik"><FiChevronDown />Login</Link> </li>
                    <li><Link to='/'className="lik"><FiChevronDown />Terms And Conditions</Link> </li>
                </ul>
            </div>
               {/* Fourth Column */}
               <div className="footer-col">
                <ul>
                    <h4>Important</h4>
                    <li><Link to='/'className="lik"><FiChevronDown />Classroom Classes</Link> </li>
                    <li><Link to='/'className="lik"><FiChevronDown />About Us</Link> </li>
                    <li><Link to='/'className="lik"><FiChevronDown />faq</Link> </li>
                    <li><Link to='/'className="lik"><FiChevronDown />Sign Up</Link> </li>
                    <li><Link to='/'className="lik"><FiChevronDown />Privacy Policy</Link> </li>
                </ul>
            </div>
        </div>
        <div className="roowww">
            <div className="socialicons">
             <FaTwitter className='i' size="1rem" />
             <FaGooglePlus className='i' size="1rem"/>
             <FaFacebook className='i' size="1rem" />
             <FaInstagram className='i' size="1rem" />
             <FaLinkedin className='i' size="1rem" />
            </div>
            <div className="col">
          <p>&#169;Copyright 2017 Konnect Plugins</p>
         </div>
        </div>
    </div>
</footer>
    </>
  )
}

export default Footer