import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggeredChildren: 0.1,
    },
  },
  hover: {
    y: 2,
    transition: {
      duration: 1,
      staggeredChildren: 0.1,
    },
  },
};

export const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  }

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on developing your skills
          <br />& help youe brand to grow.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <motiondiv className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </motiondiv>
        <div className="title">
          <h1>
            <b>For Your</b> Business.
          </h1>
          <button>What I do.</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{
            backgroundColor: "lightgrey",
            color: "black",
            scale: 1.03,
          }}
        >
          <h2>
            Business Development for Food & Beverages.
            <u> Starting from 4,000 SAR/Month</u>
          </h2>
          <p>
            <li className="li"> LazyWait POS, for one branch valid for 1 year. </li>
            <li className="li"> Business Analysis and Building Strategies. </li>
            <li className="li"> Market Analysis.</li>
            <li className="li"> Branding. </li>
            <li className="li"> Hospitality. </li>
            <li className="li"> Sales Guidelines. </li>
            <li className="li"> Consultation. </li>
            <li className="li"> Monthly check-ups. </li>
          </p>
          <button onClick={() => openInNewTab('https://calendly.com/reacttest')}>Book a Meeting</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{
            backgroundColor: "lightgrey",
            color: "black",
            scale: 1.03,
          }}
        >
          <h2>
            Straight "A" Learners <u>Free Service</u>
          </h2>
          <p>
            <ul className="ul">
              <li className="li"> Improve Your Learning. </li>
              <li className="li"> How to Study for your Exams. </li>
              <li className="li"> Career Guidance.</li>
              <li className="li"> Power of Communication. </li>
              <li className="li"> Personal Development. </li>
              <li className="li"> Personal Development. </li>
              <li className="li"> Monthly Consultations. </li>
              <li className="li"> Protfolio Website (100 SAR). </li>
              <li className="li"> CV Guide. </li>
              <li className="li"> Organizing Your Personal Life. </li>
            </ul>
          </p>
          <button onClick={() => openInNewTab('https://calendly.com/reacttest')}>Book a Meeting</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
