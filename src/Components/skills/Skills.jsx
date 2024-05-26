import "./skills.scss";
import { motion } from "framer-motion";
import { Tabs } from "./tabs/Tabs";


const variants ={
    initial:{
      x: 0,
      y: 100,
      opacity: 1,
    },
    animate:{
      x:0,
      opacity: 1,
      y:0,
      transition:{
        duration: 1, 
        staggeredChildren: 0.1,
      }
    },
}

export const Skills = () => {
  return (
    <motion.div className="skills" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="wrapper">
        <motion.div className="bar">
          <motion.h1
            className="subtext"
            whileHover={{ color: "orange", scale: 1.01 }}
          >
            Skills
          </motion.h1>
          <div className="skillBox">
            <Tabs />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
