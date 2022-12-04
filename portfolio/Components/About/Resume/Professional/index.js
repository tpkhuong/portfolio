import React from "react";
import ProfessionalStyles from "./Professional.module.css";
import { IoClose } from "react-icons/io5";

export default function Professional({ children, setStateFunc }) {
  return (
    <div className={ProfessionalStyles[`tab-professional-container`]}>
      <div className={ProfessionalStyles[`tab-container`]}>
        {/* inline-end border */}
        <h2>Professional Experience</h2>
        <button
          role="button"
          onClick={(event) => {
            document
              .getElementById("js")
              .setAttribute("data-isselected", "false");

            setStateFunc((values) => {
              return {
                ...values,
                renderInfo: null,
                panelButtonClicked: "professional",
              };
            });
          }}
          aria-label="close professional experience panel"
          className={ProfessionalStyles[`tab-close-btn`]}
        >
          <IoClose className={ProfessionalStyles[`tab-icon`]} />
        </button>
      </div>
      <div className={ProfessionalStyles[`professional-container`]}>
        <ProfessionalExp
          profVariable="professionalExperienceOne"
          company="48in48"
          city="Atlanta"
          state="Georgia"
          position="Accessibility Auditor"
          date="October 2020 - Present"
        >
          <span>Provides accessibility reviews to project/design teams.</span>
          <span>
            Using Chrome Developer tools and the assistive technology (NVDA) to
            provide recommendations to build teams to develop more screen reader
            and keyboard accessible websites.
          </span>
          <span>
            Checked for these main accessibility issues: Alternative Texts,
            Design and Layouts, Semantic HTML, Written transcripts and Closed
            Captions for video and audio content, Keyboard-only navigation,
            Keyboard Traps.
          </span>
          <span>
            Loved building JavaScript algorithms that will traverse team’s
            website looking for heading, label, img, link, button and input
            elements.
          </span>
        </ProfessionalExp>
        <ProfessionalExp
          profVariable="professionalExperienceTwo"
          company="Homestead Hospice"
          city="Atlanta"
          state="Georgia"
          position="IT Support"
          date="October 2018 - July 2020"
        >
          <span>
            Assist IT team by developing Microsoft Powershell script to import
            bulk user accounts from CSV file to Active Directory.
          </span>
          <span>
            Created Microsoft Powershell script to export Active Directory Users
            information and Computer information.
          </span>
          <span>
            Created Mapped Drive to deploy software and files to User accounts
            in Windows Server.
          </span>
          <span>
            Assist department in setting up laptops, tablets, smartphones,
            desktops for new hires.
          </span>
        </ProfessionalExp>
      </div>
    </div>
  );
}

function ProfessionalExp({
  children,
  profVariable,
  company,
  city,
  state,
  position,
  date,
}) {
  const [first, second, third, fourth] = children;

  return (
    <div className={ProfessionalStyles[`js-style-exp-container`]}>
      {/* const variable = { */}
      <p>
        <span className={ProfessionalStyles[`js-keyword`]}>const</span>
        <span className={ProfessionalStyles[`spacer-inline`]}>
          <span className={ProfessionalStyles[`js-variable`]}>
            {profVariable}
          </span>
        </span>
        <span
          className={`${ProfessionalStyles[`spacer-end`]} ${
            ProfessionalStyles[`assignment-operator`]
          }`}
        >
          =
        </span>
        <span className={ProfessionalStyles[`js-bracket`]}>&#123;</span>
      </p>
      {/* company */}
      <p>
        <span className={ProfessionalStyles[`obj-key`]}>company</span>
        <span className={ProfessionalStyles[`spacer-end`]}>:</span>
        <span className={ProfessionalStyles[`obj-value`]}>{company}</span>
        <span className={ProfessionalStyles[`comma`]}>,</span>
      </p>
      {/* city */}
      <p>
        <span className={ProfessionalStyles[`obj-key`]}>city</span>
        <span className={ProfessionalStyles[`spacer-end`]}>:</span>
        <span className={ProfessionalStyles[`obj-value`]}>{city}</span>
        <span className={ProfessionalStyles[`comma`]}>,</span>
      </p>
      {/* state */}
      <p>
        <span className={ProfessionalStyles[`obj-key`]}>state</span>
        <span className={ProfessionalStyles[`spacer-end`]}>:</span>
        <span className={ProfessionalStyles[`obj-value`]}>{state}</span>
        <span className={ProfessionalStyles[`comma`]}>,</span>
      </p>
      {/* position */}
      <p>
        <span className={ProfessionalStyles[`obj-key`]}>position</span>
        <span className={ProfessionalStyles[`spacer-end`]}>:</span>
        <span className={ProfessionalStyles[`obj-value`]}>{position}</span>
        <span className={ProfessionalStyles[`comma`]}>,</span>
      </p>
      {/* date */}
      <p>
        <span className={ProfessionalStyles[`obj-key`]}>date</span>
        <span className={ProfessionalStyles[`spacer-end`]}>:</span>
        <span className={ProfessionalStyles[`obj-value`]}>{date}</span>
        <span className={ProfessionalStyles[`comma`]}>,</span>
      </p>
      {/* responsibilities */}
      <p>
        <span className={ProfessionalStyles[`obj-key`]}>responsibilities</span>
        <span className={ProfessionalStyles[`spacer-end`]}>:</span>
        <span className={ProfessionalStyles[`js-array-bracket`]}>&#91;</span>
      </p>
      {/* responsibilities content */}
      <p>
        <span className={ProfessionalStyles[`responsibility`]}>{first}</span>
        <span className={ProfessionalStyles[`comma`]}>,</span>
      </p>
      <p>
        <span className={ProfessionalStyles[`responsibility`]}>{second}</span>
        <span className={ProfessionalStyles[`comma`]}>,</span>
      </p>
      <p>
        <span className={ProfessionalStyles[`responsibility`]}>{third}</span>
        <span className={ProfessionalStyles[`comma`]}>,</span>
      </p>
      <p>
        <span className={ProfessionalStyles[`responsibility`]}>{fourth}</span>
        <span className={ProfessionalStyles[`comma`]}>,</span>
      </p>
      {/* responsibilities content */}
      <p className={ProfessionalStyles[`spacer-block-start`]}>
        <span className={ProfessionalStyles[`js-array-bracket`]}>&#93;</span>
        <span className={ProfessionalStyles[`comma`]}>,</span>
      </p>
      <p>
        <span className={ProfessionalStyles[`js-bracket`]}>&#125;</span>
        <span className={ProfessionalStyles[`semi-colon`]}>;</span>
      </p>
    </div>
  );
}
