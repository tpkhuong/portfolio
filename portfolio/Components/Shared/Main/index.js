import React from "react";
import MainStyles from "./Main.module.css";

export default function Main({ children, ...props }) {
  return (
    <main id="main-content" className={MainStyles[`main`]} role="main">
      {children}
    </main>
  );
}
