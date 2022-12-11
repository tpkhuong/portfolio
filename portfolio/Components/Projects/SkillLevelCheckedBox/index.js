import React from "react";
import SkillLevelStyles from "./SkillLevelCheckedBox.module.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaCheck } from "react-icons/fa";

export default function SkillLevel({ children, textContent, level, testData }) {
  console.log(testData);
  const { objOfValues, arrayOfObjForProjectCard, testValue, testState } =
    testData;
  console.log(objOfValues.testArray.includes(level));
  return (
    <button
      className={SkillLevelStyles[`skill-level-btn`]}
      role="checkbox"
      aria-checked={objOfValues.testArray.includes(level) ? "true" : "false"}
      onClick={(event) => {
        if (event.target.closest("BUTTON")) {
          const clickedBtn = event.target.closest("BUTTON");
          const idStringValue = clickedBtn.getAttribute("id");
          //   console.log(objOfValues.testArray, "objOfValues.testArray");
          //   console.log(objOfValues.testArray, event.target.closest("BUTTON").getAttribute("id"));

          if (clickedBtn.getAttribute("aria-checked") == "false") {
            // use filter method then match obj level property to idStringValue
            // of clicked btn
            const filteredOutObjs = arrayOfObjForProjectCard.filter(
              function getObjs(projObj, index) {
                return projObj.level == idStringValue;
              }
            );
            // add objs to array
            objOfValues.testArray = [
              ...objOfValues.testArray,
              ...filteredOutObjs,
            ];
            testState(event.target.closest("BUTTON").getAttribute("id"));
            return;
          }

          if (clickedBtn.getAttribute("aria-checked") == "true") {
            // filter out id of button from objOfValues.testArray
            // const idStringValue = clickedBtn.getAttribute("id");
            console.log(idStringValue, "idStringValue");
            const arrayOfObjNotMatchedId = objOfValues.testArray.filter(
              function removeClickedBtnId(obj, index) {
                return obj.level != idStringValue;
              }
            );
            objOfValues.testArray = [...arrayOfObjNotMatchedId];
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
