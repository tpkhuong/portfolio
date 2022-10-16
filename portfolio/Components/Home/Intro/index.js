import React from "react";
import Link from "next/link";
import IntroStyles from "./Intro.module.css";
import { FaChevronRight } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

export default function Intro({ children, ...props }) {
  return (
    <div className={IntroStyles[`intro-wrapper`]}>
      <span>Hi all! I am</span>
      <h1>Toan Khuong</h1>
      <div>
        {/* right arrow */}
        <FaChevronRight />
        <span>Web Inclusive Developer</span>
      </div>
      <Link href="/">
        <a
          //   onMouseEnter={(event) => {
          //     event.target.closest("A").getAttribute("data-ishover") === "" ||
          //     event.target.closest("A").getAttribute("data-ishover") === "false"
          //       ? event.target.closest("A").setAttribute("data-ishover", "true")
          //       : null;
          //   }}s
          //   onMouseLeave={(event) => {
          //     event.target.closest("A").getAttribute("data-ishover") === "true"
          //       ? event.target.closest("A").setAttribute("data-ishover", "false")
          //       : null;
          //   }}
          //   data-ishover=""
          className={IntroStyles[`btn`]}
        >
          {/* location icon */}
          <span className={IntroStyles[`location-icon`]}>
            <GoLocation />
          </span>
          <span>Atlanta, Ga</span>
        </a>
      </Link>
      <p>// scroll through the projects I've built</p>
      <p>// you can also see them on my Github page</p>
      <p>
        <span>const</span>
        <span>githubLink</span>
        <span>=</span>
        <Link href="/">
          <a>"https://githuburl"</a>
        </Link>
      </p>
    </div>
  );
}
