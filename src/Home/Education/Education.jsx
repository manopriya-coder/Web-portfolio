import React from "react";
import "../Education/Education.css";
import bgDesign from "../../Assets/lineBg.png";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="education">
      <p>
        Education <span>Details</span>
      </p>
      <motion.div
        className="eduMain"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* <div className="eduMain"> */}
        <div className="eduDetail">
          <h4>
            Bachelor of Science (Information Technology)
            <span className="year">2022-2025</span>
          </h4>
          <h5>The Standard Fireworks Rajaratnam College for Women</h5>
          <h3> Sivaksi, Tamil nadu</h3>
        </div>
        <div className="eduDetail">
          <h4>
            Front End Development & UI /UX Designing
            <span className="year"> 2025</span>
          </h4>
          <h5>Code Purple Academy</h5>
          <h3> Sivaksi, Tamil nadu</h3>
        </div>
        {/* </div> */}
      </motion.div>

      <img src={bgDesign} alt="" />
    </div>
  );
};

export default Education;
