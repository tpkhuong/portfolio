import React from "react";
import Head from "next/head";
import ProjectsStyles from "../../styles/Projects.module.css";
import MobileMenu from "../../Components/Shared/MobileMenu";
import LogoNavbarContainer from "../../Components/Shared/LogoNavbar";
import Main from "../../Components/Shared/Main";
import Footer from "../../Components/Shared/Footer";

export default function Projects({ children }) {
  return (
    <React.Fragment>
      <Head>
        <title>Projects</title>
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>
      <a href="#main-content" className="skip-link">
        Skip to Main Content
      </a>
      <header role="banner"></header>
      <h1>this is projects page</h1>
    </React.Fragment>
  );
}
