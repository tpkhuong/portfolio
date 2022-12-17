import React from "react";
import ProjectCardStyles from "./ProjectCard.module.css";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export default function ProjectCard({
  children,
  page,
  imgSrc,
  imgText,
  title,
  techArray,
  description,
  viewProject,
  viewCode,
  scrollId,
  keyMap,
}) {
  return (
    <article
      id={scrollId}
      className={ProjectCardStyles[`project-container`]}
      data-projectorhomepage={page}
      aria-labelledby="project-title"
    >
      <img className={ProjectCardStyles[`img`]} src={imgSrc} alt={imgText} />
      <div className={ProjectCardStyles[`content-container`]}>
        <h2 id="project-title" className={ProjectCardStyles[`title`]}>
          {title}
        </h2>
        <div className={ProjectCardStyles[`title-tech-container`]}>
          <span className={ProjectCardStyles[`tech-title`]}>Tech:</span>
          <ul className={ProjectCardStyles[`tech-container`]}>
            {techArray.map(function showTech(tech, index) {
              return (
                <li key={Math.random() * index}>
                  <span className={ProjectCardStyles[`${tech}`]}>{tech}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <p className={ProjectCardStyles[`description`]}>{description}</p>
        <div className={ProjectCardStyles[`links-container`]}>
          <a className={ProjectCardStyles[`project-link`]} href={viewProject}>
            <CgWebsite className={ProjectCardStyles[`site-icon`]} />
            <span>view-project</span>
          </a>
          <a className={ProjectCardStyles[`code-link`]} href={viewCode}>
            <FaGithub className={ProjectCardStyles[`github-icon`]} />
            <span>view-code</span>
          </a>
        </div>
      </div>
    </article>
  );
}
