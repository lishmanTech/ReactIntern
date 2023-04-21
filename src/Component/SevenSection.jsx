import React from 'react'
import { Link } from 'react-router-dom'
import '../Component/Sevensection.css'

const SevenSection = () => {
  return (
    <>
    <div className="seven">
           <h3>Do you really like one page template?</h3>
        <div className="bttnn">
            <Link to='/aboutus'className="readMore">PURCHASE NOW</Link>
        </div>
    </div>
    </>
  )
}

export default SevenSection