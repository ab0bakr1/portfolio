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
AOS.init();

const Skills = () => {
  return (
    <section className='skills' id='skills'>
        <Container>
            <h2>my Skills</h2>
            <div data-aos="fade-up" data-aos-duration="2000" className="skills-languages">
                <Row xl={6} md={6} xs={12} className="languages">
                    <label htmlFor="">
                        <img src={html} alt="HTML"/>
                        HTML
                    </label>
                    <label htmlFor="">
                        <img src={css} alt="CSS"/>
                        CSS
                    </label>
                    <label htmlFor="">
                        <img src={bootstrap} alt="bootstrap"/>
                        Bootstrap
                    </label>
                    <label htmlFor="">
                        <img src={tailwind} alt="tailwind"/>
                        tailwind
                    </label>
                    <label htmlFor="">
                        <img src={javascript} alt="javascript"/>
                        JAVASCRIPT
                    </label>
                    <label htmlFor="">
                        <img src={react} alt="react"/>
                        REACT.JS
                    </label>
                    <label htmlFor="">
                        <img src={node} alt="node"/>
                        NODE.JS
                    </label>
                    <label htmlFor="">
                        <img src={API} alt="API"/>
                        API
                    </label>
                    <label htmlFor="">
                        <img src={MongoDB} alt="MongoDB"/>
                        MongoDB
                    </label>
                </Row>
            </div>
        </Container>
        <Parallax className='web-developer' strength={500} bgImage={WebDeveloper}></Parallax>
    </section>
  )
}

export default Skills