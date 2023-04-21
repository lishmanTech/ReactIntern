import React, {useState} from 'react'
import {BsFillHouseFill} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {FiChevronDown} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown';
import DropdownOne from './DropdownOne';
import DropdownTwo from './DropdownTwo';
import Dropdownthree from './Dropdownthree';
import '../Component/Header.css'

const Header = () => {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false);
    const [dropdownone, setDropdownOne] = useState(false);
    const [dropdowntwo, setDropdownTwo] = useState(false);
    const [dropdownthree, setDropdownthree] = useState(false);


const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const onMouse = () => {
    if (window.innerWidth < 960) {
      setDropdownOne(false);
    } else {
      setDropdownOne(true);
    }
  };

  const onMouseL = () => {
    if (window.innerWidth < 960) {
      setDropdownOne(false);
    } else {
      setDropdownOne(false);
    }
  };
  const onMouseEn = () => {
    if (window.innerWidth < 960) {
      setDropdownTwo(false);
    } else {
      setDropdownTwo(true);
    }
  };

  const onMouseLe = () => {
    if (window.innerWidth < 960) {
      setDropdownTwo(false);
    } else {
      setDropdownTwo(false);
    }
  };

  const onMouseEnit = () => {
    if (window.innerWidth < 960) {
      setDropdownthree(false);
    } else {
      setDropdownthree(true);
    }
  };

  const onMouseit = () => {
    if (window.innerWidth < 960) {
      setDropdownthree(false);
    } else {
      setDropdownthree(false);
    }
  };
    const handleClick = () => setClick(!click)
  return (
    <>
            <div className="navbar">
                <div className="container">
                    <h1><span><BsFillHouseFill /></span>EDUCOURSE</h1>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li><Link to='/'className="link">HOME</Link> </li>
                  <li><Link to='/about'className="link">ABOUT US</Link> </li>
                  <li onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}>
                      <Link to='/course'className='link'>COURSES<FiChevronDown /></Link>{dropdown && <Dropdown />}</li>
                  <li  onMouseEnter={onMouse}
                      onMouseLeave={onMouseL}>
                      <Link to='/pages'className='link'>PAGES<FiChevronDown /></Link>{dropdownone && <DropdownOne />} </li>
                  <li  onMouseEnter={onMouseEn}
                      onMouseLeave={onMouseLe}>
                      <Link to='/blog'className='link'>BLOG<FiChevronDown /></Link>{dropdowntwo && <DropdownTwo />} </li>
                  <li  onMouseEnter={onMouseEnit}
                      onMouseLeave={onMouseit}><Link to='/contact'className='link'>CONTACT<FiChevronDown /></Link>{dropdownthree && <Dropdownthree />} </li>
              </ul>
              <div className="hamburger" onClick={handleClick}>
                {click ? (<FaRegTimesCircle className='icon'/>) : (<HiOutlineMenuAlt4 className='icon'/>)}
                
              </div>
              </div>
            </div>
    </>
    
  )
}

export default Header