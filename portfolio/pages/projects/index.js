import React from "react";
import Head from "next/head";
import ProjectsStyles from "../../styles/Projects.module.css";
import MobileMenu from "../../Components/Shared/MobileMenu";
import SkillLevel from "../../Components/Projects/SkillLevelCheckedBox/index";
import LogoNavbarContainer from "../../Components/Shared/LogoNavbar";
import Main from "../../Components/Shared/Main";
import Footer from "../../Components/Shared/Footer";
import { GoTriangleDown } from "react-icons/go";
import { IoClose } from "react-icons/io5";

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
      <header role="banner">
        <LogoNavbarContainer pageName="projects" />
      </header>
      <Main>
        <div className={ProjectsStyles[`skill-level-projects-card-container`]}>
          <aside
            role="complementary"
            className={ProjectsStyles[`skill-level-container`]}
          >
            {/* skill selector */}
            <div className={ProjectsStyles[`arrow-text-container`]}>
              <GoTriangleDown className={ProjectsStyles[`down-arrow`]} />
              <h2 id="skill-level-label">Projects</h2>
            </div>
            <ul
              role="group"
              aria-describedby="skill-level-label"
              className={ProjectsStyles[`skill-level-checkboxes-container`]}
            >
              {["novice", "junior", "intermediate", "advanced"].map(
                function makeListItem(item, index) {
                  return (
                    <li key={Math.random() * index}>
                      <SkillLevel level={item} textContent={item} />
                    </li>
                  );
                }
              )}
            </ul>
          </aside>
          <div className={ProjectsStyles[`tab-cards-container`]}>
            <div className={ProjectsStyles[`tab-container`]}>
              <h2 className={ProjectsStyles[`tab-title`]}>Skill Level</h2>
              <button className={ProjectsStyles[`close-proj-btn`]}>
                <IoClose className={ProjectsStyles[`close-icon`]} />
              </button>
            </div>
            <div className={ProjectsStyles[`project-cards-container`]}></div>
          </div>
        </div>
      </Main>
      <MobileMenu />
      <Footer />
    </React.Fragment>
  );
}
