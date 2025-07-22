import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Skills.css"
import html from "../../IMG/languages1.png"
import css from "../../IMG/languages2.png"
import bootstrap from "../../IMG/languages3.png"
import tailwind from "../../IMG/languages4.png"
import javascript from "../../IMG/languages5.png"
import react from "../../IMG/languages6.png"
import node from "../../IMG/languages7.png"
import API from "../../IMG/languages8.png"
import MongoDB from "../../IMG/languages9.png"
import { Parallax } from 'react-parallax'
import WebDeveloper from "../../IMG/web-developer.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3Alt, faHtml5, faJava, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
AOS.init();

const Skills = () => {
  return (
    <section className='skills' id='skills'>
        <Container>
            <h2>my Skills</h2>
            <div data-aos="fade-up" data-aos-duration="2000" className="skills-languages">
                <Row xl={6} md={6} xs={12} className="languages">
                    <div className="">
                        <FontAwesomeIcon icon={faHtml5} />
                    </div>
                    <div className=''>
                        <FontAwesomeIcon icon={faCss3Alt} />
                    </div>
                    <div className=''>
                        <FontAwesomeIcon icon={faJava} />
                    </div>
                    <div className=''>
                        <FontAwesomeIcon icon={faBootstrap} />
                    </div>
                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg"><path d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"></path></svg>
                    </div>
                    <div className=''>
                        <FontAwesomeIcon icon={faReact} />
                    </div>
                    <div className=''>
                        <FontAwesomeIcon icon={faNodeJs} />
                    </div>
                    <div className=''>
                        API
                    </div>
                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg"><path d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path><path d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path><path d="M23 28H25V36H23z"></path><path d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path><path d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path></svg>
                    </div>
                </Row>
            </div>
        </Container>
        <Parallax className='web-developer' strength={500} bgImage={WebDeveloper}></Parallax>
    </section>
  )
}

export default Skills