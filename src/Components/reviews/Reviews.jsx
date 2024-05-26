import "./reviews.scss";

import { amer, ammar, munim } from "../../assets/images";
import { vector } from "../../assets/icons";
/*
import { useSnapCarousel } from 'react-snap-carousel';
const { scrollRef } = useSnapCarousel();
*/

import {motion} from "framer-motion"

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      staggeredChildren: 0.1,
    },
  },
};


const variantReviewsText = {
  initial: {
    y: 300,
    opacity:0
  },
  animate: {
    y:0,
    opacity: 1,
    transition: {
      duration: 1,
      staggeredChildren: 0.1,
    },
  },
};

export function Reviews() {
  return (
    <div className="review-content" >
    <motion.h1 variants={variants} initial="initial" whileInView="animate">Reviews</motion.h1>
    <motion.div className="reviews" variants={variants } initial="initial" whileInView="animate">
      <motion.ul className="table" variants={variants}>
        <motion.div className="vertical-container1" variants={variants}>
          <motion.div className="vertical-container2" variants={variants}>
            <div className="vector-group">
              <img className="vector-icon15" alt="" src={vector} />
              <motion.div className="they-are-able" variants={variantReviewsText} initial="initial" animate="animate">
                "He was highly dedicated and capable of the COO and CTO
                positions within the company."
              </motion.div>
            </div>
            <div className="vertical-container3">
              <div className="switch-container">
                <div className="paragraph-container1">
                  <motion.b className="joew-harbert" variants={variantReviewsText} initial="initial" animate="animate">Ammar Ajlan</motion.b>
                </div>
                <div className="Person">
                  <img className="switch-icon" alt="" src={ammar} />
                  <motion.div className="ceo-noonbrew" variants={variantReviewsText} initial="initial" animate="animate">CEO, Astro SA</motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="vertical-container1" variants={variants}>
          <motion.div className="vertical-container2" variants={variants}>
            <div className="vector-group">
              <img className="vector-icon15" alt="" src={vector} />
              <motion.div className="they-are-able" variants={variantReviewsText} initial="initial" animate="animate">
                “Yousif is a productive and reliable team member in an office
                full of experienced professionals. Also, his poise and
                communication skills set him apart”
              </motion.div>
            </div>
            <div className="vertical-container3">
              <div className="switch-container">
                <div className="paragraph-container1">
                  <motion.b className="joew-harbert" variants={variantReviewsText} initial="initial" animate="animate">Munim Deen</motion.b>
                </div>
                <div className="Person">
                  <img className="switch-icon" alt="" src={munim} />
                  <motion.div className="ceo-noonbrew" variants={variantReviewsText} initial="initial" animate="animate">
                    Director, Disease Registries, EHC
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="vertical-container1" variants={variants}>
          <motion.div className="vertical-container2" variants={variants}>
            <div className="vector-group">
              <img className="vector-icon15" alt="" src={vector} />
              <motion.div className="they-are-able" variants={variantReviewsText} initial="initial" animate="animate">
                “Yousif's technical expertise is impressive, 
                but it's his communication and leadership skills that truly shine. 
                His knack for mentoring less experienced staff and working effectively in a team setting boosts overall productivity.”
              </motion.div>
            </div>
            <div className="vertical-container3">
              <div className="switch-container">
                <div className="paragraph-container1">
                  <motion.b className="joew-harbert" variants={variantReviewsText} initial="initial" animate="animate">Amer Alomayri</motion.b>
                </div>
                <div className="Person">
                  <img className="switch-icon" alt="" src={amer} />
                  <motion.div className="ceo-noonbrew" variants={variantReviewsText} initial="initial" animate="animate">Founder of Amer Alomari Logitics</motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.ul>
    </motion.div>
    </div>
  );
}

export default Reviews;
