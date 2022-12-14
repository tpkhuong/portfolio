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
import Project from "./Project";
import ProjectCard from "../../Projects/ProjectCard";
import { arrayOfObjForProjectCard } from "../../Projects/ProjectCard/ProjectInfoObj";
import { FaArrowLeft, FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function Carousel({ children, ...props }) {
  const copiedArray = [...arrayOfObjForProjectCard];
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
      // document.getElementById("currentFocused").scrollIntoView();
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
          {/* loop through arrayOfObjForProjectCard render project card for each obj in array */}
          {copiedArray.map(function makeProject(obj, index) {
            return index == 0 ? (
              <Project
                key={Math.random() * index}
                hidden="false"
                label={`${index + 1} of 9`}
                classText="snap-item"
                pos={obj.homePagePosIndex}
                tab="0"
                spanContent={`${index + 1}`}
                idAttr="currentFocused"
              >
                <ProjectCard
                  page="home"
                  imgSrc={obj.imgInfo.imgSrc}
                  imgText={obj.imgInfo.altText}
                  title={obj.title}
                  techArray={obj.tech}
                  description={obj.description}
                  viewProject={obj.links.viewProject}
                  viewCode={obj.links.viewCode}
                />
              </Project>
            ) : (
              <Project
                key={Math.random() * index}
                hidden="true"
                label={`${index + 1} of 9`}
                classText="snap-item"
                pos={obj.homePagePosIndex}
                tab="-1"
                spanContent={`${index + 1}`}
              >
                <ProjectCard
                  page="home"
                  imgSrc={obj.imgInfo.imgSrc}
                  imgText={obj.imgInfo.altText}
                  title={obj.title}
                  techArray={obj.tech}
                  description={obj.description}
                  viewProject={obj.links.viewProject}
                  viewCode={obj.links.viewCode}
                />
              </Project>
            );
          })}
          {/* <React.Fragment>
            <Project
              hidden="false"
              label="1 of 9"
              classText="snap-item"
              pos="one"
              tab="0"
              spanContent="1"
              idAttr="currentFocused"
            >
              <ProjectCard
                page="home"
                imgSrc={arrayOfObjForProjectCard[0].imgInfo.imgSrc}
                imgText={arrayOfObjForProjectCard[0].imgInfo.altText}
                title={arrayOfObjForProjectCard[0].title}
                techArray={arrayOfObjForProjectCard[0].tech}
                description={arrayOfObjForProjectCard[0].description}
                viewProject={arrayOfObjForProjectCard[0].links.viewProject}
                viewCode={arrayOfObjForProjectCard[0].links.viewCode}
              />
            </Project>
            <Project
              hidden="true"
              label="2 of 9"
              classText="snap-item"
              pos="two"
              tab="-1"
              spanContent="2"
            >
              <span>2</span>
            </Project>
            <Project
              hidden="true"
              label="3 of 9"
              classText="snap-item"
              pos="three"
              tab="-1"
              spanContent="3"
            >
              <span>3</span>
            </Project>
            <Project
              hidden="true"
              label="4 of 9"
              classText="snap-item"
              pos="four"
              tab="-1"
              spanContent="4"
            >
              <span>4</span>
            </Project>
            <Project
              hidden="true"
              label="5 of 9"
              classText="snap-item"
              pos="five"
              tab="-1"
              spanContent="5"
            >
              5
            </Project>
            <Project
              hidden="true"
              label="6 of 9"
              classText="snap-item"
              pos="six"
              tab="-1"
              spanContent="6"
            >
              <span>6</span>
            </Project>
            <Project
              hidden="true"
              label="7 of 9"
              classText="snap-item"
              pos="seven"
              tab="-1"
              spanContent="7"
            >
              <span>7</span>
            </Project>
            <Project
              hidden="true"
              label="8 of 9"
              classText="snap-item"
              pos="eight"
              tab="-1"
              spanContent="8"
            >
              <span>8</span>
            </Project>
            <Project
              hidden="true"
              label="9 of 9"
              classText="snap-item"
              pos="nine"
              tab="-1"
              spanContent="9"
            >
              <span>9</span>
            </Project>
          </React.Fragment> */}
        </div>
        {/* swipe right */}
        <button
          data-carouselbtnclicked="false"
          id="show-intro"
          className={CarouselStyles[`swipe-right-btn`]}
          onClick={swipeRightBtn}
        >
          <span className={CarouselStyles[`btn-content-wrapper`]}>
            <FaArrowLeft className={CarouselStyles[`arrow-left`]} />
            <span className={CarouselStyles[`btn-text`]}>
              Go back to Home page.
            </span>
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
