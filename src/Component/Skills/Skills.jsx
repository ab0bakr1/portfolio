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
import { Parallax } from 'react-parallax'
import WebDeveloper from "../../IMG/web-developer.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Skills = () => {
  return (
    <section className='skills' id='skills'>
        <Container>
            <h2>my Skills</h2>
            <Row xl={2} md={2} xs={1}>
                <Col xl={6} md={6} xs={12} data-aos="fade-up" data-aos-duration="2000" className="skills-languages">
                    <div className="languages">
                        <label htmlFor=""><img src={html}/>HTML
                            <span>90%</span>
                            <progress min={0} value={90} max={100}></progress>
                        </label>
                        <label htmlFor=""><img src={css}/>CSS
                            <span>85%</span>
                            <progress min={0} value={85} max={100}></progress>
                        </label>
                        <label htmlFor=""><img src={bootstrap}/>Bootstrap
                            <span>95%</span>
                            <progress min={0} value={95} max={100}></progress>
                        </label>
                        <label htmlFor=""><img src={tailwind}/>tailwind
                            <span>65%</span>
                            <progress min={0} value={65} max={100}></progress>
                        </label>
                        <label htmlFor=""><img src={javascript}/>JAVASCRIPT
                            <span>40%</span>
                            <progress min={0} value={40} max={100}></progress>
                        </label>
                        <label htmlFor=""><img src={react}/>REACT.JS
                            <span>50%</span>
                            <progress min={0} value={60} max={100}></progress>
                        </label>
                        <label htmlFor=""><img src={node}/>NODE.JS
                            <span>10%</span>
                            <progress min={0} value={10} max={100}></progress>
                        </label>
                    </div>
                </Col>
                <Col xl={6} md={6} xs={12} data-aos="fade-up" data-aos-duration="2000" className="skills-Specialties">
                    <div className="Specialties">
                        <div class="single-chart">
                            <svg viewBox="0 0 36 36" class="circular-chart orange">
                            <path class="circle-bg"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path class="circle"
                                stroke-dasharray="70, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <text x="18" y="20.35" class="percentage">70%</text>
                            </svg>
                            <h4>front-end</h4>
                        </div>
                        
                        <div class="single-chart">
                            <svg viewBox="0 0 36 36" class="circular-chart green">
                            <path class="circle-bg"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path class="circle"
                                stroke-dasharray="5, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <text x="18" y="20.35" class="percentage">5%</text>
                            </svg>
                            <h4>back-end</h4>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <Parallax className='web-developer' strength={500} bgImage={WebDeveloper}></Parallax>
    </section>
  )
}

export default Skills