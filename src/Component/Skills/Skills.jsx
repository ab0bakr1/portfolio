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
          viewBox="0 0 48 48" 
          width="55" /* زيادة الطول قليلاً للتوازن */
          height="55" 
          fill="#EE5E16" /* اللون البرتقالي المعتمد للامتلاء */
        >
          {/* رسم حرف C بشكل ممتلئ واحترافي */}
          <path d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"/>
          
          {/* رسم علامة الهاشتاج # بشكل ممتلئ ومتناسق */}
          <path d="M34 20h1v8h-1zM37 20h1v8h-1z"/>
          <path d="M32 25h8v1h-8zM32 22h8v1h-8z"/>
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
