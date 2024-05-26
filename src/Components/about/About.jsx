import "./about.scss";
import { InformationMe } from "./information/Information";
import { motion } from "framer-motion";
import cartoon from "./information/Cartoon.jpg";

const variants = {
  initial: {
    x: 500,
    y: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggeredChildren: 0.1,
    },
  },
};


export const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="infoContainer">
        <motion.h1 whileHover={{ color: "orange", scale: 1.01 }} className="Title">About</motion.h1>
        <motion.div
          className="information"
          
        >
          <motion.div className="imageContainer">
            <motion.img
              src={cartoon}
              alt="loading..."
              initial={{ x:-500, opacity:0 }}
              animate={{ x:0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 1 }}
            />
          </motion.div>

          <motion.div className="textcotainer" variants={variants}
          initial="initial"
          animate="animate">
            <h1>
              <b>Hello 👋</b>, welcome to my website.
            </h1>
            <div className="items" >
              <InformationMe />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
