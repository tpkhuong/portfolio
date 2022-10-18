import React from "react";
import Link from "next/link";
import IntroStyles from "./Intro.module.css";
import { FaChevronRight, FaArrowLeft } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

export default function Intro({ children, ...props }) {
  return (
    <div className={IntroStyles[`intro-wrapper`]}>
      <span className={IntroStyles[`greeting`]}>Hi all! I am</span>
      <h1 className={IntroStyles[`name`]}>Toan Khuong</h1>
      <div className={IntroStyles[`arrow-profession-wrapper`]}>
        {/* right arrow */}
        <FaChevronRight className={IntroStyles[`chevron-right`]} />
        <span className={IntroStyles[`life-love`]}>
          Web Inclusive Developer
        </span>
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
          className={IntroStyles[`location-btn-icon-wrapper`]}
        >
          {/* location icon */}
          <GoLocation className={IntroStyles[`location-icon`]} />
          <span className={IntroStyles[`location`]}>Atlanta, Ga</span>
        </a>
      </Link>
      <p className={IntroStyles[`comments`]}>
        // on the right scroll through the projects I've built.
      </p>
      <p className={IntroStyles[`comments`]}>
        // you can also see them on my github page.
      </p>
      <p className={IntroStyles[`statement-declaration`]}>
        <span className={IntroStyles[`js-keyword`]}>const</span>
        <span className={IntroStyles[`variable`]}>githubLink</span>
        <span className={IntroStyles[`operator`]}>=</span>
        <Link href="/">
          <a className={IntroStyles[`github-link`]}>
            "https://github.com/tpkhuong"
          </a>
        </Link>
      </p>
      {/* scroll up */}
      <button className={IntroStyles[`attention`]}>
        <FaArrowLeft className={IntroStyles[`arrow-left`]} />
        <span>swipe left to see projects.</span>
      </button>
    </div>
  );
}
