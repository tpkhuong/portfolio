import React from "react";
import Head from "next/head";
import ContantStyles from "../../styles/ContantMe.Module.css";
import LogoNavbarContainer from "../../Components/Shared/LogoNavbar";
import MobileMenu from "../../Components/Shared/MobileMenu";
import Main from "../../Components/Shared/Main";
import Footer from "../../Components/Shared/Footer";

export default function Contact({ children }) {
  return (
    <React.Fragment>
      <Head>
        <title>Contact</title>
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>
      <a href="#main-content" className="skip-link">
        Skip to Main Content
      </a>
    </React.Fragment>
  );
}
