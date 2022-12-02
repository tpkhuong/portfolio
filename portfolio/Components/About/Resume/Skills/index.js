import React from "react";
import SkillsStyles from "./Skills.module.css";
import { IoClose } from "react-icons/io5";

export default function Skills({ children, setStateFunc }) {
  return (
    <div className={SkillsStyles[`tab-skills-container`]}>
      <div className={SkillsStyles[`tab-container`]}>
        {/* inline-end border */}
        <h2>Education</h2>
        <button
          role="button"
          onClick={(event) => {
            document
              .getElementById("html")
              .setAttribute("data-isselected", "false");

            setStateFunc((values) => {
              return {
                ...values,
                renderInfo: null,
                panelButtonClicked: "skills",
              };
            });
          }}
          aria-label="close skills panel"
          className={SkillsStyles[`tab-close-btn`]}
        >
          <IoClose className={SkillsStyles[`tab-icon`]} />
        </button>
      </div>
      <div className={SkillsStyles[`skills-container`]}>
        <CSSRule
          selector="College"
          property="University"
          propertyValue="California State University of Northridge;"
        />
      </div>
    </div>
  );
}

function CSSRule({ children, selector, property, propertyValue }) {
  return (
    <React.Fragment>
      <div className={SkillsStyles[`rule-container`]}>
        {/* selector */}
        <p>
          <span className={SkillsStyles[`css-bracket`]}>&#91;</span>
          <span className={SkillsStyles[`css-selector`]}>{selector}</span>
          <span className={SkillsStyles[`css-bracket`]}>&#93;</span>
          <span className={SkillsStyles[`css-bracket`]}>&#123;</span>
        </p>
        {/* property and property value */}
        <p>
          <span className={SkillsStyles[`css-property`]}>{property}</span>
          <span>:</span>
          <span className={SkillsStyles[`css-property-value`]}>
            {propertyValue}
          </span>
        </p>
        {/* closing bracket */}
        <span className={SkillsStyles[`css-bracket`]}>&#125;</span>
      </div>
    </React.Fragment>
  );
}
