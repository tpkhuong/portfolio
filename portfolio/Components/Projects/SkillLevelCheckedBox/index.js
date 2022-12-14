import React from "react";
import SkillLevelStyles from "./SkillLevelCheckedBox.module.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaCheck } from "react-icons/fa";

export default function SkillLevel({
  children,
  textContent,
  level,
  projCardData,
}) {
  console.log(projCardData);
  const {
    objOfValues,
    arrayOfObjForProjectCard,
    projCardValue,
    setProjCardState,
  } = projCardData;
  console.log(objOfValues.arrayOfCardsToRender.includes(level));
  return (
    <button
      className={SkillLevelStyles[`skill-level-btn`]}
      role="checkbox"
      aria-checked={
        objOfValues.arrayOfSkillLevelStrings.includes(level) ? "true" : "false"
      }
      onClick={(event) => {
        if (event.target.closest("BUTTON")) {
          const clickedBtn = event.target.closest("BUTTON");
          const idStringValue = clickedBtn.getAttribute("id");
          //   console.log(objOfValues.arrayOfCardsToRender, "objOfValues.arrayOfCardsToRender");
          //   console.log(objOfValues.arrayOfCardsToRender, event.target.closest("BUTTON").getAttribute("id"));

          if (clickedBtn.getAttribute("aria-checked") == "false") {
            // use filter method then match obj level property to idStringValue
            // of clicked btn
            const filteredOutObjs = objOfValues.copiedArrayOfObjs.filter(
              function getObjs(projObj, index) {
                return projObj.level == idStringValue;
              }
            );

            objOfValues.copiedArrayOfObjs =
              objOfValues.copiedArrayOfObjs.filter(function notClickedBtn(
                obj,
                index
              ) {
                return obj.level != idStringValue;
              });

            console.log(
              objOfValues.copiedArrayOfObjs,
              "objOfValues.copiedArrayOfObjs"
            );

            objOfValues.arrayOfSkillLevelStrings.push(idStringValue);

            // add objs to array
            objOfValues.arrayOfCardsToRender = [
              ...objOfValues.arrayOfCardsToRender,
              ...filteredOutObjs,
            ];

            objOfValues.arrayForProjCardsTab =
              objOfValues.arrayForProjCardsTab.filter(function removeStr(
                str,
                index
              ) {
                return str != idStringValue;
              });

            console.log(objOfValues, "objOfValues");

            // document.getElementById("dynamic-level-shown").innerText =
            //   objOfValues.arrayOfSkillLevelStrings
            //     .map(function uppercaseFirstLetter(item, index) {
            //       const firstLetter = item[0].toUpperCase();
            //       const restOfStr = item.slice(1);

            //       const concatLetters = [firstLetter, ...restOfStr].join("");
            //       return concatLetters;
            //     })
            //     .join(",");

            setProjCardState(event.target.closest("BUTTON").getAttribute("id"));
            return;
          }

          if (clickedBtn.getAttribute("aria-checked") == "true") {
            console.log(objOfValues, "objOfValues");
            // filter out id of button from objOfValues.arrayOfCardsToRender
            // const idStringValue = clickedBtn.getAttribute("id");
            const arrayOfObjNotMatchedId =
              objOfValues.arrayOfCardsToRender.filter(
                function removeClickedBtnId(obj, index) {
                  return obj.level != idStringValue;
                }
              );

            objOfValues.arrayOfSkillLevelStrings =
              objOfValues.arrayOfSkillLevelStrings.filter(
                function removeClickedBtnString(item, index) {
                  return item != idStringValue;
                }
              );

            if (objOfValues.arrayForProjCardsTab.length < 5) {
              objOfValues.arrayForProjCardsTab = [
                ...objOfValues.arrayForProjCardsTab,
                idStringValue,
              ];
              console.log(idStringValue, "idStringValue");
              const arrayOfClickedBtnObjs =
                objOfValues.arrayOfCardsToRender.filter(function getObjs(
                  obj,
                  index
                ) {
                  return obj.level == idStringValue;
                });
              console.log(arrayOfClickedBtnObjs, "arrayOfClickedBtnObjs");

              objOfValues.copiedArrayOfObjs = [
                ...objOfValues.copiedArrayOfObjs,
                ...arrayOfClickedBtnObjs,
              ];

              console.log(objOfValues, "objOfValues");
              // console.log(
              //   objOfValues.copiedArrayOfObjs,
              //   "objOfValues.copiedArrayOfObjs"
              // );
            }
            console.log(
              objOfValues.arrayOfCardsToRender,
              "objOfValues.arrayOfCardsToRender"
            );

            objOfValues.arrayOfCardsToRender = [...arrayOfObjNotMatchedId];

            console.log(
              objOfValues.arrayOfCardsToRender,
              "objOfValues.arrayOfCardsToRender"
            );

            if (projCardValue == "same") {
              setProjCardState("different");
              return;
            }
            // console.log(
            //   objOfValues.arrayOfCardsToRender.includes(
            //     event.target.closest("BUTTON").getAttribute("id")
            //   )
            // );
            // console.log(objOfValues.arrayOfCardsToRender, "objOfValues.arrayOfCardsToRender");
            setProjCardState("same");
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

["novice", "junior", "intermediate", "advanced"].map(
  function capitalizeFirstChar(str, index) {
    const firstLetter = str[0].toUpperCase();
    const rest = str.slice(1);

    const combine = [firstLetter, ...rest].join("");
    return combine;
  }
);
