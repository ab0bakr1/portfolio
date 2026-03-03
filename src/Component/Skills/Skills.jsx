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
      icon: <svg viewBox="0 0 48 48" width="50" height="50"><path fill="rgba(238, 94, 22, 0.02)" fill-rule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clip-rule="evenodd"></path><path fill="rgba(238, 94, 22, 0.02)" fill-rule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clip-rule="evenodd"></path><path fill="#EE5E16" fill-rule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clip-rule="evenodd"></path><path fill="rgb(65,41,29)" fill-rule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clip-rule="evenodd"></path><path fill="#EE5E16" fill-rule="evenodd" d="M34 20H35V28H34zM37 20H38V28H37z" clip-rule="evenodd"></path><path fill="#EE5E16" fill-rule="evenodd" d="M32 25H40V26H32zM32 22H40V23H32z" clip-rule="evenodd"></path> </svg>},
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
