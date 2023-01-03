import React from "react";
import ProjectsContentStyles from "./ProjectsContentContainer.module.css";
import SkillLevel from "../SkillLevelCheckedBox";
import ProjectCard from "../ProjectCard/index";
import { debounce } from "../../Home/Carousel";
import {
  BackTopArrow,
  TopScreenSpan,
  isScrolledElementInView,
} from "../../Shared/BackTop/BackTop";
import { arrayOfObjForProjectCard } from "../ProjectCard/ProjectInfoObj";
import { GoTriangleDown } from "react-icons/go";
import { IoClose } from "react-icons/io5";

function Content() {
  const objOfValues = {
    copiedArrayOfObjs: [...arrayOfObjForProjectCard],
    arrayOfCardsToRender: [],
    arrayForProjCardsTab: ["novice", "junior", "intermediate", "advanced"],
    arrayOfSkillLevelStrings: [],
  };
  return function innerFunc({ children }) {
    const [projCardValue, setProjCardState] = React.useState("false");

    React.useEffect(() => {
      // mobile
      if (window.innerWidth <= 375) {
        const projectsScrollWatcher = debounce(function watchProjects() {
          if (
            !isScrolledElementInView(
              document.getElementById("skill-level-label"),
              window,
              0
            )
          ) {
            document
              .getElementById("mobile-projects-backtop")
              .getAttribute("data-backtopbtnshown") == "false"
              ? document
                  .getElementById("mobile-projects-backtop")
                  .setAttribute("data-backtopbtnshown", "true")
              : null;
          } else {
            document
              .getElementById("mobile-projects-backtop")
              .getAttribute("data-backtopbtnshown") == "true"
              ? document
                  .getElementById("mobile-projects-backtop")
                  .setAttribute("data-backtopbtnshown", "false")
              : null;
          }
        }, 80);

        window.addEventListener("scroll", projectsScrollWatcher);

        return function cleanUp() {
          return window.removeEventListener("scroll", projectsScrollWatcher);
        };
      }

      // desktop

      // if (window.innerWidth >= 1440) {
      //   const projectCardsWatcher = debounce(function watchCards() {
      //     console.log(
      //       isScrolledElementInView(
      //         document.getElementById("first-project-card"),
      //         window,
      //         0
      //       )
      //     );
      //     if (
      //       !isScrolledElementInView(
      //         document.getElementById("first-project-card"),
      //         window,
      //         0
      //       )
      //     ) {
      //       console.log("false");
      //       document
      //         .getElementById("desktop-resume-backtop")
      //         .getAttribute("data-backtopbtnshown") == "false"
      //         ? document
      //             .getElementById("desktop-resume-backtop")
      //             .setAttribute("data-backtopbtnshown", "true")
      //         : null;
      //     } else {
      //       console.log("true");
      //       document
      //         .getElementById("desktop-resume-backtop")
      //         .getAttribute("data-backtopbtnshown") == "true"
      //         ? document
      //             .getElementById("desktop-resume-backtop")
      //             .setAttribute("data-backtopbtnshown", "false")
      //         : null;
      //     }
      //   }, 80);

      //   document
      //     .getElementById("project-cards-scroll")
      //     .addEventListener("scroll", projectCardsWatcher);
      // }
    }, []);

    return (
      <div
        className={ProjectsContentStyles[`skill-level-projects-card-container`]}
      >
        <aside
          role="complementary"
          className={ProjectsContentStyles[`skill-level-container`]}
        >
          {/* skill selector */}
          <div className={ProjectsContentStyles[`arrow-text-container`]}>
            <GoTriangleDown className={ProjectsContentStyles[`down-arrow`]} />
            <h2 id="skill-level-label">Projects</h2>
          </div>
          <ul
            role="group"
            aria-describedby="skill-level-label"
            className={
              ProjectsContentStyles[`skill-level-checkboxes-container`]
            }
          >
            {["novice", "junior", "intermediate", "advanced"].map(
              function makeListItem(item, index) {
                return (
                  <li key={Math.random() * index}>
                    <SkillLevel
                      projCardData={{
                        objOfValues,
                        arrayOfObjForProjectCard,
                        projCardValue,
                        setProjCardState,
                      }}
                      level={item}
                      textContent={item}
                    />
                  </li>
                );
              }
            )}
          </ul>
          {/* add/remove all */}
          <div
            onClick={(event) => {
              const btnClicked = event.target.closest("BUTTON");

              btnClicked.getAttribute("data-allbtnclicked") == "false" ||
              btnClicked.getAttribute("data-allbtnclicked") === ""
                ? btnClicked.setAttribute("data-allbtnclicked", "true")
                : btnClicked.setAttribute("data-allbtnclicked", "false");

              setTimeout(() => {
                btnClicked.getAttribute("data-allbtnclicked") == "true"
                  ? btnClicked.setAttribute("data-allbtnclicked", "false")
                  : btnClicked.setAttribute("data-allbtnclicked", "true");
              }, 800);

              const idOfButton = btnClicked.getAttribute("id");

              // check if check btns are checked

              const allChecked = [
                "novice",
                "junior",
                "intermediate",
                "advanced",
              ].every(function areBtnsChecked(str, index) {
                return (
                  document.getElementById(str).getAttribute("aria-checked") ==
                  "true"
                );
              });

              // check if check btns are unchecked

              const allUnchecked = [
                "novice",
                "junior",
                "intermediate",
                "advanced",
              ].every(function areBtnsUnchecked(str, index) {
                return (
                  document.getElementById(str).getAttribute("aria-checked") ==
                  "false"
                );
              });

              if (idOfButton == "add-all" && !allChecked) {
                console.log(objOfValues.arrayOfObjForProjectCard);
                console.log(objOfValues, "objOfValues");

                objOfValues.arrayOfSkillLevelStrings = [
                  ...objOfValues.arrayOfSkillLevelStrings,
                  ...objOfValues.arrayForProjCardsTab,
                ];

                objOfValues.arrayOfCardsToRender = [
                  ...objOfValues.arrayOfCardsToRender,
                  ...objOfValues.copiedArrayOfObjs,
                ];

                objOfValues.copiedArrayOfObjs = [];
                objOfValues.arrayForProjCardsTab = [];

                console.log(objOfValues, "objOfValues");

                setProjCardState("all");
              }

              if (idOfButton == "remove-all" && !allUnchecked) {
                removeAllAndCloseBtnHelper(objOfValues);

                // objOfValues.arrayForProjCardsTab = [
                //   "novice",
                //   "junior",
                //   "intermediate",
                //   "advanced",
                // ];

                // objOfValues.arrayOfSkillLevelStrings = [];

                // objOfValues.arrayOfCardsToRender = [];

                // objOfValues.copiedArrayOfObjs = [...arrayOfObjForProjectCard];
                setProjCardState("remove");
              }
            }}
            className={ProjectsContentStyles[`add-remove-btns-wrapper`]}
          >
            <button
              data-allbtnclicked=""
              id="add-all"
              className={ProjectsContentStyles[`add-all-btn`]}
            >
              <span className={ProjectsContentStyles[`add-all-btn-wrapper`]}>
                CHECK ALL
              </span>
            </button>
            <button
              data-allbtnclicked=""
              id="remove-all"
              className={ProjectsContentStyles[`remove-all-btn`]}
            >
              <span className={ProjectsContentStyles[`remove-all-btn-wrapper`]}>
                UNCHECK ALL
              </span>
            </button>
          </div>
          <Learning>Hello World</Learning>
        </aside>
        <div className={ProjectsContentStyles[`tab-cards-container`]}>
          <div className={ProjectsContentStyles[`tab-container`]}>
            <h2
              id="skill-tab-title"
              className={ProjectsContentStyles[`tab-title`]}
            >
              <span>Showing:</span>
              {objOfValues.arrayOfSkillLevelStrings.map((item, index, list) => {
                const firstLetter = item[0].toUpperCase();
                const restOfStr = item.slice(1);
                const concatLetters = [firstLetter, ...restOfStr].join("");

                const itemWithCommaBasedOnIndex =
                  list.length - 1 == index
                    ? concatLetters
                    : `${concatLetters},`;
                return (
                  <span key={Math.random() * index}>
                    {itemWithCommaBasedOnIndex}
                  </span>
                );
                // return index != 3 ? (
                //   <span
                //     key={Math.random() * index}
                //   >{` ${concatLetters},`}</span>
                // ) : (
                //   <span key={Math.random() * index}>{` ${concatLetters}`}</span>
                // );
                // index != 3
                //     ? [firstLetter, ...restOfStr, ",", " "].join("")
                //     :
              })}

              {/* <span>Novice,</span>
              <span>Junior,</span>
              <span>Intermediate,</span>
              <span>Advanced</span> */}
              {/* <span className={ProjectsContentStyles[`test-container`]}>
                Showing: <span id="dynamic-level-shown"></span>
              </span> */}
            </h2>
            {/* <span>Novice,</span>
            <span>Junior,</span>
            <span>Advanced</span> */}
            <button
              aria-label="remove all project cards"
              onClick={(event) => {
                console.log(objOfValues.arrayOfCardsToRender);
                if (objOfValues.arrayOfCardsToRender.length > 0) {
                  removeAllAndCloseBtnHelper(objOfValues);
                  // objOfValues.arrayForProjCardsTab = [
                  //   "novice",
                  //   "junior",
                  //   "intermediate",
                  //   "advanced",
                  // ];

                  // objOfValues.arrayOfSkillLevelStrings = [];

                  // objOfValues.arrayOfCardsToRender = [];

                  // objOfValues.copiedArrayOfObjs = [...arrayOfObjForProjectCard];
                  setProjCardState("close");
                }
              }}
              className={ProjectsContentStyles[`close-proj-btn`]}
            >
              <IoClose className={ProjectsContentStyles[`close-icon`]} />
            </button>
          </div>
          <ul
            id="project-cards-scroll"
            className={ProjectsContentStyles[`project-cards-container`]}
          >
            {/* <TopScreenSpan
              isDesktop="true"
              hrefValue="cards-container-desktop-to-top-screen"
            /> */}
            {objOfValues.arrayOfCardsToRender.length == 0 ? (
              <div
                className={
                  ProjectsContentStyles[`select-skill-level-btn-wrapper`]
                }
              >
                <button
                  id="projectshidden"
                  onClick={(event) => {
                    document.getElementById("novice").focus();
                    event.target
                      .closest("BUTTON")
                      .getAttribute("data-projectshidden") === ""
                      ? event.target
                          .closest("BUTTON")
                          .setAttribute("data-projectshidden", "true")
                      : null;
                    setTimeout(() => {
                      event.target
                        .closest("BUTTON")
                        .getAttribute("data-projectshidden") === "true"
                        ? event.target
                            .closest("BUTTON")
                            .setAttribute("data-projectshidden", "")
                        : null;
                    }, 900);
                  }}
                  data-projectshidden=""
                  className={ProjectsContentStyles[`empty-btn`]}
                >
                  <span className={ProjectsContentStyles[`empty-btn-wrapper`]}>
                    <span>Go to Projects tab.</span>
                    <span>Check box to see Projects</span>
                  </span>
                </button>
              </div>
            ) : (
              objOfValues.arrayOfCardsToRender.map(function makeCards(
                obj,
                index
              ) {
                return index == 0 ? (
                  <li key={Math.random() * index}>
                    <ProjectCard
                      scrollId="first-project-card"
                      page="projects"
                      imgSrc={obj.imgInfo.imgSrc}
                      imgText={obj.imgInfo.altText}
                      title={obj.title}
                      techArray={obj.tech}
                      description={obj.description}
                      viewProject={obj.links.viewProject}
                      viewCode={obj.links.viewCode}
                    />
                  </li>
                ) : (
                  <li key={Math.random() * index}>
                    <ProjectCard
                      page="projects"
                      imgSrc={obj.imgInfo.imgSrc}
                      imgText={obj.imgInfo.altText}
                      title={obj.title}
                      techArray={obj.tech}
                      description={obj.description}
                      viewProject={obj.links.viewProject}
                      viewCode={obj.links.viewCode}
                    />
                  </li>
                );
              })
            )}
            {/* <span className={ProjectsContentStyles[`arrow-container`]}>
              <BackTopArrow
                idAttr="desktop-resume-backtop"
                isDeaktop="true"
                hrefValue="cards-container-desktop-to-top-screen"
                currentPage="singleproject"
              />
            </span> */}
          </ul>
        </div>
      </div>
    );
  };
}

export const ProjectsContentContainer = Content();

function removeAllAndCloseBtnHelper(obj) {
  obj.arrayForProjCardsTab = ["novice", "junior", "intermediate", "advanced"];

  obj.arrayOfSkillLevelStrings = [];

  obj.arrayOfCardsToRender = [];

  obj.copiedArrayOfObjs = [...arrayOfObjForProjectCard];
}

function Learning({ children }) {
  return (
    <React.Fragment>
      <button
        onClick={(event) => {
          // show letters
          event.target.closest("BUTTON").getAttribute("data-showletter") ==
            "false" ||
          event.target.closest("BUTTON").getAttribute("data-showletter") === ""
            ? event.target
                .closest("BUTTON")
                .setAttribute("data-showletter", "true")
            : event.target
                .closest("BUTTON")
                .setAttribute("data-showletter", "false");
          // blinking
          if (
            event.target.closest("BUTTON").getAttribute("data-blinking") ==
            "true"
          ) {
            event.target.closest("BUTTON").setAttribute("data-blinking", "");

            setTimeout(() => {
              event.target.closest("BUTTON").getAttribute("data-blinking") == ""
                ? event.target
                    .closest("BUTTON")
                    .setAttribute("data-blinking", "false")
                : null;
            }, 3600);

            return;
          }
          // pause blinking by setting data-blinking to ""
          if (
            event.target.closest("BUTTON").getAttribute("data-blinking") ==
            "false"
          ) {
            event.target.closest("BUTTON").setAttribute("data-blinking", "");

            setTimeout(() => {
              event.target.closest("BUTTON").getAttribute("data-blinking") == ""
                ? event.target
                    .closest("BUTTON")
                    .setAttribute("data-blinking", "true")
                : null;
            }, 3600);

            return;
          }
        }}
        data-showletter=""
        data-blinking="true"
        className={ProjectsContentStyles[`letter-container`]}
      >
        {children.split("").map(function showLetter(letter, index) {
          return (
            <span
              data-position={`${index}`}
              className={ProjectsContentStyles[`letter`]}
              key={Math.random() * index}
            >
              {letter}
            </span>
          );
        })}
      </button>
    </React.Fragment>
  );
}

function note() {
  {
    /* <ProjectCard
                  page="projects"
                  imgSrc={objOfInfo.imgInfo.imgSrc}
                  imgText={objOfInfo.imgInfo.altText}
                  title={objOfInfo.title}
                  techArray={objOfInfo.tech}
                  description={objOfInfo.description}
                  viewProject={objOfInfo.links.viewProject}
                  viewCode={objOfInfo.links.viewCode}
                />
                <ProjectCard
                  page="projects"
                  imgSrc={objOfInfo.imgInfo.imgSrc}
                  imgText={objOfInfo.imgInfo.altText}
                  title={objOfInfo.title}
                  techArray={objOfInfo.tech}
                  description={objOfInfo.description}
                  viewProject={objOfInfo.links.viewProject}
                  viewCode={objOfInfo.links.viewCode}
                />
                <ProjectCard
                  page="projects"
                  imgSrc={objOfInfo.imgInfo.imgSrc}
                  imgText={objOfInfo.imgInfo.altText}
                  title={objOfInfo.title}
                  techArray={objOfInfo.tech}
                  description={objOfInfo.description}
                  viewProject={objOfInfo.links.viewProject}
                  viewCode={objOfInfo.links.viewCode}
                />
                <ProjectCard
                  page="projects"
                  imgSrc={objOfInfo.imgInfo.imgSrc}
                  imgText={objOfInfo.imgInfo.altText}
                  title={objOfInfo.title}
                  techArray={objOfInfo.tech}
                  description={objOfInfo.description}
                  viewProject={objOfInfo.links.viewProject}
                  viewCode={objOfInfo.links.viewCode}
                />
                <ProjectCard
                  page="projects"
                  imgSrc={objOfInfo.imgInfo.imgSrc}
                  imgText={objOfInfo.imgInfo.altText}
                  title={objOfInfo.title}
                  techArray={objOfInfo.tech}
                  description={objOfInfo.description}
                  viewProject={objOfInfo.links.viewProject}
                  viewCode={objOfInfo.links.viewCode}
                />
                <ProjectCard
                  page="projects"
                  imgSrc={objOfInfo.imgInfo.imgSrc}
                  imgText={objOfInfo.imgInfo.altText}
                  title={objOfInfo.title}
                  techArray={objOfInfo.tech}
                  description={objOfInfo.description}
                  viewProject={objOfInfo.links.viewProject}
                  viewCode={objOfInfo.links.viewCode}
                />
                <ProjectCard
                  page="projects"
                  imgSrc={objOfInfo.imgInfo.imgSrc}
                  imgText={objOfInfo.imgInfo.altText}
                  title={objOfInfo.title}
                  techArray={objOfInfo.tech}
                  description={objOfInfo.description}
                  viewProject={objOfInfo.links.viewProject}
                  viewCode={objOfInfo.links.viewCode}
                />
                <ProjectCard
                  page="projects"
                  imgSrc={objOfInfo.imgInfo.imgSrc}
                  imgText={objOfInfo.imgInfo.altText}
                  title={objOfInfo.title}
                  techArray={objOfInfo.tech}
                  description={objOfInfo.description}
                  viewProject={objOfInfo.links.viewProject}
                  viewCode={objOfInfo.links.viewCode}
                />
                <ProjectCard
                  page="projects"
                  imgSrc={objOfInfo.imgInfo.imgSrc}
                  imgText={objOfInfo.imgInfo.altText}
                  title={objOfInfo.title}
                  techArray={objOfInfo.tech}
                  description={objOfInfo.description}
                  viewProject={objOfInfo.links.viewProject}
                  viewCode={objOfInfo.links.viewCode}
                /> */
  }
}
