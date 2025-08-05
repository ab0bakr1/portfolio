import React from 'react'
import { Container, Row } from 'react-bootstrap'
import "./Skills.css"
import Api1 from "../../IMG/integration.png"
import { Parallax } from 'react-parallax'
import WebDeveloper from "../../IMG/web-developer.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3Alt, faHtml5, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
AOS.init();

const Skills = () => {
  return (
    <section className='skills' id='skills'>
        <Container>
            <h2>my Skills</h2>
            <div data-aos="fade-up" data-aos-duration="2000" className="skills-languages">
                <Row xl={6} md={4} xs={3} className="languages">
                    <div className="skills-item">
                        <FontAwesomeIcon icon={faHtml5} />
                        <p>HTML</p>
                    </div>
                    <div className='skills-item'>
                        <FontAwesomeIcon icon={faCss3Alt} />
                        <p>CSS</p>
                    </div>
                    <div className='skills-item'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 50 50"><path d="M45.274,2.325C45.084,2.118,44.817,2,44.536,2H5.464C5.183,2,4.916,2.118,4.726,2.325S4.443,2.81,4.468,3.089l3.52,39.427 c0.037,0.412,0.324,0.759,0.722,0.873l16.01,4.573C24.809,47.987,24.902,48,24.994,48s0.185-0.013,0.274-0.038l16.024-4.573 c0.398-0.114,0.685-0.461,0.722-0.873l3.518-39.427C45.557,2.81,45.463,2.532,45.274,2.325z M12,29.004l7,1.942V11h4v26l-11-3.051 V29.004z M38.054,22L37,34.25L27,37v-4.601l6.75-1.855l0.25-3.75L27,28V11h12l-0.345,4H31v8L38.054,22z"></path></svg>
                        <p>JavaScript</p>            
                    </div>
                    <div className='skills-item'>
                        <FontAwesomeIcon icon={faBootstrap} />
                        <p>Bootstrap</p>
                    </div>
                    <div className='skills-item'>
                        <svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="80" height="80" viewBox="0 0 50 50"><path d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"></path></svg>
                        <p>Tailwind</p>
                    </div>
                    <div className='skills-item'>
                        <FontAwesomeIcon icon={faReact} />
                        <p>React</p>
                    </div>
                    <div className='skills-item'>
                        <FontAwesomeIcon icon={faNodeJs} />
                        <p>Node.js</p>
                    </div>
                    <div className='skills-item'>
                        <img src={Api1} alt="API Integration" />
                        <p>API Integration</p>
                    </div>
                    <div className='skills-item'>
                        <svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="80" height="80" viewBox="0 0 50 50"><path fill="transparent" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path><path d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path><path d="M23 28H25V36H23z"></path><path d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path><path d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path></svg>
                        <p>MongoDB</p>
                    </div>
                    <div className='skills-item'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 50 50"><path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path></svg>
                        <p>Express js</p>
                    </div>
                </Row>
            </div>
        </Container>
    </section>
  )
}

export default Skills
