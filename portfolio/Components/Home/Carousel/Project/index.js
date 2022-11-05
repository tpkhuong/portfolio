import React from "react";
import ProjectStyle from "./Project.module.css";

export default function Project({
  children,
  classText,
  tab,
  pos,
  spanContent,
  forKey,
  hidden,
  label,
  idAttr,
}) {
  return idAttr ? (
    <div
      className={`${ProjectStyle[`${classText}`]}`}
      tabIndex={tab}
      data-pos-index={pos}
      aria-hidden={hidden}
      aria-label={label}
      role="group"
      id={idAttr}
      aria-roledescription="slide"
      onTouchEnd={(event) => {
        console.log(event);
      }}
      onTouchStart={(event) => {
        console.log(event);
      }}
    >
      <span>{spanContent}</span>
    </div>
  ) : (
    <div
      className={`${ProjectStyle[`${classText}`]}`}
      tabIndex={tab}
      data-pos-index={pos}
      aria-hidden={hidden}
      aria-label={label}
      role="group"
      aria-roledescription="slide"
      onTouchEnd={(event) => {
        console.log(event);
      }}
      onTouchStart={(event) => {
        console.log(event);
      }}
    >
      <span>{spanContent}</span>
    </div>
  );
}
