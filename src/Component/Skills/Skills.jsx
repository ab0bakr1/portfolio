import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3Alt, faHtml5, faNodeJs, faReact, faJs } from '@fortawesome/free-brands-svg-icons';
import "./Skills.css";

const skillData = [
  { name: "HTML5", icon: faHtml5, color: "#e34c26" },
  { name: "CSS3", icon: faCss3Alt, color: "#264de4" },
  { name: "JavaScript", icon: faJs, color: "#f7df1e" },
  { name: "React", icon: faReact, color: "#61dbfb" },
  { name: "Node.js", icon: faNodeJs, color: "#68a063" },
  { name: "Bootstrap", icon: faBootstrap, color: "#7952b3" },
];

const Skills = () => {
  return (
    <section className='skills-section' id='skills'>
      <Container>
        <div className="section-title">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technical <span>Expertise</span>
          </motion.h2>
          <div className="title-line"></div>
        </div>

        <Row className="skills-grid">
          {skillData.map((skill, index) => (
            <Col key={index} lg={4} md={6} xs={12} className="mb-4">
              <motion.div 
                className="skill-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="icon-box">
                  <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                </div>
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <div className="progress-wrapper">
                    <div className="progress-bar-custom">
                      <motion.div 
                        className="progress-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }} // يمكنك تخصيص النسبة لكل مهارة
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
                <div className="card-bg-glow"></div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* كرت إضافي للتقنيات الأخرى بتصميم مختلف */}
        <motion.div 
          className="other-skills-banner"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <p>Other Tools: MongoDB • Express.js • Tailwind CSS • API Integration • Git</p>
        </motion.div>
      </Container>
    </section>
  );
}

export default Skills;