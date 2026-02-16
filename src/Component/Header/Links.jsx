import React from 'react'
import { motion } from "framer-motion";
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
const Links = () => {
    const items = ["HOME", "SKILLS", "PORTFOLIO", "CONTACT"];
  return (
    <motion.div className="ul" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
      <div className="side-socail">
        <a href='https://github.com/ab0bakr1' target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
        <a href='https://wa.me/+96876628669' target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a>
        <a href='http://www.linkedin.com/in/abobakr-almashhor' target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href='mailto:abobakralmshhor@gmail.com' target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
      </div>
    </motion.div>
  )
}

export default Links