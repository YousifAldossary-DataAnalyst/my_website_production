

import "./information.scss"
import { motion } from "framer-motion";

const todaysDate = new Date();
const Age = todaysDate.getFullYear() - 1992;

const variants = {
  initial: {
    x:0,
    y: 500,
    opacity: 0,
  },
  animate: {
    x:0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggeredChildren: 0.1,
      delay:0.5,
    },
  },
};

export const InformationMe = () => {
  return (
    <motion.div className="informMe"
    variants={variants}
    initial="initial"
    animate="animate">
      <motion.ul className="pointers">
        <motion.li > <b>Name:</b> Yousif Aldossary.</motion.li>
        <motion.li> <b>Age:</b> {Age} </motion.li>
        <motion.li> <b>Nationality:</b> Saudi Araiba. </motion.li>
        <motion.li> <b>Professions:</b> Branding, Data Analytics, Front-End Developer, & UX/UI. </motion.li>
        <motion.li> <b>Languages:</b> Arabic, English, and German A-Level. </motion.li>
       < motion.li> <b>Freelance:</b> Available. </ motion.li>
      </motion.ul>
    </motion.div>
  )
}
