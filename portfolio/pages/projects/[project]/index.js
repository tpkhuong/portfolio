import React from "react";
import Head from "next/head";
import SingleProjectStyles from "../../../styles/SingleProject.module.css";
import LogoNavbarContainer from "../../../Components/Shared/LogoNavbar";
import MobileMenu from "../../../Components/Shared/MobileMenu";
import Main from "../../../Components/Shared/Main";
import Footer from "../../../Components/Shared/Footer";
import { debounce } from "../../../Components/Home/Carousel";
import {
  BackTopArrow,
  TopScreenSpan,
  isScrolledElementInView,
} from "../../../Components/Shared/BackTop/BackTop";
import { server } from "../../../config/index";
import { GoTriangleDown, GoLinkExternal, GoMarkGithub } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import axios from "axios";
// data-backtopbtnshown
export default function SingleProject({ children, data }) {
  // console.log(data, "app in single project component");
  console.log(data.flow);
  React.useEffect(() => {
    // mobile scroll to top add event to window
    if (window.innerWidth <= 375) {
      const mobileScrollWatcher = debounce(function watchTableElement() {
        if (
          !isScrolledElementInView(
            document.getElementById("mobile-element-watcher"),
            window,
            0
          )
        ) {
          console.log("false");
          document
            .getElementById("mobile-single-project-backtop")
            .getAttribute("data-backtopbtnshown") == "false"
            ? document
                .getElementById("mobile-single-project-backtop")
                .setAttribute("data-backtopbtnshown", "true")
            : null;
        } else {
          console.log("true");
          document
            .getElementById("mobile-single-project-backtop")
            .getAttribute("data-backtopbtnshown") == "true"
            ? document
                .getElementById("mobile-single-project-backtop")
                .setAttribute("data-backtopbtnshown", "false")
            : null;
        }
      }, 80);

      window.addEventListener("scroll", mobileScrollWatcher);

      return function mobileCleanUp() {
        window.removeEventListener("scroll", mobileScrollWatcher);
      };
    }
    // desktop scroll to top add event to scroll container
    if (window.innerWidth >= 1440) {
      const desktopScrollWatcher = debounce(function watchSpanElement() {
        if (
          !isScrolledElementInView(
            document.getElementById("project-title"),
            window,
            0
          )
        ) {
          console.log("false");

          document
            .getElementById("desktop-single-project-backtop")
            .getAttribute("data-backtopbtnshown") == "false"
            ? document
                .getElementById("desktop-single-project-backtop")
                .setAttribute("data-backtopbtnshown", "true")
            : null;
        } else {
          console.log("true");
          document
            .getElementById("desktop-single-project-backtop")
            .getAttribute("data-backtopbtnshown") == "true"
            ? document
                .getElementById("desktop-single-project-backtop")
                .setAttribute("data-backtopbtnshown", "false")
            : null;
        }
      }, 80);

      document
        .getElementById("single-project-scroll")
        .addEventListener("scroll", desktopScrollWatcher);

      return function desktopCleanUp() {
        document
          .getElementById("single-project-scroll")
          .removeEventListener("scroll", desktopScrollWatcher);
      };
    }
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>{data.project.title}</title>
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
        hrefValue="mobile-single-project-top-screen"
      />
      <header className={SingleProjectStyles[`header`]} role="banner">
        <LogoNavbarContainer pageName="projects" />
      </header>
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
                <span
                  id="mobile-element-watcher"
                  className={SingleProjectStyles[`tab-content`]}
                >
                  Table of Contents
                </span>
              </div>
              <ul className={SingleProjectStyles[`toc-content-container`]}>
                {data.tableContent.map(function tableOfContent(
                  tableObj,
                  index
                ) {
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
                  href={data.project.sidebar.projectlinks.live}
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
                  href={data.project.sidebar.projectlinks.code}
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
                {data.flow.map(function makeParagraph(paragraph, index) {
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
                <span
                  className={SingleProjectStyles[`tab-content`]}
                  aria-hidden="true"
                >
                  Go to Projects Page
                </span>
                <a
                  href="/projects"
                  aria-label="go back to project selection page"
                  className={SingleProjectStyles[`close-btn`]}
                >
                  <IoClose className={SingleProjectStyles[`close-icon`]} />
                </a>
              </div>
              <div
                id="single-project-scroll"
                className={SingleProjectStyles[`content`]}
              >
                <TopScreenSpan
                  isDesktop="true"
                  hrefValue="desktop-single-project-top-screen"
                />
                {/* title */}
                <h1
                  id="project-title"
                  className={SingleProjectStyles[`main-title`]}
                >
                  {data.project.title}
                </h1>

                {/* instructions */}
                <h2
                  id={data.brief.hrefForToc}
                  className={`${SingleProjectStyles[`content-title`]} ${
                    SingleProjectStyles[`space-bottom`]
                  }`}
                >
                  {data.brief.title}
                </h2>

                <div className={SingleProjectStyles[`paragraphs-wrapper`]}>
                  <p className={SingleProjectStyles[`intro`]}>
                    {data.project.main.intro}
                  </p>
                  {data.brief.text.map(function makeInstructionsParagraph(
                    text,
                    index
                  ) {
                    return <p key={Math.random() * index}>{text}</p>;
                  })}
                </div>

                {/* users should be */}
                <h3
                  id={data.project.main.userable.hrefForToc}
                  className={`${SingleProjectStyles[`content-subtitle`]} ${
                    SingleProjectStyles[`space-vertical`]
                  }`}
                >
                  {data.project.main.userable.title}
                </h3>

                <ul className={SingleProjectStyles[`paragraphs-wrapper`]}>
                  {data.project.main.userable.text.map(
                    function makeUserableParagraph(text, index) {
                      return (
                        <li key={Math.random() * index}>
                          <span>{text}</span>
                        </li>
                      );
                    }
                  )}
                </ul>

                {/* process */}
                <h2
                  id={data.project.main.process.hrefForToc}
                  className={`${SingleProjectStyles[`content-title`]} ${
                    SingleProjectStyles[`space-vertical`]
                  }`}
                >
                  {data.project.main.process.title}
                </h2>

                {data.project.main.process.text.length > 0 ? (
                  <div className={SingleProjectStyles[`paragraphs-wrapper`]}>
                    {data.project.main.process.text.map(
                      function makeProcessParagraph(text, index) {
                        return <p key={Math.random() * index}>{text}</p>;
                      }
                    )}
                  </div>
                ) : null}

                {/* build with */}
                <h3
                  id={data.project.main.buildtech.hrefForToc}
                  className={`${SingleProjectStyles[`content-subtitle`]} ${
                    SingleProjectStyles[`space-vertical`]
                  }`}
                >
                  {data.project.main.buildtech.title}
                </h3>

                <div className={SingleProjectStyles[`paragraphs-wrapper`]}>
                  {data.project.main.buildtech.text.map(
                    function makeBuildtechParagraph(text, index) {
                      return <p key={Math.random() * index}>{text}</p>;
                    }
                  )}
                </div>

                {/* things we learned */}
                <h3
                  id={data.project.main.learned.hrefForToc}
                  className={`${SingleProjectStyles[`content-subtitle`]} ${
                    SingleProjectStyles[`space-vertical`]
                  }`}
                >
                  {data.project.main.learned.title}
                </h3>

                <div className={SingleProjectStyles[`paragraphs-wrapper`]}>
                  {data.project.main.learned.text.map(
                    function makeLearnedParagraph(text, index) {
                      return <p key={Math.random() * index}>{text}</p>;
                    }
                  )}
                </div>

                {/* features added */}
                <h3
                  id={data.project.main.features.hrefForToc}
                  className={`${SingleProjectStyles[`content-subtitle`]} ${
                    SingleProjectStyles[`space-vertical`]
                  }`}
                >
                  {data.project.main.features.title}
                </h3>

                <div className={SingleProjectStyles[`paragraphs-wrapper`]}>
                  {data.project.main.features.text.map(
                    function makeFeaturesParagraph(text, index) {
                      return <p key={Math.random() * index}>{text}</p>;
                    }
                  )}
                </div>

                {/* inclustion added */}
                <h3
                  id={data.project.main.inclusion.hrefForToc}
                  className={`${SingleProjectStyles[`content-subtitle`]} ${
                    SingleProjectStyles[`space-vertical`]
                  }`}
                >
                  {data.project.main.inclusion.title}
                </h3>

                <div className={SingleProjectStyles[`paragraphs-wrapper`]}>
                  {data.project.main.inclusion.text.map(
                    function makeInclusionParagraph(text, index) {
                      return <p key={Math.random() * index}>{text}</p>;
                    }
                  )}
                </div>
                <BackTopArrow
                  isDeaktop="true"
                  currentPage="singleprojectpage"
                  idAttr="desktop-single-project-backtop"
                  hrefValue="desktop-single-project-top-screen"
                />
              </div>

              {/* individual project content */}
            </section>
            <div className={SingleProjectStyles[`project-images-container`]}>
              <div className={SingleProjectStyles[`images-tab-container`]}>
                <span className={SingleProjectStyles[`images-tab-content`]}>
                  Preview Images
                </span>
              </div>
              {/* project images/screenshots */}
              <div className={SingleProjectStyles[`preview-images-container`]}>
                {data.project.images.map(function imgContainer(obj, index) {
                  return (
                    <div
                      key={Math.random() * index}
                      className={SingleProjectStyles[`image-container`]}
                    >
                      <img src={obj.imgSrc} alt={obj.imgText} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* <h2 className={SingleProjectStyles[`title`]}></h2> */}
        {/* {`this is single project. Title is ${data.project.first.title}`} */}
      </Main>
      <MobileMenu />
      <Footer />
      <BackTopArrow
        isMobile="true"
        idAttr="mobile-single-project-backtop"
        hrefValue="mobile-single-project-top-screen"
      />
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
