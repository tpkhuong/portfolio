import React from "react";
import PassionStyles from "./Passion.module.css";
import { IoClose } from "react-icons/io5";

export default function Passion({ children }) {
  return (
    <div className={PassionStyles[`tab-passion-container`]}>
      <div className={PassionStyles[`tab-container`]}>
        {/* inline-end border */}
        <span>Brief Introduction</span>
        <button className={PassionStyles[`tab-close-btn`]}>
          <IoClose className={PassionStyles[`tab-icon`]} />
        </button>
      </div>
      <div className={PassionStyles[`passion-container`]}>
        <HtmlItem tagContent="Title">
          <h2>This is Title</h2>
        </HtmlItem>
      </div>
    </div>
  );
}

function HtmlItem({ children, tagContent }) {
  return (
    <React.Fragment>
      {/* font-size 1.2rem */}
      {/* font-weight 600 */}
      {/* <MdChevronLeft /> */}
      {/* <CgFormatSlash /> */}
      <div>
        <div className={`${PassionStyles["opening"]} ${PassionStyles[`tag`]}`}>
          <span className={PassionStyles[`tag-sign`]}>&lt;</span>
          <span className={PassionStyles[`tag-name`]}>{tagContent}</span>
          <span className={PassionStyles[`tag-sign`]}>&gt;</span>
        </div>
        {/* <MdChevronRight /> */}
        <span className={PassionStyles[`element-content`]}>{children}</span>
        <div className={`${PassionStyles["closing"]} ${PassionStyles[`tag`]}`}>
          {/* <MdChevronLeft /> */}
          {/* <CgFormatSlash /> */}
          <span className={PassionStyles[`tag-sign`]}>&lt;</span>
          <span className={PassionStyles[`tag-sign`]}>/</span>
          <span className={PassionStyles[`tag-name`]}>{tagContent}</span>
          <span className={PassionStyles[`tag-sign`]}>&gt;</span>
          {/* <MdChevronRight /> */}
        </div>
      </div>
    </React.Fragment>
  );
}
