import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import './Portfolio.css';
import Websites from './Websites.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faLock } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  faReact, faCss3, faJs, faBootstrap, faHtml5
};

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const categories = ["all", "Directory", "E-Commerce", "AI Chat", "Landing page", "Weather App"];
  
  const filteredProjects = filter === "all" 
    ? Websites 
    : Websites.filter((w) => w.type.toLowerCase() === filter.toLowerCase());

  return (
    <section className='Portfolio' id='Portfolio'>
      <Container>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Latest <span>Showcase</span>
        </motion.h2>

        <ul className="filter-tabs">
          {categories.map((item) => (
            <li 
              key={item} 
              onClick={() => setFilter(item)} 
              className={filter === item ? "active" : ""}
            >
              {item}
            </li>
          ))}
        </ul>

        <Row className='g-4'>
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <Col key={project.id} lg={4} md={6} xs={12}>
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="project-modern-card"
                >
                  <div className="image-wrapper">
                    <img src={require(`../../IMG/${project.image}`)} alt={project.name} />
                    <div className="overlay-gradient"></div>
                  </div>

                  <div className="project-content">
                    <span className="project-category">{project.type}</span>
                    <h3>{project.name}</h3>
                    
                    <div className="tech-stack">
                      {project.languages.map((icon, i) => (
                        <FontAwesomeIcon key={i} icon={iconMap[icon]} />
                      ))}
                    </div>

                    <div className="project-actions">
                      {project.link !== "#" ? (
                        <a href={project.link} target='_blank' rel="noreferrer" className="view-btn">
                          Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </a>
                      ) : (
                        <span className="offline-btn">
                          Local Build <FontAwesomeIcon icon={faLock} />
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </AnimatePresence>
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;