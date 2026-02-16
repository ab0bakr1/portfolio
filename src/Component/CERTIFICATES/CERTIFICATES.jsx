import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import CERTIFICATE1 from "../../IMG/CERTIFICATE1.png";
import CERTIFICATE2 from "../../IMG/CERTIFICATE2.png";
import CERTIFICATE3 from "../../IMG/CERTIFICATE3.png";
import "./CERTIFICATES.css";

const certData = [
  { img: CERTIFICATE1, title: "Frontend Specialist" },
  { img: CERTIFICATE2, title: "Backend Mastery" },
  { img: CERTIFICATE3, title: "Fullstack Diploma" }
];

const CERTIFICATES = () => {
  return (
    <section className='CERTIFICATES-section'>
      <Container>
        <div className="cert-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            HONORS & <span>ACHIEVEMENTS</span>
          </motion.h2>
          <p>Recognitions of technical excellence and continuous learning</p>
        </div>

        <Row className="g-5 justify-content-center">
          {certData.map((cert, index) => (
            <Col lg={4} md={6} xs={12} key={index}>
              <motion.div 
                className="cert-wrapper"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="cert-card">
                  <div className="cert-overlay"></div>
                  <img src={cert.img} alt={cert.title} loading='lazy' />
                  <div className="cert-info">
                    <span>Verified Credential</span>
                    <h4>{cert.title}</h4>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default CERTIFICATES;