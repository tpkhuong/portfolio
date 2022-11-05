import React from "react";
import CarouselStyles from "./Carousel.module.css";
import {
  swipeRightBtn,
  clickPreviousSnapItem,
  clickNextSnapItem,
  focusCenteredSnapItemOnWheelScroll,
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
  const initialValues = {
    bottomOrTopArray: null,
    targetElement: null,
  };
  const [initialValuesObj, setSnapArray] = React.useState(initialValues);
  React.useEffect(() => {
    console.log(window.innerWidth);
    // scroll container
    const scrollContainer = document.getElementById("scroll-container");
    // scroll children
    const scrollChildren = [...scrollContainer.children];
    /**
     * mobile
     * **/
    // if (window.innerWidth <= 375) {
    //   // assigning tabindex, aria hidden to first and second children of snap items container
    //   const secondChild = scrollChildren[1];
    //   // run algorithm below when array in initialValuesObj are null
    //   !initialValuesObj.bottomOrTopArray
    //     ? (secondChild.setAttribute("aria-hidden", "false"),
    //       secondChild.setAttribute("tabindex", "0"),
    //       secondChild.setAttribute("id", "currentFocused"),
    //       scrollContainer.scrollBy(0, 1))
    //     : null;
    //   // call intersection observer func based on screen size
    //   // call observeSnapItemsContainerMobile if .innerWidth is <= 375
    //   observeSnapItemsContainerMobile(
    //     scrollContainer,
    //     scrollChildren,
    //     setSnapArray,
    //     false,
    //     false
    //     // false,
    //     // "this is mobile test"
    //   );
    //   // focus element with id currentFocused
    //   initialValuesObj.bottomOrTopArray
    //     ? document.getElementById("currentFocused").focus()
    //     : null;
    // }
    console.log("scrollChildren", scrollChildren);
    /**
     * desktop
     * **/
    if (window.innerWidth >= 1440) {
      console.log("inside scrollChildren", scrollChildren);
      // assigning tabindex, aria hidden to first,second and third children of snap items container
      const secondChild = scrollChildren[1];

      !initialValuesObj.bottomOrTopArray
        ? (secondChild.setAttribute("aria-hidden", "false"),
          secondChild.setAttribute("tabindex", "0"),
          secondChild.setAttribute("id", "currentFocused"))
        : null;

      // const thirdChild = scrollChildren[2];

      // !initialValuesObj.bottomOrTopArray
      //   ? (thirdChild.setAttribute("aria-hidden", "false"),
      //     thirdChild.setAttribute("tabindex", "0"),
      //     thirdChild.setAttribute("id", "currentFocused"))
      //   : null;

      // call observeSnapItemsContainerDesktop if .innerWidth is >= 1440
      // observeSnapItemsContainerDesktop(
      //   scrollContainer,
      //   scrollChildren,
      //   setSnapArray,
      //   initialValuesObj.bottomOrTopArray,
      //   false,
      //   false
      //   // false,
      //   // "is resize desktop ob"
      // );

      !initialValuesObj.bottomOrTopArray ? secondChild.scrollIntoView() : null;

      initialValuesObj.bottomOrTopArray
        ? (document.getElementById("currentFocused").scrollIntoView(),
          document.getElementById("currentFocused").focus())
        : null;
    }

    /**
     * Resize observer
     * **/

    const resizeSnapitems = new ResizeObserver((entries) => {
      const dataFromLocalStorage = !localStorage.getItem("cachedObserverValues")
        ? null
        : JSON.parse(localStorage.getItem("cachedObserverValues"));

      const objFromLocalData = dataFromLocalStorage
        ? dataFromLocalStorage
        : { resizeIndicator: null };
      console.log(objFromLocalData, "objFromLocalData");
      console.log(window.innerWidth, "innerWidth resizeSnapItems");
      // mobile
      if (window.innerWidth <= 375) {
        if (!objFromLocalData.resizeIndicator) {
          console.log("scrollSnap: mobile resize is null");
          objFromLocalData.resizeIndicator = "mobile";
          localStorage.setItem(
            "cachedObserverValues",
            JSON.stringify(objFromLocalData)
          );
          return;
        }
        if (objFromLocalData.resizeIndicator == "desktop") {
          console.log("scrollSnap: mobile resize is desktop");
          // disconnect desktop
          observeSnapItemsContainerDesktop(
            scrollContainer,
            scrollChildren,
            setSnapArray,
            initialValuesObj.bottomOrTopArray,
            true
          );
          console.log("break");
          // observe mobile
          observeSnapItemsContainerMobile(
            scrollContainer,
            scrollChildren,
            setSnapArray
            // false,
            // true
          );
          objFromLocalData.resizeIndicator = "mobile";
          localStorage.setItem(
            "cachedObserverValues",
            JSON.stringify(objFromLocalData)
          );
          return;
        }
      }
      // desktop
      if (window.innerWidth >= 1440) {
        if (!objFromLocalData.resizeIndicator) {
          console.log("scrollSnap: desktop resize is null");
          objFromLocalData.resizeIndicator = "desktop";
          localStorage.setItem(
            "cachedObserverValues",
            JSON.stringify(objFromLocalData)
          );
          return;
        }
        if (objFromLocalData.resizeIndicator == "mobile") {
          console.log("scrollSnap: desktop resize is mobile");
          // disconnect mobile observer
          observeSnapItemsContainerMobile(
            scrollContainer,
            scrollChildren,
            setSnapArray,
            true
            // "this is a test"
          );
          // code outside callback of mobile observer is called
          // then when the element is in the rootMargin/threshold
          // code in the callback is called
          // observe desktop
          console.log("break desktop");
          observeSnapItemsContainerDesktop(
            scrollContainer,
            scrollChildren,
            setSnapArray,
            initialValuesObj.bottomOrTopArray
            // true,
            // true
          );
          objFromLocalData.resizeIndicator = "desktop";
          localStorage.setItem(
            "cachedObserverValues",
            JSON.stringify(objFromLocalData)
          );
          return;
        }
      }
    });
    // call .observe()
    // resizeSnapitems.observe(document.getElementsByTagName("body")[0]);
  }, [initialValuesObj.targetElement]);

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
          onWheel={focusCenteredSnapItemOnWheelScroll}
          onKeyDown={keyboardScrollThroughSnapItems.bind({
            initialValuesObj,
            setSnapArray,
          })}
        >
          {/* aria-hidden all on projects except project with tabindex 0 */}
          {!initialValuesObj.bottomOrTopArray ? (
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
                tab="-1"
                spanContent="1"
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
            </React.Fragment>
          ) : (
            initialValuesObj.bottomOrTopArray.map(function renderProjects(
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
