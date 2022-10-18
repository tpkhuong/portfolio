import React from "react";
import ProjectStyle from "./Project.module.css";

export default function Project({
  children,
  classText,
  tab,
  pos,
  spanContent,
  forKey,
}) {
  return (
    <div
      className={`${ProjectStyle[`${classText}`]}`}
      tabIndex={tab}
      data-pos-index={pos}
      key={Math.random() * forKey}
    >
      <span>{spanContent}</span>
    </div>
  );
}
