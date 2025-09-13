import React, { useState, useEffect } from "react";
import "../Aboutme/Aboutme.css";
import myPic from "../../Assets/MyPic.png";
import resume from "../../Assets/Manopriya-OrgCv.pdf";
import { motion } from "framer-motion";

const Aboutme = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % flipWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const flipWords = ["Coder", "Designer", "Explorer"];
  return (
    <div className="mainImg">
      <div class="shape"></div>
      <div class="shape2"></div>
      {/* <div class="shape3">
    </div> */}
      <div class="shape4"></div>
      <div className="left">
        <div className="subLeft">
          {/* <div className="nameText"> */}
          <motion.div
            className="nameText"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="normalText">I'm Mano</p>
            <p className="designText">Priya</p>
          </motion.div>
          {/* </div> */}
          {/* <div className="jobText"> */}
          <motion.div
            className="jobText"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flip-container">
              Creative
              <div key={currentIndex} className="flip-word">
                {flipWords[currentIndex]}
              </div>
            </div>
          </motion.div>
          {/* </div> */}
          {/* <div className="aboutText"> */}
          <motion.div
            className="aboutText"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="aboutmePara">
              From idea to interaction — I build interfaces that people
              remember.
            </p>
          </motion.div>

          {/* </div> */}
          <div className="cvBtn">
            {/* <motion.div
            className="cvBtn"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          > */}
            <a href={resume} download>
              <button className="cv">Download CV</button>
            </a>
            {/* </motion.div> */}
          </div>
        </div>
      </div>
      {/* <div className="right"> */}
      <motion.div
        className="right"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img src={myPic} />
      </motion.div>
      {/* </div> */}
    </div>
  );
};

export default Aboutme;
