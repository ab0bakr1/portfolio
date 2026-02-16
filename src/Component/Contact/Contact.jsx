import React from 'react';
import "./Contact.css";
import { Col, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareFacebook, faSquareGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section className='contact-section' id='contact'>
      <Container>
        <div className="contact-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get In <span>Touch</span>
          </motion.h2>
          <div className="title-underline"></div>
        </div>

        <Row className="align-items-center">
          <Col lg={5} className='mb-5 mb-lg-0'>
            <div className="contact-details">
              <h3>Let's talk about your next project</h3>
              <p className="contact-desc">
                I'm always open to discussing product design work or partnership opportunities.
              </p>
              
              <div className="info-list">
                <div className="info-item">
                  <span>Name</span>
                  <p>Abobakr Zain Almashhor</p>
                </div>
                <div className="info-item">
                  <span>Email</span>
                  <p>abobakralmashhor@gmail.com</p>
                </div>
                <div className="info-item">
                  <span>Phone Numbers</span>
                  <p>+967 730605256 | +966 543770498</p>
                </div>
              </div>

              <div className="social-links-wrapper">
                <a href="http://www.linkedin.com/in/abobakr-almashhor" className="social-btn"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/ab0bakr1" className="social-btn"><FontAwesomeIcon icon={faSquareGithub} /></a>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className="contact-cards-container">
              <motion.a 
                href='https://wa.me/+96876628669' 
                target='_blank' 
                className="action-card whatsapp"
                whileHover={{ y: -10 }}
              >
                <div className="card-icon"><FontAwesomeIcon icon={faWhatsapp} /></div>
                <div className="card-text">
                  <h4>WhatsApp</h4>
                  <p>Direct Chat</p>
                </div>
                <FontAwesomeIcon icon={faPaperPlane} className="arrow-icon" />
              </motion.a>

              <motion.a 
                href='mailto:abobakralmshhor@gmail.com' 
                target='_blank' 
                className="action-card email"
                whileHover={{ y: -10 }}
              >
                <div className="card-icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                <div className="card-text">
                  <h4>Email Me</h4>
                  <p>Send an Inquiry</p>
                </div>
                <FontAwesomeIcon icon={faPaperPlane} className="arrow-icon" />
              </motion.a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact;
