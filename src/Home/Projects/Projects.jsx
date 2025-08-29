import React from "react";
import "../Projects/Projects.css";
import Eva from "../../Assets/image.png";
import game from "../../Assets/game.png";
import Cart from "../../Assets/addtocartPIc.png";
import bank from "../../Assets/bankImg.png";
import stationary from "../../Assets/stationary.png";
import { motion } from "framer-motion";

const Projects = () => {
 

  return (
    <div className="main4">
      <div className="mainProjectContainer">
        <p className="mainP">
          My Featured <span>Projects</span>
        </p>
        <div className="figmaProject">
          <motion.div
            className="project1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* <div className="project1"> */}
            <img src={Eva} alt="" />
            <a href="https://eva-e-commerce.netlify.app/">
            <div className="bottom">
              <p className="bottomP">Eva Online Shopping Application</p>
              <div className="icon">
                <i class="ri-arrow-right-up-line"></i>
              </div>
            </div>
            </a>
            {/* </div> */}
          </motion.div>

          {/* <div className="project2"> */}
          <motion.div
            className="project1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img src={game} alt="" />
            <a href="https://game-numberguessing.netlify.app/">
            <div className="bottom">
              <p className="bottomP">Number Guessing Game</p>
              <div className="icon">
                <i class="ri-arrow-right-up-line"></i>
              </div>
            </div>
            </a>
          </motion.div>

          <motion.div
            className="project1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img src={Cart} alt="" />
            <a href="https://reactredux-addtocartlink.netlify.app/">
            <div className="bottom">
              <p className="bottomP">Add To Cart-Redux</p>
              <div className="icon">
                <i class="ri-arrow-right-up-line"></i>
              </div>
            </div>
            </a>
          </motion.div>

           <motion.div
            className="project1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img src={Cart} alt="" />
            <a href="https://reactredux-addtocartlink.netlify.app/">
            <div className="bottom">
              <p className="bottomP">Add To Cart-Redux</p>
              <div className="icon">
                <i class="ri-arrow-right-up-line"></i>
              </div>
            </div>
            </a>
          </motion.div>

          
           <motion.div
            className="project1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img src={bank} alt="" />
            <a href="https://banking-firebase.netlify.app/">
            <div className="bottom">
              <p className="bottomP">Banking Website</p>
              <div className="icon">
                <i class="ri-arrow-right-up-line"></i>
              </div>
            </div>
            </a>
          </motion.div>

             <motion.div
            className="project1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img src={stationary} alt="" />
            <a href="https://stationary-shopping-react.netlify.app/">
            <div className="bottom">
              <p className="bottomP">Stationary Shopping Website</p>
              <div className="icon">
                <i class="ri-arrow-right-up-line"></i>
              </div>
            </div>
            </a>
          </motion.div>

          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
