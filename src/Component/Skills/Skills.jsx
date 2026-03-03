import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faNodeJs, faReact, faJs } from '@fortawesome/free-brands-svg-icons';
import "./Skills.css";

const Skills = () => {
  // دمج جميع المهارات في قائمة واحدة لتصميم موحد
  const allSkills = [
    { name: "HTML5", icon: faHtml5, type: "font" },
    { name: "React", icon: faReact, type: "font" },
    { name: "JavaScript", icon: faJs, type: "font" },
    { name: "Node.js", icon: faNodeJs, type: "font" },
    { 
      name: ".NET", 
      type: "svg", 
      icon: <svg viewBox="0 0 48 48" width="50" height="50"><path fill="#EE5E16" d="M21.044,27.125h-1.638l-5.856-9.087c-0.146-0.224-0.267-0.463-0.363-0.712h-0.05c0.056,0.519,0.077,1.041,0.062,1.562v8.237h-1.331V15.731h1.731l5.7,8.925c0.237,0.371,0.392,0.625,0.462,0.763h0.031c-0.066-0.556-0.093-1.115-0.081-1.675v-8.012h1.331V27.125z M30.057,27.125h-6.056V15.731h5.775v1.206h-4.412v3.788h4.113v1.2h-4.113v3.95h4.7L30.057,27.125z M39.001,16.938h-3.312v10.188h-1.331V16.938h-3.275v-1.206h7.919V16.938z"/></svg> 
    },
    { 
  name: "C#", 
  type: "svg", 
  icon: (
    <svg 
      viewBox="0 0 24 24" 
      width="50" 
      height="50" 
      fill="#EE5E16"
    >
      {/* رسم حرف C الاحترافي */}
      <path d="M11.5,17.5c-3.03,0-5.5-2.47-5.5-5.5s2.47-5.5,5.5-5.5c1.45,0,2.77,0.56,3.76,1.47l1.45-1.45C15.35,5.2,13.52,4.5,11.5,4.5 C7.36,4.5,4,7.86,4,12s3.36,7.5,7.5,7.5c2.02,0,3.85-0.7,5.22-1.85l-1.45-1.45C14.27,16.94,12.95,17.5,11.5,17.5z"/>
      
      {/* رسم الهاشتاق # بشكل هندسي دقيق بجانب الحرف */}
      <path d="M21,11h-1.11l0.28-1.41l-1.47-0.29L18.41,10.7h-1.2l0.28-1.41l-1.47-0.29l-0.29,1.41H14.5v1.5h1.16l-0.28,1.41h-1.23v1.5 h1.11l-0.28,1.41l1.47,0.29l0.29-1.41h1.2l-0.28,1.41l1.47,0.29l0.29-1.41H21.5v-1.5h-1.16l0.28-1.41H21.5V11z M17.38,13.91h-1.2 l0.28-1.41h1.2L17.38,13.91z"/>
    </svg>
  )
}
  ];

  return (
    <section className='skills-modern' id='skills'>
      <Container>
        <div className="section-title">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technical <span>Toolkit</span>
          </motion.h2>
          <div className="title-glow"></div>
        </div>

        <Row className="justify-content-center">
          {allSkills.map((skill, index) => (
            <Col key={index} lg={2} md={4} sm={6} xs={6} className="mb-4">
              <motion.div 
                className="skill-tile"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10, rotate: index % 2 === 0 ? 2 : -2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="tile-icon">
                  {skill.type === "font" ? (
                    <FontAwesomeIcon icon={skill.icon} />
                  ) : (
                    skill.icon
                  )}
                </div>
                <h3>{skill.name}</h3>
                <div className="tile-glow-effect"></div>
              </motion.div>
            </Col>
          ))}
        </Row>

        <motion.div 
          className="stack-pills"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <span>CSS3</span> <span>MongoDB</span> <span>Tailwind</span> <span>Git</span> <span>Bootstrap</span> <span>API</span>
        </motion.div>
      </Container>
    </section>
  );
}

export default Skills;
