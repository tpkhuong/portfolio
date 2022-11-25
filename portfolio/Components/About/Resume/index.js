import React from "react";
import ResumeStyles from "./Resume.module.css";
import Passion from "./Passion/index";
import Skills from "./Skills";
import Professional from "./Professional";
import { GoTriangleDown, GoChevronDown } from "react-icons/go";
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

export default function ResumeInfo({ children, ...props }) {
  return (
    <div className={ResumeStyles[`resume-container`]}>
      {/* learn-more-contact-container */}
      {/* inline-start border */}
      <div className={ResumeStyles[`learn-more-contact-container`]}>
        {/* file selector */}
        <div className={ResumeStyles[`file-selector`]}>
          {/* file selector text */}
          <div className={ResumeStyles[`arrow-text-container`]}>
            {/* arrow down */}
            <h2 id="files"></h2>
          </div>

          {/* selectors-container */}
          <div className={ResumeStyles[`selectors-container`]}>
            {/* block border */}
            {/* html */}
            <button>
              {/* arrow icon */}
              {/* file icon */}
              {/* text */}
            </button>
            {/* css */}
            <button></button>
            {/* js */}
            <button></button>
          </div>
        </div>
        {/* content */}
        <div className={ResumeStyles[`contact-container`]}>
          <div className={ResumeStyles[`arrow-text-container`]}>
            {/* block-end border */}
            {/* arrow down */}
            <h2></h2>
          </div>
          <div className={ResumeStyles[`contact-info`]}>
            {/* email */}
            <button>
              {/* icon */}
              {/* text */}
            </button>
            {/* phone */}
            <button></button>
          </div>
        </div>
      </div>
      {/* resume-sections-container */}
      <div className={ResumeStyles[`resume-sections-container`]}>
        {/* inline border */}
        <Passion />
        <Skills />
        <Professional />
      </div>
    </div>
  );
}
