import React from "react";
import MainStyles from "./Main.module.css";

export default function Main({ children, aboutPage }) {
  return (
    <main
      id="main-content"
      data-isaboutpage={aboutPage}
      className={MainStyles[`main`]}
      role="main"
    >
      {children}
    </main>
  );
}
