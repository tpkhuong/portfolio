import React from "react";
import MobileIconStyles from "./MobileIcon.module.css";

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

function animateMobileIcon(event) {
  // selector modal wrapper element
  const modalWrapperElement = document.getElementById("mobile-menu-selector");

  event.target.closest("BUTTON").getAttribute("data-isclicked") == "false" ||
  event.target.closest("BUTTON").getAttribute("data-isclicked") === ""
    ? (event.target.closest("BUTTON").setAttribute("data-isclicked", "true"),
      event.target
        .closest("BUTTON")
        .setAttribute("aria-label", "close mobile navigation menu"),
      modalWrapperElement.setAttribute("data-showmenu", "true"))
    : (event.target.closest("BUTTON").setAttribute("data-isclicked", "false"),
      event.target
        .closest("BUTTON")
        .setAttribute("aria-label", "open mobile navigation menu"),
      modalWrapperElement.setAttribute("data-showmenu", "false"));
}
