import "./parent.scss";
import Child from "./child/Child";
import SkillsData from "./child/skillsData";

export const Parent1 = () => {
  return (
    <div className="wrapp">
      <div className="skillListContainer">
        {SkillsData[1].slice(0, 5).map((skill, index) => {
          return (
            <Child
              key={index}
              icon={skill.icon}
              title={skill.title}
              precentage={skill.level}
            />
          );
        })}
      </div>
      <div className="skillListSecondContainer">
        {SkillsData[1].slice(5, 10).map((skill, index) => {
            return (
                <Child
                key={index}
                icon={skill.icon}
                title={skill.title}
                precentage={skill.level}
                />
            );
            })}
      </div>
    </div>
  );
};

export const Parent2 = () => {
  return (
    <div className="wrapp">
      <div className="skillListContainer">
        {SkillsData[2].slice(0, 5).map((skill, index) => {
          return (
            <Child
              key={index}
              icon={skill.icon}
              title={skill.title}
              precentage={skill.level}
            />
          );
        })}
      </div>
      <div className="skillListSecondContainer">
        {SkillsData[2].slice(5, 10).map((skill, index) => {
            return (
                <Child
                key={index}
                icon={skill.icon}
                title={skill.title}
                precentage={skill.level}
                />
            );
            })}
      </div>
    </div>
  );
};
