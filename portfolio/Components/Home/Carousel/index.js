import React from "react";
import CarouselStyles from "./Carousel.module.css";
import {
  swipeRightBtn,
  clickPreviousSnapItem,
  clickNextSnapItem,
  focusCenteredSnapItemOnWheelScrollDesktopMobile,
  keyboardScrollThroughSnapItems,
  resizeFocusCorrectItem,
  resizeMobileToDesktop,
  resizeDesktopToMobile,
} from "./carouselHelpers";
import { FaArrowRight, FaArrowUp, FaArrowDown } from "react-icons/fa";
import Project from "./Project";

export default function Carousel({ children, ...props }) {
  // const memoizedInitialValues = React.useMemo(() => {
  //   return {
  //     bottomOrTopArray: null,
  //   };
  // });
  // const initialValues = {
  //   bottomOrTopArray: null,
  //   targetElement: null,
  //   clickedBtn: null,
  // };
  // const [initialValuesObj, setSnapArray] = React.useState(initialValues);
  React.useEffect(() => {
    console.log(window.innerWidth);
    // scroll container
    const scrollContainer = document.getElementById("scroll-container");
    // scroll children
    const scrollChildren = [...scrollContainer.children];
    const secondChild = scrollChildren[1];

    /**
     * different approach
     * **/

    if (window.innerWidth <= 375) {
      scrollContainer.setAttribute("data-item-order", "mobile-nine-first");
      scrollContainer.scrollBy(0, 1);
    }

    if (window.innerWidth >= 1440) {
      scrollContainer.setAttribute("data-item-order", "desktop-eight-first");

      document.getElementById("currentFocused").scrollIntoView();
    }

    const resizeWatcher = debounce(function resize(event) {
      console.log(document.activeElement);

      // mobile;
      if (window.innerWidth <= 377) {
        const focusedElement = document.getElementById("currentFocused");

        resizeDesktopToMobile(focusedElement, resizeFocusCorrectItem);

        return;
      }

      // desktop
      if (window.innerWidth >= 1440) {
        const focusedItem = document.getElementById("currentFocused");

        resizeMobileToDesktop(focusedItem, resizeFocusCorrectItem);

        return;
      }
    }, 80);

    window.addEventListener("resize", resizeWatcher);

    console.log("scrollChildren", scrollChildren);

    return function cleanUp() {
      window.removeEventListener("resize", resizeWatcher);
    };
  }, []);

  return (
    <section
      id="carousel-snap-item"
      className={CarouselStyles[`project-wrapper`]}
      aria-roledescription="carousel"
      tabIndex="-1"
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
            id="upBtn"
          >
            <FaArrowUp />
          </button>
          {/* down arrow */}
          <button
            className={CarouselStyles[`next-btn`]}
            aria-label="next project"
            onClick={clickNextSnapItem}
            aria-controls="scroll-container"
            id="downBtn"
          >
            <FaArrowDown />
          </button>
        </div>
        <div
          className={CarouselStyles[`snap-items-container`]}
          tabIndex="-1"
          id="scroll-container"
          aria-live="polite"
          onWheel={focusCenteredSnapItemOnWheelScrollDesktopMobile}
          onKeyDown={keyboardScrollThroughSnapItems}
        >
          {/* aria-hidden all on projects except project with tabindex 0 */}
          <React.Fragment>
            <Project
              hidden="false"
              label="1 of 9"
              classText="snap-item"
              pos="one"
              tab="0"
              spanContent="1"
              idAttr="currentFocused"
            />
            <Project
              hidden="true"
              label="2 of 9"
              classText="snap-item"
              pos="two"
              tab="-1"
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
            <Project
              hidden="true"
              label="9 of 9"
              classText="snap-item"
              pos="nine"
              tab="-1"
              spanContent="9"
            />
          </React.Fragment>
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
              Go back to Home page.
            </span>
            <FaArrowRight className={CarouselStyles[`arrow-right`]} />
          </span>
        </button>
      </div>
    </section>
  );
}

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
