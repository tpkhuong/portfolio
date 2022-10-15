import React from "react";
import Link from "next/link";
import FooterStyles from "./Footer.module.css";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer({ children, ...props }) {
  // display flex on footer element
  return (
    <footer role="content-info" className={FooterStyles[`footer`]}>
      {/* text */}
      <span className={FooterStyles[`text`]}>connent with me:</span>
      {/* social media links  */}
      <div className={FooterStyles[`social-media-wrapper`]}>
        <Link href="/">
          <a className={FooterStyles[`social-icon-link`]}>
            <FaGithub className={FooterStyles[`icon`]} />
          </a>
        </Link>
        <Link href="/">
          <a className={FooterStyles[`social-icon-link`]}>
            <FaLinkedin className={FooterStyles[`icon`]} />
          </a>
        </Link>
        <Link href="/">
          <a className={FooterStyles[`social-icon-link`]}>
            <FaTwitter className={FooterStyles[`icon`]} />
          </a>
        </Link>
        {/* <li role="">
        </li>
        <li role="">
        </li>
        <li role="">
        </li> */}
      </div>
    </footer>
  );
}
