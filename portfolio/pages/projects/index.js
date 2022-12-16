import React from "react";
import Head from "next/head";
import ProjectsStyles from "../../styles/Projects.module.css";
import MobileMenu from "../../Components/Shared/MobileMenu";
import SkillLevel from "../../Components/Projects/SkillLevelCheckedBox/index";
import {
  BackTopArrow,
  TopScreenSpan,
} from "../../Components/Shared/BackTop/BackTop";
import { ProjectsContentContainer } from "../../Components/Projects/ProjectsContentContainer/ProjectsContentContainer";
import LogoNavbarContainer from "../../Components/Shared/LogoNavbar";
import Main from "../../Components/Shared/Main";
import Footer from "../../Components/Shared/Footer";
import { GoTriangleDown } from "react-icons/go";
import { IoClose } from "react-icons/io5";

const Content = save();

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
      <TopScreenSpan
        isMobile="true"
        hrefValue="projects-mobile-to-top-screen"
      />
      <header role="banner">
        <LogoNavbarContainer pageName="projects" />
      </header>
      <Main>
        {/* <Content /> */}
        <ProjectsContentContainer />
      </Main>
      <MobileMenu />
      <Footer />
      <BackTopArrow
        isMobile="true"
        idAttr="mobile-projects-backtop"
        hrefValue="projects-mobile-to-top-screen"
      />
    </React.Fragment>
  );
}

function save() {
  const array = [];
  return function innerFunc({ children }) {
    const [testValue, testState] = React.useState(null);

    return (
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
                    <SkillLevel
                      testData={{ array, testState }}
                      level={item}
                      textContent={item}
                    />
                  </li>
                );
              }
            )}
          </ul>
        </aside>
        <div className={ProjectsStyles[`tab-cards-container`]}>
          <div className={ProjectsStyles[`tab-container`]}>
            <h2 className={ProjectsStyles[`tab-title`]}>Skill Level</h2>
            <button
              onClick={(event) => {
                console.log(array);
                if (array.length > 0) {
                  array.pop();
                  testState("close");
                }
              }}
              className={ProjectsStyles[`close-proj-btn`]}
            >
              <IoClose className={ProjectsStyles[`close-icon`]} />
            </button>
          </div>
          <div className={ProjectsStyles[`project-cards-container`]}></div>
        </div>
      </div>
    );
  };
}
