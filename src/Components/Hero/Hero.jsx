import React from 'react'
import './Hero.css'
import darkArrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text' id='Hero'>
            <h1>
                We Ensure better education
                for a better world
            </h1>
            <p>
            Our cutting-edge curriculum is 
            designed to empower students w
            ith the knowledge, skills, and 
            experiences needed to excel in the d
            ynamic field of education 
            </p>
            <button className='btn'>
                Explore more
                <img src={darkArrow} alt='arrow'/>
            </button>
        </div>
      
    </div>
  )
}

export default Hero
