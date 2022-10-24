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
  // const memoizedInitialValues = React.useMemo(() => {
  //   return {
  //     bottomOrTopArray: null,
  //   };
  // });

  const [initialValuesObj, setSnapArray] = React.useState(null);
  React.useEffect(() => {
    // scroll container
    const scrollContainer = document.getElementById("scroll-container");
    // scroll children
    const scrollChildren = scrollContainer.children;
    // assigning tabindex, aria hidden to first and second children of snap items container
    const [firstChild, secondChild] = [...scrollChildren];
    // run algorithm below when array in initialValuesObj are null
    !initialValuesObj
      ? (firstChild.setAttribute("tabindex", "-1"),
        secondChild.setAttribute("aria-hidden", "false"),
        secondChild.setAttribute("tabindex", "0"),
        scrollContainer.scrollBy(0, 1))
      : null;

    // call intersection observer func based on screen size
    // call observeSnapItemsContainerMobile if .innerWidth is <= 375
    window.innerWidth <= 375
      ? observeSnapItemsContainerMobile(
          scrollContainer,
          [...scrollChildren],
          setSnapArray
        )
      : null;
    // call observeSnapItemsContainerDesktop if .innerWidth is >= 1440
    window.innerWidth >= 1440
      ? observeSnapItemsContainerDesktop(scrollContainer, [...scrollChildren])
      : null;
    // focus element with id currentFocused
    initialValuesObj
      ? (document.getElementById("currentFocused").scrollIntoView(),
        document.getElementById("currentFocused").focus())
      : null;
  }, [initialValuesObj]);

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
          {!initialValuesObj ? (
            <React.Fragment>
              <Project
                hidden="true"
                label="9 of 9"
                classText="snap-item"
                pos="nine"
                tab="-1"
                spanContent="9"
              />
              <Project
                hidden="true"
                label="1 of 9"
                classText="snap-item"
                pos="one"
                tab=""
                spanContent="1"
              />
              <Project
                hidden="true"
                label="2 of 9"
                classText="snap-item"
                pos="two"
                tab=""
                spanContent="2"
              />
              <Project
                hidden="true"
                label="3 of 9"
                classText="snap-item"
                pos="three"
                tab="-1"
                spanContent="3"
              />
              <Project
                hidden="true"
                label="4 of 9"
                classText="snap-item"
                pos="four"
                tab="-1"
                spanContent="4"
              />
              <Project
                hidden="true"
                label="5 of 9"
                classText="snap-item"
                pos="five"
                tab="-1"
                spanContent="5"
              />
              <Project
                hidden="true"
                label="6 of 9"
                classText="snap-item"
                pos="six"
                tab="-1"
                spanContent="6"
              />
              <Project
                hidden="true"
                label="7 of 9"
                classText="snap-item"
                pos="seven"
                tab="-1"
                spanContent="7"
              />
              <Project
                hidden="true"
                label="8 of 9"
                classText="snap-item"
                pos="eight"
                tab="-1"
                spanContent="8"
              />
            </React.Fragment>
          ) : (
            initialValuesObj.map(function renderProjects(element, index) {
              const {
                classText,
                posIndex,
                spanText,
                tabindex,
                ariaHidden,
                ariaLabel,
                focusId,
              } = element;
              return (
                <Project
                  classText={classText}
                  pos={posIndex}
                  tab={tabindex}
                  key={Math.random() * index}
                  hidden={ariaHidden}
                  label={ariaLabel}
                  idAttr={focusId ? focusId : null}
                  spanContent={spanText}
                />
              );
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
