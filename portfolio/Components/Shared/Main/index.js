import React from "react";
import MainStyles from "./Main.module.css";

export default function Main({ children, whichPage }) {
  return (
    <main
      id="main-content"
      data-currpage={whichPage}
      className={MainStyles[`main`]}
      role="main"
    >
      {children}
    </main>
  );
}
