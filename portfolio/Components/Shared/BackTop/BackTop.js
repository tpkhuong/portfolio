import React from "react";
import BackTopStyles from "./BackTop.module.css";
import { FaArrowUp } from "react-icons/fa";

export function BackTopArrow({
  children,
  isMobile,
  isDeaktop,
  hrefValue,
  idAttr,
  currentPage,
}) {
  return (
    <React.Fragment>
      <a
        id={idAttr}
        data-backtopbtnshown="false"
        href={`#${hrefValue}`}
        data-linkbtnmobile={isMobile}
        data-currentpage={currentPage}
        data-linkbtndesktop={isDeaktop}
        className={BackTopStyles[`back-top-btn`]}
      >
        <FaArrowUp className={BackTopStyles[`arrow-up`]} />
        <span className={BackTopStyles[`btn-content`]}>Back to Top</span>
      </a>
    </React.Fragment>
  );
}

export function TopScreenSpan({ children, isMobile, isDesktop, hrefValue }) {
  return (
    <React.Fragment>
      <span
        className={BackTopStyles[`top-span`]}
        data-spanmobile={isMobile}
        data-spandesktop={isDesktop}
        id={hrefValue}
      ></span>
    </React.Fragment>
  );
}

export function isScrolledElementInView(element, container, addHeight) {
  const rect = element.getBoundingClientRect();
  const elementTop = rect.top;
  const elementBottom = rect.bottom;

  const containerHeight = !container.getBoundingClientRect
    ? container.innerHeight
    : container.getBoundingClientRect().height - addHeight;

  console.log(
    container.getBoundingClientRect,
    "container.getBoundingClientRect"
  );
  console.log(containerHeight, "containerHeight");
  const isVisible = elementTop >= 0 && elementBottom <= containerHeight;

  return isVisible;
}
