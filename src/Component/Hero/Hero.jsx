import React from 'react'
import './Hero.css'
import About from './About/About'
import Background from './Background'

const Hero = () => {
  return (
    <section className='hero'>
        <About />
        <div className='background'>
          <Background />
        </div>
        <div className='backphoto'>
          <div className='Mountains'></div>
        </div>
    </section>
        
  )
}

export default Hero