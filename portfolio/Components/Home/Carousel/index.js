import React from "react";
import CarouselStyles from "./Carousel.module.css";
import {
  swipeRightBtn,
  clickPreviousSnapItem,
  clickNextSnapItem,
  keyboardScrollThroughSnapItems,
  observeSnapItemsContainerMobile,
  observeSnapItemsContainerDesktop,
} from "./carouselHelpers";
import { FaArrowRight, FaArrowUp, FaArrowDown } from "react-icons/fa";
import Project from "./Project";

export default function Carousel({ children, ...props }) {
  const memoizedInitialValues = React.useMemo(() => {
    return {
      upArrowArray: null,
      downArrowArray: null,
    };
  });

  const [initialValuesObj, setSnapArray] = React.useState(
    memoizedInitialValues
  );
  React.useEffect(() => {
    // scroll container
    const scrollContainer = document.getElementById("scroll-container");
    // scroll children
    const scrollChildren = scrollContainer.children;
    // assigning tabindex, aria hidden to first and second children of snap items container
    const [firstChild, secondChild] = [...scrollChildren];
    window.innerWidth <= 375
      ? (firstChild.setAttribute("tabindex", "0"),
        firstChild.setAttribute("aria-hidden", "false"),
        secondChild.setAttribute("tabindex", "-1"))
      : (firstChild.setAttribute("tabindex", "-1"),
        secondChild.setAttribute("tabindex", "0"),
        secondChild.setAttribute("aria-hidden", "false"));
    // call intersection observer func based on screen size
    // call observeSnapItemsContainerMobile if .innerWidth is <= 375
    window.innerWidth <= 375
      ? observeSnapItemsContainerMobile(scrollContainer, [...scrollChildren])
      : null;
    // call observeSnapItemsContainerDesktop if .innerWidth is >= 1440
    window.innerWidth >= 1440
      ? observeSnapItemsContainerDesktop(scrollContainer, [...scrollChildren])
      : null;
  }, []);

  return (
    <section
      id="carousel-snap-item"
      className={CarouselStyles[`project-wrapper`]}
      aria-roledescription="carousel"
    >
      <h2 className="visually-hidden">Completed Projects</h2>
      {/* position relative on controller-project-wrapper */}
      <div className={CarouselStyles[`controller-project-wrapper`]}>
        {/* centered vertically because of declaration align-self: center on parent element */}
        {/* .project-wrapper which is a grid item */}
        {/* controller button container */}
        <div className={CarouselStyles[`control-buttons-wrapper`]}>
          {/* up arrow */}
          <button
            className={CarouselStyles[`previous-btn`]}
            aria-label="previous project"
            onClick={clickPreviousSnapItem}
            aria-controls="scroll-container"
          >
            <FaArrowUp />
          </button>
          {/* down arrow */}
          <button
            className={CarouselStyles[`next-btn`]}
            aria-label="next project"
            onClick={clickNextSnapItem}
            aria-controls="scroll-container"
          >
            <FaArrowDown />
          </button>
        </div>
        <div
          className={CarouselStyles[`snap-items-container`]}
          tabIndex="-1"
          id="scroll-container"
          aria-live="polite"
          onKeyDown={keyboardScrollThroughSnapItems}
        >
          {/* aria-hidden all on projects except project with tabindex 0 */}
          {!initialValuesObj.upArrowArray &&
          !initialValuesObj.downArrowArray ? (
            <React.Fragment>
              <Project
                hidden="true"
                label="1 of 9"
                classText="snap-item"
                pos="1"
                tab=""
                spanContent="1"
              />
              <Project
                hidden="true"
                label="2 of 9"
                classText="snap-item"
                pos="2"
                tab=""
                spanContent="2"
              />
              <Project
                hidden="true"
                label="3 of 9"
                classText="snap-item"
                pos="3"
                tab="-1"
                spanContent="3"
              />
              <Project
                hidden="true"
                label="4 of 9"
                classText="snap-item"
                pos="4"
                tab="-1"
                spanContent="4"
              />
              <Project
                hidden="true"
                label="5 of 9"
                classText="snap-item"
                pos="5"
                tab="-1"
                spanContent="5"
              />
              <Project
                hidden="true"
                label="6 of 9"
                classText="snap-item"
                pos="6"
                tab="-1"
                spanContent="6"
              />
              <Project
                hidden="true"
                label="7 of 9"
                classText="snap-item"
                pos="7"
                tab="-1"
                spanContent="7"
              />
              <Project
                hidden="true"
                label="8 of 9"
                classText="snap-item"
                pos="8"
                tab="-1"
                spanContent="8"
              />
              <Project
                hidden="true"
                label="9 of 9"
                classText="snap-item"
                pos="9"
                tab="-1"
                spanContent="9"
              />
            </React.Fragment>
          ) : initialValuesObj.upArrowArray ? (
            initialValuesObj.upArrowArray.map(function renderProjects(
              element,
              index
            ) {
              const {
                classText,
                posIndex,
                spanText,
                tabindex,
                ariaHidden,
                ariaLabel,
              } = element;
              <Project
                classText={classText}
                pos={posIndex}
                tab={tabindex}
                forKey={index}
                hidden={ariaHidden}
                label={ariaLabel}
                spanContent={spanText}
              />;
            })
          ) : (
            initialValuesObj.downArrowArray.map(function renderProjects(
              element,
              index
            ) {
              const { classText, posIndex, spanText, tabindex } = element;
              <Project
                forKey={index}
                classText={classText}
                pos={posIndex}
                tab={tabindex}
                hidden={ariaHidden}
                label={ariaLabel}
                spanContent={spanText}
              />;
            })
          )}
        </div>
        {/* swipe right */}
        <button
          data-carouselbtnclicked="false"
          id="show-intro"
          className={CarouselStyles[`swipe-right-btn`]}
          onClick={swipeRightBtn}
        >
          <span className={CarouselStyles[`btn-content-wrapper`]}>
            <span className={CarouselStyles[`btn-text`]}>
              swipe right go back.
            </span>
            <FaArrowRight className={CarouselStyles[`arrow-right`]} />
          </span>
        </button>
      </div>
    </section>
  );
}
