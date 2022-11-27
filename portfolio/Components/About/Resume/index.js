import React from "react";
import ResumeStyles from "./Resume.module.css";
import Passion from "./Passion/index";
import Skills from "./Skills";
import Professional from "./Professional";
import { GoTriangleDown, GoChevronRight } from "react-icons/go";
import { FaHtml5, FaCss3Alt, FaJs, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ResumeInfo({ children, ...props }) {
  const [renderInfo, setResumeInfo] = React.useState(null);
  return (
    <div className={ResumeStyles[`resume-container`]}>
      {/* learn-more-contact-container */}
      {/* inline-start border */}
      <aside
        role="complementary"
        className={ResumeStyles[`learn-more-contact-container`]}
      >
        {/* file selector */}
        <div className={ResumeStyles[`file-selector`]}>
          {/* file selector text */}
          <div className={ResumeStyles[`arrow-text-container`]}>
            {/* arrow down */}
            <GoTriangleDown className={ResumeStyles[`triangle-down`]} />
            {/* hide at mobile size */}
            <h2 id="files">Info Selector</h2>
          </div>

          {/* selectors-container */}
          <div
            className={ResumeStyles[`selectors-container`]}
            onClick={(event) => {
              if (event.target.closest("BUTTON")) {
                const buttonID = event.target
                  .closest("BUTTON")
                  .getAttribute("id");

                if (buttonID == "html") {
                  const htmlBtn = document.getElementById(buttonID);

                  htmlBtn.getAttribute("data-isselected") == "false"
                    ? htmlBtn.setAttribute("data-isselected", "true")
                    : null;

                  htmlBtn.nextElementSibling.getAttribute("data-isselected") ==
                  "true"
                    ? htmlBtn.nextElementSibling.setAttribute(
                        "data-isselected",
                        "false"
                      )
                    : null;

                  htmlBtn.nextElementSibling.nextElementSibling.getAttribute(
                    "data-isselected"
                  ) == "true"
                    ? htmlBtn.nextElementSibling.nextElementSibling.setAttribute(
                        "data-isselected",
                        "false"
                      )
                    : null;
                }

                if (buttonID == "css") {
                  const cssBtn = document.getElementById(buttonID);

                  cssBtn.getAttribute("data-isselected") == "false"
                    ? cssBtn.setAttribute("data-isselected", "true")
                    : null;

                  cssBtn.previousElementSibling.getAttribute(
                    "data-isselected"
                  ) == "true"
                    ? cssBtn.previousElementSibling.setAttribute(
                        "data-isselected",
                        "false"
                      )
                    : null;

                  cssBtn.nextElementSibling.getAttribute("data-isselected") ==
                  "true"
                    ? cssBtn.nextElementSibling.setAttribute(
                        "data-isselected",
                        "false"
                      )
                    : null;
                }

                if (buttonID == "js") {
                  const jsBtn = document.getElementById(buttonID);

                  jsBtn.getAttribute("data-isselected") == "false"
                    ? jsBtn.setAttribute("data-isselected", "true")
                    : null;

                  jsBtn.previousElementSibling.getAttribute(
                    "data-isselected"
                  ) == "true"
                    ? jsBtn.previousElementSibling.setAttribute(
                        "data-isselected",
                        "false"
                      )
                    : null;

                  jsBtn.previousElementSibling.previousElementSibling.getAttribute(
                    "data-isselected"
                  ) == "true"
                    ? jsBtn.previousElementSibling.previousElementSibling.setAttribute(
                        "data-isselected",
                        "false"
                      )
                    : null;
                }
              }
            }}
          >
            {/* block border */}
            {/* html */}
            <button
              tabIndex="-1"
              data-isselected="false"
              id="html"
              className={ResumeStyles[`selector-btn`]}
            >
              {/* arrow icon */}
              <GoChevronRight className={ResumeStyles[`file-right-icon`]} />
              {/* file icon */}
              <FaHtml5 className={ResumeStyles[`html-icon`]} />
              {/* text */}
              <span className={ResumeStyles[`file-name`]}>briefBio.html</span>
            </button>
            {/* css */}
            <button
              data-isselected="false"
              id="css"
              className={ResumeStyles[`selector-btn`]}
            >
              <GoChevronRight className={ResumeStyles[`file-right-icon`]} />
              <FaCss3Alt className={ResumeStyles[`css-icon`]} />
              <span className={ResumeStyles[`file-name`]}>education.css</span>
            </button>
            {/* js */}
            <button
              data-isselected="false"
              id="js"
              className={ResumeStyles[`selector-btn`]}
            >
              <GoChevronRight className={ResumeStyles[`file-right-icon`]} />
              <FaJs className={ResumeStyles[`js-icon`]} />
              <span className={ResumeStyles[`file-name`]}>
                workExperience.js
              </span>
            </button>
          </div>
        </div>
        {/* content */}
        <div className={ResumeStyles[`contact-container`]}>
          <div className={ResumeStyles[`arrow-text-container`]}>
            {/* hide at mobile size */}
            {/* block-end border */}
            {/* arrow down */}
            <GoTriangleDown className={ResumeStyles[`triangle-down`]} />
            <h2>Contacts</h2>
          </div>
          <div className={ResumeStyles[`contact-info`]}>
            {/* email */}
            <a href="https://tpkhuong@gmail.com">
              {/* icon */}
              <MdEmail className={ResumeStyles[`contact-email-icon`]} />
              {/* text */}
              <span>user@gmail.com</span>
            </a>
            {/* phone */}
            <a href="tel:3233849875">
              <FaPhoneAlt className={ResumeStyles[`contact-phone-icon`]} />
              <span>3233849875</span>
            </a>
          </div>
        </div>
      </aside>
      {/* resume-sections-container */}
      <div className={ResumeStyles[`resume-sections-container`]}>
        {/* inline border */}
        {!renderInfo ? (
          <button
            onClick={(event) => {
              document.getElementById("html").focus();

              event.target
                .closest("BUTTON")
                .getAttribute("data-emptybtnclicked") === ""
                ? event.target
                    .closest("BUTTON")
                    .setAttribute("data-emptybtnclicked", "true")
                : null;

              setTimeout(() => {
                event.target
                  .closest("BUTTON")
                  .getAttribute("data-emptybtnclicked") === "true"
                  ? event.target
                      .closest("BUTTON")
                      .setAttribute("data-emptybtnclicked", "")
                  : null;
              }, 500);
            }}
            data-emptybtnclicked=""
            className={ResumeStyles[`empty-btn`]}
          >
            <span className={ResumeStyles[`empty-btn-wrapper`]}>
              <span className={ResumeStyles[`empty-btn-text`]}>
                Select a File to view info.
              </span>
            </span>
          </button>
        ) : null}
        {renderInfo == "yup" ? <h3>Hello world!</h3> : null}
        {/* <Passion /> */}
        {/* <Skills /> */}
        {/* <Professional /> */}
      </div>
    </div>
  );
}
