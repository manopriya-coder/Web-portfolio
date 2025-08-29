import React from "react";
import "../Service/Service.css";
import { motion } from "framer-motion";
import serviceBg from "../../Assets/wholeService.png";

const Service = () => {
  return (
    <div className="backGround">
      <img src={serviceBg} alt="" />
      <h3>
        The Ease - <span>Service</span> Process
      </h3>
      <div className="serviceContainer">
        {/* <div className="service"> */}
        <motion.div
          className="service"
          initial={{ opacity: 0, x:200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p>Web Design</p>
        </motion.div>
        {/* </div> */}
        {/* <div className="service"> */}
          <motion.div
          className="service"
          initial={{ opacity: 0, x:200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 ,delay:0.2}}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p>Front-End</p>

        </motion.div>
        {/* </div> */}
        {/* <div className="service"> */}
          <motion.div
          className="service"
          initial={{ opacity: 0, x:200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 ,delay:0.4}}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p>Responsive Design</p>

        </motion.div>
        {/* </div> */}
        {/* <div className="service"> */}
          <motion.div
          className="service"
          initial={{ opacity: 0, x:200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 ,delay:0.6}}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p>Version Control</p>

        </motion.div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Service;
