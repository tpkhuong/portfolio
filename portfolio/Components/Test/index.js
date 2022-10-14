import React from "react";
import TestStyles from "./Test.module.css";

export default function Test({ children, ...props }) {
  return (
    <React.Fragment>
      <h2 className={TestStyles[`title`]}>{children}</h2>
    </React.Fragment>
  );
}
