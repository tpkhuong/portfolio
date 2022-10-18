import React from "react";
import Link from "next/link";
import MobileMenuStyles from "./MobileMenu.module.css";
import SocialMedia from "./SocialMediaLink";
import { arrayOfLinkTexts, arrayOfHref } from "../../../utils/storage";

export default function MobileMenu({ children, ...props }) {
  return (
    // height of viewport
    <div
      id="mobile-menu-selector"
      aria-modal="true"
      role="dialog"
      data-showmenu=""
      className={MobileMenuStyles[`mobile-menu-wrapper`]}
    >
      {/* height based on content */}
      <nav
        className={MobileMenuStyles[`mobile-nav`]}
        role="navigation"
        aria-label="secondary"
      >
        <ul role="menubar" className={MobileMenuStyles[`navlist`]}>
          {arrayOfLinkTexts.map(function makeMobileLink(linktext, index) {
            return (
              <li
                key={Math.random() * index}
                className={MobileMenuStyles[`navitem`]}
                role="none"
              >
                <Link href={index === 0 ? "/" : `${arrayOfHref[index]}`}>
                  <a role="menuitem" className={MobileMenuStyles[`navlink`]}>
                    <span className={MobileMenuStyles[`underscore`]}>_</span>
                    <span className={MobileMenuStyles[`linktext`]}>
                      {linktext}
                    </span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <SocialMedia />
    </div>
  );
}
