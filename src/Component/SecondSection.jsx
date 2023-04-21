import React from 'react'
import {BsFillHouseFill} from 'react-icons/bs'
import '../Component/SecondSection.css'

const SecondSection = () => {
  return (
    <>
        <div className="Section">
           <div className="row">
              <div className="column">
                <div className="card">
                <div className="iconCon">
                  <BsFillHouseFill size="2rem" />
                </div>
                <h1>Experience Trainer</h1>
                <p>Lorem ipsum dolor sit amet,
                   consectetur adipisicing elit. Sint autem ut illum hic 
                vitae libero eum quam neque quas quo!
                </p>
                </div>  
              </div>
              <div className="column">
                <div className="card">
                <div className="iconCon">
                  <BsFillHouseFill size="2rem" />
                </div>
                <h1>Certification</h1>
                <p>Lorem ipsum dolor sit amet,
                   consectetur adipisicing elit. Sint autem ut illum hic 
                vitae libero eum quam neque quas quo!
                </p>
                </div>  
              </div>
              <div className="column">
                <div className="card">
                <div className="iconCon">
                  <BsFillHouseFill size="2rem" />
                </div>
                <h1>Job Support</h1>
                <p>Lorem ipsum dolor sit amet,
                   consectetur adipisicing elit. Sint autem ut illum hic 
                vitae libero eum quam neque quas quo!
                </p>
                </div>  
              </div>
           </div>
        </div>
    </>
  )
}

export default SecondSection