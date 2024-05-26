import "./navbar.scss";
import { motion } from "framer-motion";
import { Sidebar } from "../sidebar/Sidebar";

export const Navbar = () => {
  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.5 },
  };

  return (
    <div className="navbar">
      < Sidebar />
      <div className="wrapper">
        <motion.span
          variants={variants}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 0.5 }}
        >
          Yousif Aldossary
        </motion.span>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", stiffness: 50, damping:10 }}
          className="social"
        >
          <a
            href="https://www.linkedin.com/in/yousif-aldossary-604aa619b/"
            className="linked"
          >
            <motion.img whileHover={{ scale: 1.4 }} src="/linkedin.svg"></motion.img>
          </a>
          <a href="https://wa.me/+966556171075" className="whats">
            <motion.img whileHover={{ scale: 1.4 }} src="/whatsapp.svg"></motion.img>
          </a>
          <a
            href="https://github.com/YousifAldossary-DataAnalyst"
            className="github"
          >
            <motion.img whileHover={{ scale: 1.4 }} src="/github.svg"></motion.img>
          </a>
        </motion.div>
      </div>
      {/* Sidebar */}
    </div>
  );
};
