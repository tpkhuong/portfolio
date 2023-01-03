import React from "react";
import Head from "next/head";
import ContactStyles from "../../styles/ContactMe.module.css";
import LogoNavbarContainer from "../../Components/Shared/LogoNavbar";
import MobileMenu from "../../Components/Shared/MobileMenu";
import Main from "../../Components/Shared/Main";
import MessageInputs from "../../Components/Contact/MessageInputs";
import MessageDisplay from "../../Components/Contact/MessageDisplay";
import Footer from "../../Components/Shared/Footer";
import {
  BackTopArrow,
  TopScreenSpan,
  isScrolledElementInView,
} from "../../Components/Shared/BackTop/BackTop";

import { GoTriangleDown } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
      <header className={ContactStyles[`header`]} role="banner">
        <LogoNavbarContainer pageName="contactme" />
      </header>
      <Main>
        <div className={ContactStyles[`contact-input-display-container`]}>
          {/* sidebar */}
          <aside
            className={ContactStyles[`contact-tab-container`]}
            role="complementary"
          >
            <div className={ContactStyles[`tab-container`]}>
              <GoTriangleDown className={ContactStyles[`triangle-down`]} />
              <span className={ContactStyles[`text`]}>Contacts</span>
            </div>
            <div className={ContactStyles[`tab-content`]}>
              <a
                className={ContactStyles[`email-container`]}
                href="https:somecoolplace.gmail"
              >
                <MdEmail className={ContactStyles[`email-icon`]} />
                <span className={ContactStyles[`email-content`]}>
                  user@gmail.com
                </span>
              </a>
              <a
                className={ContactStyles[`phone-container`]}
                href="888-888-7888"
              >
                <FaPhoneAlt className={ContactStyles[`phone-icon`]} />
                <span className={ContactStyles[`phone-content`]}>
                  888-888-7888
                </span>
              </a>
            </div>
          </aside>
          <div className={ContactStyles[`message-inputs-display-container`]}>
            {/* input */}
            <MessageInputs />
            {/* dynamic message */}
            <MessageDisplay />
          </div>
        </div>
      </Main>
      <MobileMenu />
      <Footer />
    </React.Fragment>
  );
}
