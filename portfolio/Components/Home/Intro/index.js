import React from "react";
import Link from "next/link";
import IntroStyles from "./Intro.module.css";
import { FaChevronRight } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

export default function Intro({ children, ...props }) {
  return (
    <div className={IntroStyles[`intro-wrapper`]}>
      <span></span>
      <h1></h1>
      <div>
        {/* right arrow */}
        <span></span>
      </div>
      <Link href="/">
        <a>
          <span></span>
          <span></span>
        </a>
      </Link>
      <p></p>
      <p></p>
      <p>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </p>
    </div>
  );
}
