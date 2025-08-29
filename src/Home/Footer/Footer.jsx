import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";
import { useContext } from "react";
// import BackgroundContext from "../../Context/BackgroundContext";
import resume from "../../Assets/Mano priya Cv.pdf"

const Footer = () => {
//   const { back } = useContext(BackgroundContext);
  return (
    <motion.section
      className="hire-section"
    //   style={{ backgroundColor: !back ? "#0f1722" : "#1a1a1a" }}
      id="hireme"
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      
      <motion.p
        className="hire-punchline"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Though I’m a fresher, I bring the fire to learn fast, work smart, and grow with your team. 
      </motion.p>

      

      <motion.div
        className="hire-buttons"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a href="#contact" className="btn">Hire Me</a>
        <a href={resume} download className="btn-outline">Download Resume</a>
      </motion.div>
    </motion.section>
  );
};

export default Footer;