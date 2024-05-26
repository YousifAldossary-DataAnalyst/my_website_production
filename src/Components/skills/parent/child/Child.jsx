import { useEffect, useState, useRef } from "react";
import "./child.scss";
import { motion, useInView } from "framer-motion";

const Child = ({ icon, title, precentage }) => {
  const [style, setStyle] = useState();

  const ref = useRef()

  const isInView = useInView(ref, {margin:"-100px"})

  useEffect(()=>{
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${precentage}`,
      };
      setStyle(newStyle);
    }, 500);
  }, [precentage])

  return (
    <div className="child">
      <div className="Content">
        <div className="skillsLists">
          <div className="left">
            <img src={icon} alt={title} />
          </div>

          <div className="right">
            <h3 className="title">{title}</h3>
            <div className="skill-bar">
              <motion.div className="progress" whileInView={style}>
                <span>{precentage}</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Child;
