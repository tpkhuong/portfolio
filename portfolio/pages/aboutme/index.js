import React from "react";
import Head from "next/head";
import AboutStyles from "../../styles/AboutMe.module.css";
import LogoNavbarContainer from "../../Components/Shared/LogoNavbar";
import MobileMenu from "../../Components/Shared/MobileMenu";
import Main from "../../Components/Shared/Main";
import ResumeInfo from "../../Components/About/Resume/index";
import Snippet from "../../Components/About/Snippet/Snippet";
import Footer from "../../Components/Shared/Footer";

export default function AboutMe({ children, ...props }) {
  return (
    <React.Fragment>
      <Head>
        <title>About Me</title>
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>
      <a href="#main-content" className="skip-link">
        Skip to Main Content
      </a>
      <header role="banner">
        <LogoNavbarContainer pageName="aboutme" />
      </header>
      <Main aboutPage="true">
        <div className={AboutStyles[`info-selection-snippet-container`]}>
          {/* learn about me selection and selected info section container */}
          <ResumeInfo />
          {/* snippet container */}
          <Snippet />
        </div>
      </Main>
      <MobileMenu />
      <Footer />
      {/* LearnAboutme-Selection */}
      {/* Selector */}
      {/* Passion */}
      {/* Professional */}
      {/* Skills */}
      {/* Snippet Showcase */}
    </React.Fragment>
  );
}
