import React from "react";
import "../Aboutme2/Aboutme2.css";
// import bgLine from "../../Assets/lineBg.png";
import { motion } from "framer-motion";

const Aboutme2 = () => {
  return (
    <div className="main2">
      <div className="subMain2">
        <div className="heading">
          <p className="white">About</p>
          <p className="green">me</p>
        </div>
        <motion.div
          className="bioBox"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* <div className="bioBox"> */}
          <div className="bio">
            <h4>Name</h4>
            <p>S.Mano priya</p>
          </div>
          <div className="bio">
            <h4>Birthday</h4>
            <p>21 Feb, 2005</p>
          </div>
          <div className="bio">
            <h4>Age</h4>
            <p>20</p>
          </div>
          <div className="bio">
            <h4>Address</h4>
            <p>Kadayanallur, Tamil nadu</p>
          </div>
          <div className="bio">
            <h4>Email</h4>
            <p>manopriya21022005@gmail.com</p>
          </div>
          <div className="bio">
            <h4>Mobile no</h4>
            <p>(+91) 8489287943</p>
          </div>
          {/* </div> */}
        </motion.div>
      </div>
      {/* <img src={bgLine} alt="" className="bgLine" /> */}
    </div>
  );
};

export default Aboutme2;
