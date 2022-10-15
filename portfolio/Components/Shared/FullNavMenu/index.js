import React from "react";
import Link from "next/link";
import FullNavStyles from "./FullNavMenu.module.css";
import { arrayOfLinkTexts, arrayOfHref } from "../../../utils/storage";

export default function FullNavMenu({ children, ...props }) {
  return (
    <nav role="navigation" aria-label="primary">
      <ul role="menubar" className={FullNavStyles[`navlist`]}>
        {arrayOfLinkTexts.map(function createNavlink(linktext, index) {
          return (
            <li
              role="none"
              className={FullNavStyles[`navitem`]}
              key={Math.random() * index}
            >
              <Link href={index === 0 ? "/" : `${arrayOfHref[index]}`}>
                <a role="menuitem" className={FullNavStyles[`navlink`]}>
                  <span className={FullNavStyles[`underscore`]}>_</span>
                  <span className={FullNavStyles[`link-text`]}>{linktext}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
