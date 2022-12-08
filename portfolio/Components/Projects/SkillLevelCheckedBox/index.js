import React from "react";
import SkillLevelStyles from "./SkillLevelCheckedBox.module.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaCheck } from "react-icons/fa";

export default function SkillLevel({ children, textContent, level, testData }) {
  console.log(testData);
  const { objOfValues, testValue, testState } = testData;
  console.log(objOfValues.testArray.includes(level));
  return (
    <button
      className={SkillLevelStyles[`skill-level-btn`]}
      role="checkbox"
      aria-checked={objOfValues.testArray.includes(level) ? "true" : "false"}
      onClick={(event) => {
        if (event.target.closest("BUTTON")) {
          const clickedBtn = event.target.closest("BUTTON");
          //   console.log(objOfValues.testArray, "objOfValues.testArray");
          //   console.log(objOfValues.testArray, event.target.closest("BUTTON").getAttribute("id"));
          if (clickedBtn.getAttribute("aria-checked") == "false") {
            objOfValues.testArray.push(
              event.target.closest("BUTTON").getAttribute("id")
            );
            console.log(
              objOfValues.testArray.includes(
                event.target.closest("BUTTON").getAttribute("id")
              )
            );
            testState(event.target.closest("BUTTON").getAttribute("id"));
            return;
          }

          if (clickedBtn.getAttribute("aria-checked") == "true") {
            // filter out id of button from objOfValues.testArray
            const idOfBtn = clickedBtn.getAttribute("id");
            console.log(idOfBtn, "idOfBtn");
            const arrayWithoutIdOfClickedBtn = objOfValues.testArray.filter(
              function removeClickedBtnId(item, index) {
                return item != idOfBtn;
              }
            );
            objOfValues.testArray = [...arrayWithoutIdOfClickedBtn];
            if (testValue == "same") {
              testState("different");
              return;
            }
            // console.log(
            //   objOfValues.testArray.includes(
            //     event.target.closest("BUTTON").getAttribute("id")
            //   )
            // );
            // console.log(objOfValues.testArray, "objOfValues.testArray");
            testState("same");
          }
        }
      }}
      id={level}
    >
      <span className={SkillLevelStyles[`checkbox`]}>
        <FaCheck className={SkillLevelStyles[`checked-icon`]} />
      </span>
      <span className={SkillLevelStyles[`level-icon-container`]}>
        {level == "novice" ? (
          <FaHtml5
            data-typeoflevel={level}
            className={SkillLevelStyles[`level-icon`]}
          />
        ) : null}
        {level == "junior" ? (
          <FaCss3Alt
            data-typeoflevel={level}
            className={SkillLevelStyles[`level-icon`]}
          />
        ) : null}
        {level == "intermediate" ? (
          <FaJs
            data-typeoflevel={level}
            className={SkillLevelStyles[`level-icon`]}
          />
        ) : null}
        {level == "advanced" ? (
          <FaReact
            data-typeoflevel={level}
            className={SkillLevelStyles[`level-icon`]}
          />
        ) : null}
      </span>
      <span className={SkillLevelStyles[`text`]}>{textContent}</span>
    </button>
  );
}
