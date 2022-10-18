import React from "react";
import MainStyles from "./Main.module.css";

export default function Main({ children, ...props }) {
  return (
    <main className={MainStyles[`main`]} role="main">
      {children}
    </main>
  );
}
