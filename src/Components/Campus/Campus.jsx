import React from 'react'
import './Campus.css'
import gallery1  from '../../assets/gallery-1.png'
import gallery2  from '../../assets/gallery-2.png'
import gallery3  from '../../assets/gallery-3.png'
import gallery4 from '../../assets/gallery-4.png'
import whiteArrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus' id='Campus'>
        <div className='gallery'>
            <img src={gallery1} alt="g1" />
            <img src={gallery2} alt="g2" />
            <img src={gallery3} alt="g3" />
            <img src={gallery4} alt="g4" />
        </div>
        <button  className='btn dark-btn'>
          See more here 
          <img src={whiteArrow} alt="see"/>
        </button>
      
    </div>
  )
}

export default Campus
