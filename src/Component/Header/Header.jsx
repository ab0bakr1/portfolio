import React, { useState } from "react";
import "./Header.css"
import { motion } from "framer-motion"
import Button from "./Button";
import Links from "./Links";

const variants = {
    open: {
      clipPath: "circle(1200px at 350px 45px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "clip-path: circle(30px at calc(100% - 15%) 35px);",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

function Header() {
    const [open, setOpen] = useState(false);
    return (
      <header >
          <div>
              <h1 className=""><a className="logo " href="">Portfolio</a></h1>
          </div>
          <nav>
              <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#skills">skills</a></li>
                  <li><a href="#Portfolio">Portfolio</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
          </nav>
          <div className="nav-mobile">
              <motion.div className="nav-side" animate={open ? "open" : "closed"}>
                  <motion.div className="nav-back" variants={variants}>
                  <Links />
                  </motion.div>
                  <Button setOpen={setOpen} />
              </motion.div>
          </div>
      </header>
    )
}
export default Header;
