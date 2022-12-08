import React from "react";
import Link from "next/link";
import FullNavStyles from "./FullNavMenu.module.css";
import { arrayOfLinkTexts, arrayOfHref } from "../../../utils/storage";

export default function FullNavMenu({ children, currentPage }) {
  return (
    <nav
      className={FullNavStyles[`nav`]}
      role="navigation"
      aria-label="primary"
    >
      <ul role="menubar" className={FullNavStyles[`navlist`]}>
        {arrayOfLinkTexts.map(function createNavlink(linktext, index) {
          return (
            <li
              role="none"
              className={FullNavStyles[`navitem`]}
              key={Math.random() * index}
            >
              <Link href={index === 0 ? "/" : `${arrayOfHref[index]}`}>
                {currentPage == arrayOfHref[index] ? (
                  <a
                    data-iscurrentpage="true"
                    data-isprojectpage={
                      arrayOfHref[index] == "projects" ? "true" : "false"
                    }
                    role="menuitem"
                    className={FullNavStyles[`navlink`]}
                  >
                    <span className={FullNavStyles[`underscore`]}>_</span>
                    <span className={FullNavStyles[`link-text`]}>
                      {linktext}
                    </span>
                  </a>
                ) : (
                  <a
                    role="menuitem"
                    data-notcurrentprojectpage={
                      arrayOfHref[index] == "projects" ? "true" : "false"
                    }
                    className={FullNavStyles[`navlink`]}
                  >
                    <span className={FullNavStyles[`underscore`]}>_</span>
                    <span className={FullNavStyles[`link-text`]}>
                      {linktext}
                    </span>
                  </a>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
