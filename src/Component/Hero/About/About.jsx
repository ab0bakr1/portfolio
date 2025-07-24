import React from 'react'
import "./About.css"
import { Col, Container, Row } from 'react-bootstrap'
import me from "../../../IMG/me.png"
import CV from "../../../IMG/CV.pdf"
const About = () => {
  return (
    <div className='about'>
        <Container>
            <Row xl={2} md={2} xs={1}>
                <Col xl={6} md={6} xs={12} className='about-info'>
                    <h6>Abobakr Almashhor</h6>
                    <h4><span>I'm a </span>web developer</h4>
                    <div className="animation">
                        <h3></h3>
                    </div>
                    <div className='about-me'>
                        <a download="CV-Abobakr Almashhor" className='CV' href={CV}>Download CV</a>
                        <a className='contact-me' href="#contact">contact me</a>
                    </div>
                </Col>
                <Col xl={6} md={6} xs={12}>
                    <div className="about-img">
                        <img src={me} alt="Photo me" loading='lazy' style={{width:"100%",height:"100%"}}/>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default About