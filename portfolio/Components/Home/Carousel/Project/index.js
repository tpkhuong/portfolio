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
}) {
  return (
    <div
      className={`${ProjectStyle[`${classText}`]}`}
      tabIndex={tab}
      data-pos-index={pos}
      key={Math.random() * forKey}
      aria-hidden={hidden}
      aria-label={label}
      role="group"
      aria-roledescription="slide"
    >
      <span>{spanContent}</span>
    </div>
  );
}
