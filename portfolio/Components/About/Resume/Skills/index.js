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
          inlineEndSpacer=""
          propertyValue="California State University of Northridge;"
        />
        <CSSRule
          selector="Degree"
          property="Bachelor of Science"
          inlineEndSpacer=""
          propertyValue="Business Administration Finance;"
        />
        <CSSRule
          selector="Year-Completed"
          property="Graduated"
          inlineEndSpacer=""
          propertyValue="2008;"
        />
        <CSSRule
          selector="Cisco-Certificate"
          property="Cisco Certified Entry Level Tech"
          inlineEndSpacer=""
          propertyValue="May 2018;"
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
          <span
            className={`${SkillsStyles[`css-bracket`]} ${
              SkillsStyles[`spacer-inline-end`]
            }`}
          >
            &#93;
          </span>
          <span className={SkillsStyles[`css-bracket`]}>&#123;</span>
        </p>
        {/* property and property value */}
        <p className={SkillsStyles[`css-property-container`]}>
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
