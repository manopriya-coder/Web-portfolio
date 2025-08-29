import React from "react";
import "../Navbar/Navbar.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigator = useNavigate();
  return (
    <div className="main">
      {/* <div className="logomain"> */}
      <motion.div
        className="logomain"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="logoCircle"></div>
      </motion.div>
      {/* <div className="logoName"> */}
      <motion.div
        className="logoName"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3>Minifolio</h3>
      </motion.div>
      {/* </div> */}
      {/* </div> */}
      <div className="navMenu">
        <p onClick={() => navigator("/")}>Home</p>
        <p>About me</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
