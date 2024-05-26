import "./tabs.scss";
import { Parent1, Parent2 } from "../parent/Parent";
import { useState } from "react";

export const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="tabsContainer">
      <div className="block-tabs">
        <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
          Technical Skill
        </button>
        <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
          Soft Skill
        </button>
      </div>

      <div className="content-tab">
      <div className="ContentView">
        {toggleState === 1 ? 
        (<Parent1/>)
            :
        (<Parent2/>)
        }
      </div>
      </div>
    </div>
  );
};
