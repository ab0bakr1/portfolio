import React from 'react';
import "./Footer.css";
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-modern">
      <Container>
        <div className="footer-divider">
          <div className="divider-glow"></div>
        </div>
        
        <div className="footer-content">
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3>
              Built with Passion by <span>Abobakr Almashhor</span>
            </h3>
          </motion.div>
          
          <div className="footer-copyright">
            <p>© {currentYear} All Rights Reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;