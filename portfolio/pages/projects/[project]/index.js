import React from "react";
import Head from "next/head";
import SingleProjectStyles from "../../../styles/SingleProject.module.css";
import LogoNavbarContainer from "../../../Components/Shared/LogoNavbar";
import MobileMenu from "../../../Components/Shared/MobileMenu";
import Main from "../../../Components/Shared/Main";
import Footer from "../../../Components/Shared/Footer";
import { server } from "../../../config/index";
import axios from "axios";
import { GoTriangleDown, GoLinkExternal, GoMarkGithub } from "react-icons/go";
import { IoClose } from "react-icons/io5";

export default function SingleProject({ children, data }) {
  console.log(data["img-container"]);
  return (
    <React.Fragment>
      <Head>
        <title>Project Title</title>
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>
      <a href="#main-content" className="skip-link">
        Skip to Main Content
      </a>
      <LogoNavbarContainer pageName="projects" />
      <header className={SingleProjectStyles[`header`]} role="banner"></header>
      <Main>
        <div
          className={
            SingleProjectStyles[`toc-project-content-images-container`]
          }
        >
          {/* sidebar */}
          <aside
            role="complementary"
            className={SingleProjectStyles[`toc-links-work-flow-container`]}
          >
            {/* three containers */}
            <div className={SingleProjectStyles[`toc-container`]}>
              {/* table of content */}
              <div className={SingleProjectStyles[`toc-tab-container`]}>
                <GoTriangleDown
                  className={SingleProjectStyles[`triangle-down`]}
                />
                <span className={SingleProjectStyles[`tab-content`]}>
                  Table of Contents
                </span>
              </div>
              <div
                className={SingleProjectStyles[`toc-content-container`]}
              ></div>
            </div>
            <div className={SingleProjectStyles[`links-container`]}>
              {/* project links */}
              <div className={SingleProjectStyles[`links-tab-container`]}>
                <GoTriangleDown
                  className={SingleProjectStyles[`triangle-down`]}
                />
                <span className={SingleProjectStyles[`tab-content`]}>
                  Project Links
                </span>
              </div>
              <div
                className={SingleProjectStyles[`links-content-container`]}
              ></div>
            </div>
            <div className={SingleProjectStyles[`work-flow-container`]}>
              {/* project workflow */}
              <div className={SingleProjectStyles[`work-flow-tab-container`]}>
                <GoTriangleDown
                  className={SingleProjectStyles[`triangle-down`]}
                />
                <span className={SingleProjectStyles[`tab-content`]}>
                  Project Work Flow
                </span>
              </div>
              <div
                className={SingleProjectStyles[`work-flow-content-container`]}
              ></div>
            </div>
            {/* three containers */}
          </aside>
          <div className={SingleProjectStyles[`content-images-container`]}>
            <section
              aria-labelledby="project-title"
              className={SingleProjectStyles[`tab-content-container`]}
            >
              <div className={SingleProjectStyles[`tab-container`]}>
                <span aria-hidden="true">Go Back</span>
                <button
                  aria-label="go back to project selection page"
                  className={SingleProjectStyles[`close-btn`]}
                >
                  <IoClose className={SingleProjectStyles[`close-icon`]} />
                </button>
              </div>
              <div className={SingleProjectStyles[`content`]}></div>
              {/* i`ndividual project content */}
            </section>
            <div className={SingleProjectStyles[`images-container`]}>
              {/* project images/screenshots */}
            </div>
          </div>
        </div>
        <h2
          className={SingleProjectStyles[`title`]}
        >{`this is single project. Title is ${data.title}`}</h2>
      </Main>
      <MobileMenu />
      <Footer />
    </React.Fragment>
  );
}

export async function getStaticPaths() {
  const projectPaths = ["first", "second", "third", "fourth", "fifth"];
  const paths = projectPaths.map(function makgeProjectPaths(path) {
    // const [project] = path;
    return {
      params: { project: path },
    };
  });
  console.log(paths, "paths");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const response = await axios(
    `${server}/api/projects/${context.params.project}`
  );
  //   console.log(response, "response");
  const data = response.data;

  return {
    props: { data },
  };
}
