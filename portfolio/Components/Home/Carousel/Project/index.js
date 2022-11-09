import React from "react";
import ProjectStyle from "./Project.module.css";
import { touchStartForMobile, touchEndForMobile } from "./ProjectHelpers.js";

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
  renderSnapItems,
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
      onTouchEnd={touchEndForMobile.bind({ renderSnapItems })}
      onTouchStart={touchStartForMobile.bind({ renderSnapItems })}
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
      onTouchEnd={touchEndForMobile.bind({ renderSnapItems })}
      onTouchStart={touchStartForMobile.bind({ renderSnapItems })}
    >
      <span>{spanContent}</span>
    </div>
  );
}
