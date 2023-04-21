import React from 'react'
import {BsFillHouseFill} from 'react-icons/bs'
import '../Component/FourthSection.css'

const FourthSection = () => {
  return (
   <>
   <div className='section'>
    <div className="containerr">
        <h1>EDUCOURSE STATS</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
         Qui tempora laboriosam<br/> nisi nulla recusandae reiciendis quasi 
         aperiam hic ratione officia?</p>
        <div className="carts">
            <div className="cart">
            <BsFillHouseFill size="2rem"/>
            <p><span>500+</span> Professionals Trained</p>
            </div>
            <div className="cart">
            <BsFillHouseFill size="2rem"/>
            <p><span>10+ Years</span> of Experience</p>
            </div>
            <div className="cart">
            <BsFillHouseFill size="2rem"/>
            <p><span>15+</span> Companies Associate</p>
            </div>
            <div className="cart">
            <BsFillHouseFill size="2rem"/>
            <p><span>99%</span> Job Guarantee</p>
            </div>
        </div>
    </div>
   </div>
   </> 
  )
}

export default FourthSection