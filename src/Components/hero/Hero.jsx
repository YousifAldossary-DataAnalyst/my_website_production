import "./hero.scss";
import { motion } from "framer-motion";
const textVarience = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  }
    ,
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat: Infinity,
    }  
  },
};

const sliderVarience = {
  initial: {
    x: 0
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    }
  },
  };

export const Hero = () => {

  const handleClickScroll = () => {
    const element = document.getElementById('Contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } 
  };

  const handleClickScroll2 = () => {
    const element = document.getElementById('Projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } 
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVarience} initial="initial" animate="animate">
          <motion.h2 variants={textVarience}>YOUSIF ALDOSSARY</motion.h2>
          <motion.h1 variants={textVarience}>
            Data Analytics & Business Development
          </motion.h1>
          <motion.div variants={textVarience} className="buttons">
            <motion.button variants={textVarience} onClick={handleClickScroll2}>
              See the latest work
            </motion.button>
            <motion.button variants={textVarience} onClick={handleClickScroll}>Contact Me</motion.button>
          </motion.div>
          <motion.img src="/scroll.png" alt="" variants={textVarience} animate="scrollButton"/>
        </motion.div>
      </div>
      <motion.div className="slidingText" variants={sliderVarience} initial="initial" animate="animate">
        Dashboards AWS-Cloud-Practitioner Analysis/Analytics Big-Data
        Machine-Learning A.I Full-Stack-Developer Branding
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};
