import React from "react";
import CarouselStyles from "./Carousel.module.css";
import { swipeRightBtn } from "./carouselHelpers";
import { FaArrowRight } from "react-icons/fa";
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
  return (
    <section
      id="carousel-snap-item"
      className={CarouselStyles[`project-wrapper`]}
    >
      <h2 className="visually-hidden">Completed Projects</h2>
      {/* position relative on controller-project-wrapper */}
      <div className={CarouselStyles[`controller-project-wrapper`]}>
        {/* centered vertically because of declaration align-self: center on parent element */}
        {/* .project-wrapper which is a grid item */}
        {/* controller button container */}
        <div className={CarouselStyles[`control-buttons`]}>
          {/* up arrow */}
          <button aria-label="previous project"></button>
          {/* down arrow */}
          <button aria-label="next project"></button>
        </div>
        <div
          className={CarouselStyles[`snap-items-container`]}
          tabIndex="-1"
          id="scroll-container"
        >
          {/* aria-hidden all on projects except project with tabindex 0 */}
          {!initialValuesObj.upArrowArray &&
          !initialValuesObj.downArrowArray ? (
            <React.Fragment>
              <Project classText="snap-item" pos="1" tab="-1" spanContent="1" />
              <Project classText="snap-item" pos="2" tab="0" spanContent="2" />
              <Project classText="snap-item" pos="3" tab="-1" spanContent="3" />
              <Project classText="snap-item" pos="4" tab="-1" spanContent="4" />
              <Project classText="snap-item" pos="5" tab="-1" spanContent="5" />
              <Project classText="snap-item" pos="6" tab="-1" spanContent="6" />
              <Project classText="snap-item" pos="7" tab="-1" spanContent="7" />
              <Project classText="snap-item" pos="8" tab="-1" spanContent="8" />
              <Project classText="snap-item" pos="9" tab="-1" spanContent="9" />
            </React.Fragment>
          ) : initialValuesObj.upArrowArray ? (
            initialValuesObj.upArrowArray.map(function renderProjects(
              element,
              index
            ) {
              const { classText, posIndex, spanText, tabindex } = element;
              <Project
                classText={classText}
                pos={posIndex}
                tab={tabindex}
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
                classText={classText}
                pos={posIndex}
                tab={tabindex}
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
