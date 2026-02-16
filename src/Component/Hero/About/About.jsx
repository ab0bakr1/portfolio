import React from 'react';
import "./About.css";
import { Col, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import me from "../../../IMG/me.png";
import CV from "../../../IMG/CV.pdf";

const About = () => {
  return (
    <div className='about'>
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={7} md={12} className='about-info'>
            <motion.h6 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Abobakr Almashhor
            </motion.h6>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Creative <span>Web Developer</span> 
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="description"
            >
              I build high-end, interactive digital experiences with a focus on performance and aesthetics.
            </motion.p>
            
            <motion.div 
              className='about-me'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a download="CV-Abobakr" className='CV-btn' href={CV}>Download CV</a>
              <a className='contact-btn' href="#contact">Contact Me</a>
            </motion.div>
          </Col>

          <Col lg={5} className='d-none d-lg-block'>
            <motion.div 
              className="about-img-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="img-backdrop"></div>
              <img src={me} alt="Abobakr" className="hero-img"/>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About;