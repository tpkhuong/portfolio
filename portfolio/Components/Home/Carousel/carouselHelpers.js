export function swipeRightBtn(event) {
  event.target.closest("BUTTON").getAttribute("data-carouselbtnclicked") ==
  "false"
    ? event.target
        .closest("BUTTON")
        .setAttribute("data-carouselbtnclicked", "true")
    : event.target
        .closest("BUTTON")
        .setAttribute("data-carouselbtnclicked", "false");
  // select element with id carousel-snap-item then select parent element
  const carouselSnapElement = document.getElementById("carousel-snap-item");
  const introBtnElement = document.getElementById("show-carousel");
  setTimeout(() => {
    carouselSnapElement.parentElement.scrollBy(-5, 0);
  }, 350);
  introBtnElement.getAttribute("data-introbtnclicked") == "true"
    ? introBtnElement.setAttribute("data-introbtnclicked", "false")
    : null;
}

// on click

export function clickPreviousSnapItem(event) {
  // find snap item with tabindex === "0"
  if (event.target.closest("BUTTON")) {
    console.log("prev btn");
    const currentFocusedElement = document.querySelector(
      "div[id='scroll-container'] div[tabindex='0']"
    );
  }
}

export function clickNextSnapItem(event) {
  // find snap item with tabindex === "0"
  if (event.target.closest("BUTTON")) {
    console.log("next btn");
    const currentFocusedItem = document.querySelector(
      "div[id='scroll-container'] div[tabindex='0']"
    );
  }
}

// keyboard

const methodsForKeyboardScroll = {
  // up arrow
  ArrowUp: (event, element) => {
    console.log("up");
  },
  // left arrow
  ArrowLeft: (event, element) => {
    console.log("left");
  },
  // down arrow
  ArrowDown: (event, element) => {
    console.log("down");
  },
  // right arrow
  ArrowRight: (event, element) => {
    console.log("right");
  },
  // home
  Home: (event, element) => {
    console.log("home");
  },
  // end
  End: (event, element) => {
    console.log("end");
  },
  // page up
  PageUp: (event, element) => {
    console.log("up");
  },
  // page down
  PageDown: (event, element) => {
    console.log("down");
  },
};

export function keyboardScrollThroughSnapItems(event) {
  // event.code
  // pass in event and element to methodsForKeyboardScroll[key]()
  // console.log(event.target.closest("div[aria-roledescription='slide']"));
  const currentFocusedSnapItem = event.target.closest(
    "div[aria-roledescription='slide']"
  );
  // if (event.target.closest("DIV") && event.target.closest("DIV").getAttribute("aria-roledescription") == "slide") {
  //     // methodsForKeyboardScroll[event.code]()
  // }
}

// up and left arrow

function previousSnapSibling(event, element) {
  // instead of working with document.activeElement which will give us the curent focused element
  // we will use event.target.closest("div[aria-roledescription='slide']") or work with snap item
  // for both keyboard and clicking on previous and next btn
  // pass in the div with aria-roledescription='slide' as the element parameter
  // algorithm to assign value string "0" to tabindex attr will be handled by our intersection observer func
}

// down and right arrow

function nextSnapSibling(event, element) {
  // instead of working with document.activeElement which will give us the curent focused element
  // we will use event.target.closest("div[aria-roledescription='slide']") or work with snap item
  // for both keyboard and clicking on previous and next btn
  // pass in the div with aria-roledescription='slide' as the element parameter
  // algorithm to assign value string "0" to tabindex attr will be handled by our intersection observer func
}

// intersection observer

// use getElementById in .useEffect() to select snap items container and its children
// pass those variables to funcs below
export function observeSnapItemsContainerMobile(
  rootElement,
  children,
  callFuncToRenderNewArray
) {
  // offsetTop 2928
  const mobileScrollHelper = {
    top: { one: "", nine: "" },
    bottom: {
      one: (target) => {},
      nine: (target) => {
        target.previousElementSibling.setAttribute("tabindex", "-1");
        // get target parent children
        const [firstElement, ...restOfItems] = [
          ...target.parentElement.children,
        ];
        const reorderArray = [...restOfItems, firstElement].map(
          function createNewOrderedList(element, index) {
            /** 
                         * classText,
                        posIndex,
                        spanText,
                        tabindex,
                        ariaHidden,
                        ariaLabel,
                         * **/
            const objOfValues =
              index == 7
                ? {
                    classText: "snap-item",
                    posIndex: element.getAttribute("data-pos-index"),
                    spanText: element.firstElementChild.innerText,
                    tabindex: "0",
                    ariaHidden: "false",
                    ariaLabel: `9 of 9`,
                    focusId: "currentFocused",
                  }
                : {
                    classText: "snap-item",
                    posIndex: element.getAttribute("data-pos-index"),
                    spanText: element.firstElementChild.innerText,
                    tabindex: "-1",
                    ariaHidden: "true",
                    ariaLabel: element.getAttribute("aria-label"),
                  };
            return objOfValues;
          }
        );
        console.log(reorderArray);
        callFuncToRenderNewArray((prevValues) => {
          return {
            ...prevValues,
            upArrowArray: reorderArray,
            downArrowArray: null,
          };
        });
      },
    },
    // nine: (target) => {
    //   target.previousElementSibling.setAttribute("tabindex", "-1");
    //   // get target parent children
    //   const [firstElement, ...restOfItems] = [...target.parentElement.children];
    //   const reorderArray = [...restOfItems, firstElement].map(
    //     function createNewOrderedList(element, index) {
    //       /**
    //                      * classText,
    //                     posIndex,
    //                     spanText,
    //                     tabindex,
    //                     ariaHidden,
    //                     ariaLabel,
    //                      * **/
    //       const objOfValues =
    //         index == 7
    //           ? {
    //               classText: "snap-item",
    //               posIndex: element.getAttribute("data-pos-index"),
    //               spanText: element.firstElementChild.innerText,
    //               tabindex: "0",
    //               ariaHidden: "false",
    //               ariaLabel: `9 of 9`,
    //               focusId: "currentFocused",
    //             }
    //           : {
    //               classText: "snap-item",
    //               posIndex: element.getAttribute("data-pos-index"),
    //               spanText: element.firstElementChild.innerText,
    //               tabindex: "-1",
    //               ariaHidden: "true",
    //               ariaLabel: element.getAttribute("aria-label"),
    //             };
    //       return objOfValues;
    //     }
    //   );
    //   console.log(reorderArray);
    //   callFuncToRenderNewArray((prevValues) => {
    //     return {
    //       ...prevValues,
    //       upArrowArray: reorderArray,
    //       downArrowArray: null,
    //     };
    //   });
    // },
  };
  // callback
  function assignValuesToElementAttrMobile(entries, observer) {
    entries.forEach(function loopThroughItemsMobile(entry) {
      if (!entry.isIntersecting) {
        return;
      }
      console.log("mobile");
      console.log(entry);
      console.log(entry.target.offsetTop);
      console.log(document.activeElement);
      /**
       * when we call setSnapItem func which will render carousel component
       * document.activeElement will be the element with id="currentFocused"
       * **/
      // find current focus element using document.activeElement
      // then find the pos index of that focus element
      // then find pos index of intersecting element
      // compare the two
      // if focus element pos index is less than pos index of intersecting element user is scrolling down
      // if focus element pos index is greater pos index of intersecting element user is scrolling up
      const targetPosindex = entry.target.getAttribute("data-pos-index");
      if (targetPosindex != "one" && targetPosindex != "nine") {
        observerHelper(entry.target);
        return;
      }
      // if entry target pos is one or nine and we're at the bottom of scroll
      if (targetPosindex == "nine" || targetPosindex == "one") {
        if (entry.target.offsetTop == 2928) {
          mobileScrollHelper["bottom"][targetPosindex](entry.target);
          return;
        }
        // if entry target pos is one or nine and we're at the top of scroll
        // if (entry.target.offsetTop == 0) {
        //   mobileScrollHelper["top"][targetPosindex](entry.target);
        //   return;
        // }
      }
    });
  }
  // options
  const mobileOptions = {
    root: rootElement,
    //
    threshold: 1,
    rootMargin: "0px -16px 0px -16px",
  };
  // call IntersectionObserver
  const mobileObserver = new IntersectionObserver(
    assignValuesToElementAttrMobile,
    mobileOptions
  );
  // loop through children elements and call oberser.observe on those elements
  children.forEach(function observeEachItem(item) {
    mobileObserver.observe(item);
  });
}

export function observeSnapItemsContainerDesktop(rootElement, children) {
  // callback
  function assignValuesToElementAttrDesktop(entries, observer) {
    entries.forEach(function loopThroughItemsDesktop(entry) {
      if (!entry.isIntersecting) {
        return;
      }
      console.log("desktop");
      console.log(entry);
    });
  }
  // options
  const desktopOptions = {
    root: rootElement,
    threshold: 1,
    rootMargin: "0px",
  };
  // call IntersectionObserver
  const desktopObserver = new IntersectionObserver(
    assignValuesToElementAttrDesktop,
    desktopOptions
  );
  // loop through children elements and call oberser.observe on those elements
  children.forEach(function obserbeEachChild(child) {
    desktopObserver.observe(child);
  });
}

function observerHelper(target) {
  // if current target element tabindex === "0" return
  const targetTabindex = target.getAttribute("tabindex");
  if (targetTabindex === "0") {
    return;
  }
  // if current target element tabindex == "-1" assign "0" to tabindex of target
  console.log(target.parentElement.getBoundingClientRect());
  const beforeElement = target.previousElementSibling;
  const afterElement = target.nextElementSibling;
  targetTabindex == "-1" ? target.setAttribute("tabindex", "0") : null;

  beforeElement
    ? beforeElement.getAttribute("tabindex") === "0"
      ? beforeElement.setAttribute("tabindex", "-1")
      : null
    : null;
  afterElement
    ? afterElement.getAttribute("tabindex") === "0"
      ? afterElement.setAttribute("tabindex", "-1")
      : null
    : null;
  target.focus();
}

function mobileReorderedSnapItems() {}

function carouselMobile() {
  // we can just call focus on prev/next sibling
}

function carouselDesktop() {}
