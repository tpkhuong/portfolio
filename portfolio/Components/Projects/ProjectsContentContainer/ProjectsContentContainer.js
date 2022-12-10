import React from "react";
import ProjectsContentStyles from "./ProjectsContentContainer.module.css";
import SkillLevel from "../SkillLevelCheckedBox";
import ProjectCard from "../ProjectCard/index";
import { arrayOfObjForProjectCard } from "../ProjectCard/ProjectInfoObj";
import { GoTriangleDown } from "react-icons/go";
import { IoClose } from "react-icons/io5";

function Content() {
  const objOfValues = {
    testArray: [],
  };
  return function innerFunc({ children }) {
    const [testValue, testState] = React.useState("false");
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
                      testData={{ objOfValues, testValue, testState }}
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

              if (idOfButton == "add-all") {
                objOfValues.testArray = [
                  "novice",
                  "junior",
                  "intermediate",
                  "advanced",
                ];

                testState("all");
              }

              if (idOfButton == "remove-all") {
                objOfValues.testArray = [];

                testState("remove");
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
            <h2 className={ProjectsContentStyles[`tab-title`]}>Skill Level</h2>
            <button
              onClick={(event) => {
                console.log(objOfValues.testArray);
                if (objOfValues.testArray.length > 0) {
                  objOfValues.testArray.pop();
                  testState("close");
                }
              }}
              className={ProjectsContentStyles[`close-proj-btn`]}
            >
              <IoClose className={ProjectsContentStyles[`close-icon`]} />
            </button>
          </div>
          <ul className={ProjectsContentStyles[`project-cards-container`]}>
            {objOfValues.testArray.length == 0
              ? arrayOfObjForProjectCard.map(function makeProjectCard(
                  obj,
                  index
                ) {
                  return (
                    <ProjectCard
                      key={Math.random() * index}
                      page="projects"
                      imgSrc={obj.imgInfo.imgSrc}
                      imgText={obj.imgInfo.altText}
                      title={obj.title}
                      techArray={obj.tech}
                      description={obj.description}
                      viewProject={obj.links.viewProject}
                      viewCode={obj.links.viewCode}
                    />
                  );
                })
              : // <div
                //   className={
                //     ProjectsContentStyles[`select-skill-level-btn-wrapper`]
                //   }
                // >
                //   <button
                //     id="projectshidden"
                //     onClick={(event) => {
                //       document.getElementById("novice").focus();
                //       event.target
                //         .closest("BUTTON")
                //         .getAttribute("data-projectshidden") === ""
                //         ? event.target
                //             .closest("BUTTON")
                //             .setAttribute("data-projectshidden", "true")
                //         : null;
                //       setTimeout(() => {
                //         event.target
                //           .closest("BUTTON")
                //           .getAttribute("data-projectshidden") === "true"
                //           ? event.target
                //               .closest("BUTTON")
                //               .setAttribute("data-projectshidden", "")
                //           : null;
                //       }, 900);
                //     }}
                //     data-projectshidden=""
                //     className={ProjectsContentStyles[`empty-btn`]}
                //   >
                //     <span className={ProjectsContentStyles[`empty-btn-wrapper`]}>
                //       <span>Go to Projects tab.</span>
                //       <span>Check box to see Projects</span>
                //     </span>
                //   </button>
                // </div>
                objOfValues.testArray.map(function makeCards(item, index) {
                  return (
                    <li key={Math.random() * index}>
                      <span>{item}</span>
                    </li>
                  );
                })}
          </ul>
        </div>
      </div>
    );
  };
}

export const ProjectsContentContainer = Content();

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
