import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import {motion} from "framer-motion"

import { experiences } from "../constants";

import "react-vertical-timeline-component/style.min.css";

import "./about.scss";

const About = () => {
  return (
      
      <div className='Experiences'>
        <motion.h1 whileHover={{ color: "orange", scale: 1.01 }} className='subtext'> <div className="Orange">Experience.</div></motion.h1>
        <div className='desc1'>
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='VerticalLine'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='icon'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderLeft: "0px",
                  borderTop: "0px",
                  borderRight: "0px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='title'>
                    {experience.title}
                  </h3>
                  <p
                    className='company'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='pointers'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='list'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

  );
};

export default About;
