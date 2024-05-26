import { useRef } from "react";
import "./portfolio.scss";
import Projects from "./projects";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      staggeredChildren: 0.1,
    },
  },
};

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [-100, 100]));

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  }

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <motion.div className="imgcontainer">
            <img src={item.img} alt="" ref={ref} />
          </motion.div>
          <motion.div
            className="textcontainer"
            variants={variants}
            whileInView="animate"
            initial="initial"
            style={{ y }}
          >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
              <button onClick={() => openInNewTab(`${item.link}`)} >View Project</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" id="Projects" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressbar">
          <hr />
        </motion.div>
      </div>
      {Projects.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
