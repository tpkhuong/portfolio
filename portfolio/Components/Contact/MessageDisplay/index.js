import React from "react";
import DisplayStyles from "./MessageDisplay.module.css";

export default function MessageDisplay({ children }) {
  return (
    <div className={DisplayStyles[`message-display-container`]}>{/*  */}</div>
  );
}
