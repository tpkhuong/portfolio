import React from "react";
import Head from "next/head";
import SingleProjectStyles from "../../../styles/SingleProject.module.css";
import LogoNavbarContainer from "../../../Components/Shared/LogoNavbar";
import MobileMenu from "../../../Components/Shared/MobileMenu";
import Main from "../../../Components/Shared/Main";
import Footer from "../../../Components/Shared/Footer";
import { server } from "../../../config/index";
import { GoTriangleDown, GoLinkExternal, GoMarkGithub } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import axios from "axios";

export default function SingleProject({ children, data }) {
  console.log(data, "app in single project component");
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
              <ul className={SingleProjectStyles[`toc-content-container`]}>
                {data.sidebar.toc.map(function tableOfContent(tableObj, index) {
                  return (
                    <li
                      className={
                        SingleProjectStyles[`toc-${tableObj.typeOfTitle}`]
                      }
                      key={Math.random() * index}
                    >
                      <a href={`#${tableObj.tocHref}`}>{tableObj.content}</a>
                    </li>
                  );
                })}
              </ul>
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
              <div className={SingleProjectStyles[`links-content-container`]}>
                <a
                  className={SingleProjectStyles[`link-container`]}
                  href={data.sidebar.projectlinks.live}
                >
                  <span className={SingleProjectStyles[`link-icon`]}>
                    <GoLinkExternal />
                  </span>
                  <span className={SingleProjectStyles[`link-text`]}>
                    view-project-page
                  </span>
                </a>
                <a
                  className={SingleProjectStyles[`link-container`]}
                  href={data.sidebar.projectlinks.code}
                >
                  <span className={SingleProjectStyles[`link-icon`]}>
                    <GoMarkGithub />
                  </span>
                  <span className={SingleProjectStyles[`link-text`]}>
                    view-code
                  </span>
                </a>
              </div>
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
              >
                {data.sidebar.workflow.map(function makeParagraph(
                  paragraph,
                  index
                ) {
                  return <p key={Math.random() * index}>{paragraph}</p>;
                })}
              </div>
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
              {/* individual project content */}
            </section>
            <div className={SingleProjectStyles[`images-container`]}>
              {/* project images/screenshots */}
            </div>
          </div>
        </div>
        {/* <h2 className={SingleProjectStyles[`title`]}></h2> */}
        {/* {`this is single project. Title is ${data.first.title}`} */}
      </Main>
      <MobileMenu />
      <Footer />
    </React.Fragment>
  );
}

// export async function getStaticPaths() {
//   const projectPaths = [
//     ["projects", "first"],
//     ["projects", "second"],
//     ["projects", "third"],
//     ["projects", "fourth"],
//     ["projects", "fifth"],
//   ];
//   const paths = projectPaths.map(function makgeProjectPaths(path) {
//     const [projects, project] = path;

//     return {
//       params: { projects, project },
//     };
//   });
//   console.log(paths, "paths");
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   // console.log(context, "context");
//   const response = await fetch(
//     `${server}/api/${context.params.projects}/${context.params.project}`
//   );
//   // console.log(response, "response");
//   const data = await response.json();
//   console.log(data, "frontend");
//   return {
//     props: { data },
//   };
// }

function LinkContent({ children, text }) {
  return (
    <React.Fragment>
      <span className={SingleProjectStyles[`link-icon`]}>{children}</span>
      <span className={SingleProjectStyles[`link-content`]}>{text}</span>
    </React.Fragment>
  );
}

// function note() {
// {
//     "title": "hello there",
//     "sidebar": {
//       "toc": [
//         { "content": "Instructions:", "typeOfTitle": "title" },
//         { "content": "Users should be able to:", "typeOfTitle": "subtitle" },
//         { "content": "Process:", "typeOfTitle": "title" },
//         { "content": "Build with / Tech Used:", "typeOfTitle": "subtitle" },
//         { "content": "Things we learned:", "typeOfTitle": "subtitle" },
//         { "content": "Features Added:", "typeOfTitle": "subtitle" },
//         { "content": "Inclusion features Added:", "typeOfTitle": "subtitle" }
//       ],
//       "projectlinks": {
//         "live": "https://someplacecool.io",
//         "code": "https://github/projectURL.com"
//       },
//       "workflow": [
//         "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//         "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor. Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//         "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor."
//       ]
//     },
//     "main": {
//       "instructions": [
//         "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//         "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor. Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor."
//       ],
//       "userable": [
//         "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//         "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor."
//       ],
//       "buildtech": [
//         "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor. Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//         "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//         "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor. Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor."
//       ],
//       "learned": [
//         "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor."
//       ],
//       "features": [
//         "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//         "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor."
//       ],
//       "inclusion": [
//         "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor. Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//         "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//         "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor. Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor."
//       ]
//     },
//     "images": [
//       "/tipcalculator2.jpg",
//       "/tipcalculator2.jpg",
//       "/tipcalculator2.jpg",
//       "/tipcalculator2.jpg"
//     ]
//   }
// }

// {
//       "title": "hello there",
//       "sidebar": {
//         "toc": [
//           { "content": "Instructions:", "typeOfTitle": "title" },
//           { "content": "Users should be able to:", "typeOfTitle": "subtitle" },
//           { "content": "Process:", "typeOfTitle": "title" },
//           { "content": "Build with / Tech Used:", "typeOfTitle": "subtitle" },
//           { "content": "Things we learned:", "typeOfTitle": "subtitle" },
//           { "content": "Features Added:", "typeOfTitle": "subtitle" },
//           { "content": "Inclusion features Added:", "typeOfTitle": "subtitle" }
//         ],
//         "projectlinks": {
//           "live": "https://someplacecool.io",
//           "code": "https://github/projectURL.com"
//         },
//         "workflow": [
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor. Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor."
//         ]
//       },
//       "main": {
//         "instructions": [
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor. Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor."
//         ],
//         "userable": [
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor."
//         ],
//         "buildtech": [
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor. Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor. Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor."
//         ],
//         "learned": [
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor."
//         ],
//         "features": [
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor."
//         ],
//         "inclusion": [
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor. Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor. Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor."
//         ]
//       },
//       "images": [
//         "/tipcalculator2.jpg",
//         "/tipcalculator2.jpg",
//         "/tipcalculator2.jpg",
//         "/tipcalculator2.jpg"
//       ]
// }

// "images": [
//         "/tipcalculator2.jpg",
//         "/tipcalculator2.jpg",
//         "/tipcalculator2.jpg",
//         "/tipcalculator2.jpg"
//       ]

// export const projectData = {
//   projects: {
//     first: {
//       title: "hello there",
//       sidebar: {
//         toc: [
//           { content: "Instructions:", typeOfTitle: "title" },
//           { content: "Users should be able to:", typeOfTitle: "subtitle" },
//           { content: "Process:", typeOfTitle: "title" },
//           { content: "Build with / Tech Used:", typeOfTitle: "subtitle" },
//           { content: "Things we learned:", typeOfTitle: "subtitle" },
//           { content: "Features Added:", typeOfTitle: "subtitle" },
//           { content: "Inclusion features Added:", typeOfTitle: "subtitle" },
//         ],
//         workflow: [
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor. Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//         ],
//       },
//       main: {
//         instructions: [
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor. Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//         ],
//         userable: [
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//         ],
//         buildtech: [
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor. Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor. Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//         ],
//         learned: [
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//         ],
//         features: [
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//         ],
//         inclusion: [
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor. Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//           "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor. Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. nice tips. Thanks! Duis aute irure dolor.",
//         ],
//       },
//     },
//     second: {
//       title: "world",
//     },
//     third: {
//       title: "this is js",
//     },
//     fourth: {
//       title: "this is html",
//     },
//     fifth: {
//       title: "Los Angeles",
//     },
//   },
// };

export async function getStaticPaths() {
  // const projectPaths = [
  //   ["projects", "first"],
  //   ["projects", "second"],
  //   ["projects", "third"],
  //   ["projects", "fourth"],
  //   ["projects", "fifth"],
  // ];
  // const paths = projectPaths.map(function makgeProjectPaths(path) {
  //   const [projects, project] = path;

  //   return {
  //     params: { projects, project },
  //   };
  // });
  // console.log(paths, "paths");
  // return {
  //   paths,
  //   fallback: false,
  // };

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
  const response = await fetch(
    `${server}/api/projects/${context.params.project}`
  );
  // console.log(response, "response");

  const data = await response.json();
  // const data = response.data;
  // console.log(data, "frontend");
  return {
    props: { data },
  };
}
