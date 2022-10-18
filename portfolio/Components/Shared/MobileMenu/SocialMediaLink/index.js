import React from "react";
import Link from "next/link";
import SocialMediaStyles from "./SocialMedia.module.css";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function SocialMedia({ children, ...props }) {
  // display flex on footer element
  return (
    <div className={SocialMediaStyles[`social-container`]}>
      {/* text */}
      <span className={SocialMediaStyles[`text`]}>connent with me:</span>
      {/* social media links  */}
      <div className={SocialMediaStyles[`social-media-wrapper`]}>
        <Link href="/">
          <a className={SocialMediaStyles[`social-icon-link`]}>
            <FaGithub className={SocialMediaStyles[`icon`]} />
          </a>
        </Link>
        <Link href="/">
          <a className={SocialMediaStyles[`social-icon-link`]}>
            <FaLinkedin className={SocialMediaStyles[`icon`]} />
          </a>
        </Link>
        <Link href="/">
          <a className={SocialMediaStyles[`social-icon-link`]}>
            <FaTwitter className={SocialMediaStyles[`icon`]} />
          </a>
        </Link>
        {/* <li role="">
        </li>
        <li role="">
        </li>
        <li role="">
        </li> */}
      </div>
    </div>
  );
}
