import React from 'react'
import './Hero.css'
import backvideo from "../../IMG/backVideo.mp4"
import About from './About/About'

const Hero = () => {
  return (
    <section className='hero'>
        <About />
        <div className='backvideo'>
            <video autoPlay loop muted>
                <source src={backvideo} type='video/mp4'/>
            </video>
        </div>
        <div className='backphoto'>
            <div className='Mountains'></div>
        </div>
    </section>
        
  )
}

export default Hero