import React from "react";
import BackTopStyles from "./BackTop.module.css";
import { FaArrowUp } from "react-icons/fa";

export default function BackTopArrow({ children }) {
  return (
    <React.Fragment>
      <a
        id="back-top"
        data-backtopbtnshown=""
        href="#top-of-screen"
        className={BackTopStyles[`back-top-btn`]}
      >
        <FaArrowUp className={BackTopStyles[`arrow-up`]} />
        <span>Back to Top</span>
      </a>
    </React.Fragment>
  );
}
