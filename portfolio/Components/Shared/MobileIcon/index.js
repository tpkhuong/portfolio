import React from "react";
import MobileIconStyles from "./MobileIcon.module.css";
import { animateMobileIcon } from "./mobileIconHelper";

export default function MobileIcon({ children, ...props }) {
  return (
    <button
      onClick={animateMobileIcon}
      aria-label="open mobile navigation menu"
      data-isclicked=""
      id="mobile-btn"
      className={MobileIconStyles[`mobile-menu-icon`]}
    >
      <span className={MobileIconStyles[`line`]}></span>
      <span className={MobileIconStyles[`line`]}></span>
      <span className={MobileIconStyles[`line`]}></span>
    </button>
  );
}
