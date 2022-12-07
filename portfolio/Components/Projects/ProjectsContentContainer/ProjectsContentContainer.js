import React from "react";
import ProjectsContentStyles from "./ProjectsContentContainer.module.css";
import SkillLevel from "../SkillLevelCheckedBox";
import { GoTriangleDown } from "react-icons/go";
import { IoClose } from "react-icons/io5";

function Content() {
  const objOfValues = {
    testArray: [],
  };
  return function innerFunc({ children }) {
    const [testValue, testState] = React.useState("false");
    return (
      <div
        className={ProjectsContentStyles[`skill-level-projects-card-container`]}
      >
        <aside
          role="complementary"
          className={ProjectsContentStyles[`skill-level-container`]}
        >
          {/* skill selector */}
          <div className={ProjectsContentStyles[`arrow-text-container`]}>
            <GoTriangleDown className={ProjectsContentStyles[`down-arrow`]} />
            <h2 id="skill-level-label">Projects</h2>
          </div>
          <ul
            role="group"
            aria-describedby="skill-level-label"
            className={
              ProjectsContentStyles[`skill-level-checkboxes-container`]
            }
          >
            {["novice", "junior", "intermediate", "advanced"].map(
              function makeListItem(item, index) {
                return (
                  <li key={Math.random() * index}>
                    <SkillLevel
                      testData={{ objOfValues, testValue, testState }}
                      level={item}
                      textContent={item}
                    />
                  </li>
                );
              }
            )}
          </ul>
        </aside>
        <div className={ProjectsContentStyles[`tab-cards-container`]}>
          <div className={ProjectsContentStyles[`tab-container`]}>
            <h2 className={ProjectsContentStyles[`tab-title`]}>Skill Level</h2>
            <button
              onClick={(event) => {
                console.log(objOfValues.testArray);
                if (objOfValues.testArray.length > 0) {
                  objOfValues.testArray.pop();
                  testState("close");
                }
              }}
              className={ProjectsContentStyles[`close-proj-btn`]}
            >
              <IoClose className={ProjectsContentStyles[`close-icon`]} />
            </button>
          </div>
          <ul className={ProjectsContentStyles[`project-cards-container`]}>
            {objOfValues.testArray.map(function makeCards(item, index) {
              return (
                <li key={Math.random() * index}>
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };
}

export const ProjectsContentContainer = Content();
