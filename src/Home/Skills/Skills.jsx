import React from "react";
import "../Skills/Skills.css";
import figma from "../../Assets/fig.png";
import rive from "../../Assets/rive.png";
import ps from "../../Assets/ps.png";
import illus from "../../Assets/illus.jpg";
import html from "../../Assets/html.jpg";
import css from "../../Assets/css.png";
import js from "../../Assets/js.png";
import react from "../../Assets/react.png";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="main3">
      <div className="subMain3">
        <p className="heading">Skills & Tools</p>

         <motion.div
          className="Images"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* <div className="Images"> */}
          <div className="grid">
            <img src={html} alt="" />
          </div>
          <div className="grid">
            <img src={css} alt="" />
          </div>
          <div className="grid">
            <img src={js} alt="" />
          </div>
          <div className="grid">
            <img src={react} alt="" />
          </div>
          {/* </div> */}
        </motion.div>


        <motion.div
          className="Images"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* <div className="Images"> */}
          <div className="grid">
            <img src={figma} alt="" />
          </div>
          <div className="grid">
            <img src={rive} alt="" />
          </div>
          <div className="grid">
            <img src={ps} alt="" />
          </div>
          <div className="grid">
            <img src={illus} alt="" />
          </div>
          {/* </div> */}
        </motion.div>
       
      
      </div>
    </div>
  );
};

export default Skills;
