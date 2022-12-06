import React from "react";
import SkillLevelStyles from "./SkillLevelCheckedBox.module.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaCheck } from "react-icons/fa";

export default function SkillLevel({ children, textContent, level }) {
  return (
    <button
      className={SkillLevelStyles[`skill-level-btn`]}
      role="checkbox"
      aria-checked="false"
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
