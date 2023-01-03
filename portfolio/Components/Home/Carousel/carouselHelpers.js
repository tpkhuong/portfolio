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
  }, 500);
  introBtnElement.getAttribute("data-introbtnclicked") == "true"
    ? introBtnElement.setAttribute("data-introbtnclicked", "false")
    : null;
}

/**
 * mobile scroll methods
 * **/

const mobileScrollHelper = {
  // going up
  up: {
    // top
    top: {
      one: (
        target,
        applyAttrCallback,
        itemOrderStr,
        typeOfScroll,
        focusArrow
      ) => {
        const lastItem =
          target.parentElement.children[
            target.parentElement.children.length - 1
          ];

        if (typeOfScroll == "mouse") {
          setTimeout(() => {
            target.parentElement.setAttribute("data-item-order", itemOrderStr);

            applyAttrCallback(lastItem);

            lastItem.focus();
          }, 500);
          return;
        }

        target.parentElement.setAttribute("data-item-order", itemOrderStr);

        applyAttrCallback(lastItem);

        lastItem.focus();

        focusArrow
          ? setTimeout(() => {
              document.getElementById(focusArrow).focus();
            }, 100)
          : null;
      },
      two: (
        target,
        applyAttrCallback,
        itemOrderStr,
        typeOfScroll,
        focusArrow
      ) => {
        const firstItem = target.parentElement.children[0];

        if (typeOfScroll == "mouse") {
          setTimeout(() => {
            target.parentElement.setAttribute("data-item-order", itemOrderStr);

            applyAttrCallback(firstItem);

            firstItem.focus();
          }, 500);
          return;
        }

        target.parentElement.setAttribute("data-item-order", itemOrderStr);

        applyAttrCallback(firstItem);

        firstItem.focus();

        focusArrow
          ? setTimeout(() => {
              document.getElementById(focusArrow).focus();
            }, 100)
          : null;
      },
    },
    // bottom
    bottom: {
      nine: (
        target,
        applyAttrCallback,
        itemOrderStr,
        typeOfScroll,
        focusArrow
      ) => {
        const eighthItem =
          target.parentElement.children[
            target.parentElement.children.length - 2
          ];

        if (typeOfScroll == "mouse") {
          setTimeout(() => {
            target.parentElement.setAttribute("data-item-order", itemOrderStr);

            applyAttrCallback(eighthItem);

            eighthItem.focus();
          }, 500);
          return;
        }

        target.parentElement.setAttribute("data-item-order", itemOrderStr);

        applyAttrCallback(eighthItem);

        eighthItem.focus();

        focusArrow
          ? setTimeout(() => {
              document.getElementById(focusArrow).focus();
            }, 100)
          : null;
      },
    },
  },
  // going down
  down: {
    // top
    top: {
      one: (
        target,
        applyAttrCallback,
        itemOrderStr,
        typeOfScroll,
        focusArrow
      ) => {
        const secondItem = target.parentElement.children[1];

        if (typeOfScroll == "mouse") {
          setTimeout(() => {
            target.parentElement.setAttribute("data-item-order", itemOrderStr);

            applyAttrCallback(secondItem);

            secondItem.focus();
          }, 500);
          return;
        }

        target.parentElement.setAttribute("data-item-order", itemOrderStr);

        applyAttrCallback(secondItem);

        secondItem.focus();

        focusArrow
          ? setTimeout(() => {
              document.getElementById(focusArrow).focus();
            }, 100)
          : null;
      },
    },
    // bottom
    bottom: {
      eight: (
        target,
        applyAttrCallback,
        itemOrderStr,
        typeOfScroll,
        focusArrow
      ) => {
        const lastItem =
          target.parentElement.children[
            target.parentElement.children.length - 1
          ];

        if (typeOfScroll == "mouse") {
          setTimeout(() => {
            target.parentElement.setAttribute("data-item-order", itemOrderStr);

            applyAttrCallback(lastItem);

            lastItem.focus();
          }, 500);
          return;
        }

        target.parentElement.setAttribute("data-item-order", itemOrderStr);

        applyAttrCallback(lastItem);

        lastItem.focus();

        focusArrow
          ? setTimeout(() => {
              document.getElementById(focusArrow).focus();
            }, 100)
          : null;
      },
      nine: (
        target,
        applyAttrCallback,
        itemOrderStr,
        typeOfScroll,
        focusArrow
      ) => {
        const firstItem = target.parentElement.children[0];

        if (typeOfScroll == "mouse") {
          setTimeout(() => {
            target.parentElement.setAttribute("data-item-order", itemOrderStr);

            applyAttrCallback(firstItem);

            firstItem.focus();
          }, 500);
          return;
        }

        target.parentElement.setAttribute("data-item-order", itemOrderStr);

        applyAttrCallback(firstItem);

        firstItem.focus();

        focusArrow
          ? setTimeout(() => {
              document.getElementById(focusArrow).focus();
            }, 100)
          : null;
      },
    },
  },
};

/**
 * desktop scroll methods
 * **/

const desktopScrollHelper = {
  // up
  up: {
    top: {
      one: (
        target,
        applyAttrCallback,
        itemOrderStr,
        typeOfScroll,
        focusArrow
      ) => {
        const lastItem =
          target.parentElement.children[
            target.parentElement.children.length - 1
          ];

        if (typeOfScroll == "mouse") {
          setTimeout(() => {
            target.parentElement.setAttribute("data-item-order", itemOrderStr);

            applyAttrCallback(lastItem);

            lastItem.focus();
            lastItem.scrollIntoView();
          }, 500);
          return;
        }

        target.parentElement.setAttribute("data-item-order", itemOrderStr);

        applyAttrCallback(lastItem);

        lastItem.focus();
        lastItem.scrollIntoView();

        focusArrow
          ? setTimeout(() => {
              document.getElementById(focusArrow).focus();
            }, 100)
          : null;

        return;
      },
      two: (
        target,
        applyAttrCallback,
        itemOrderStr,
        typeOfScroll,
        focusArrow
      ) => {
        const firstItem = target.parentElement.children[0];

        if (typeOfScroll == "mouse") {
          setTimeout(() => {
            target.parentElement.setAttribute("data-item-order", itemOrderStr);

            applyAttrCallback(firstItem);

            firstItem.focus();
            firstItem.scrollIntoView();
          }, 500);
          return;
        }

        target.parentElement.setAttribute("data-item-order", itemOrderStr);

        applyAttrCallback(firstItem);

        firstItem.focus();
        firstItem.scrollIntoView();

        focusArrow
          ? setTimeout(() => {
              document.getElementById(focusArrow).focus();
            }, 100)
          : null;

        return;
      },
      three: (
        target,
        applyAttrCallback,
        itemOrderStr,
        typeOfScroll,
        focusArrow
      ) => {
        const secondItem = target.parentElement.children[1];

        if (typeOfScroll == "mouse") {
          setTimeout(() => {
            target.parentElement.setAttribute("data-item-order", itemOrderStr);

            applyAttrCallback(secondItem);

            secondItem.focus();
            secondItem.scrollIntoView();
          }, 500);
          return;
        }

        target.parentElement.setAttribute("data-item-order", itemOrderStr);

        applyAttrCallback(secondItem);

        secondItem.focus();
        secondItem.scrollIntoView();

        focusArrow
          ? setTimeout(() => {
              document.getElementById(focusArrow).focus();
            }, 100)
          : null;

        return;
      },
    },
    bottom: {
      eight: (
        target,
        applyAttrCallback,
        itemOrderStr,
        typeOfScroll,
        focusArrow
      ) => {
        const seventhItem =
          target.parentElement.children[
            target.parentElement.children.length - 3
          ];

        if (typeOfScroll == "mouse") {
          setTimeout(() => {
            target.parentElement.setAttribute("data-item-order", itemOrderStr);

            applyAttrCallback(seventhItem);

            seventhItem.focus();
            seventhItem.scrollIntoView();
          }, 500);
          return;
        }

        target.parentElement.setAttribute("data-item-order", itemOrderStr);

        applyAttrCallback(seventhItem);

        seventhItem.focus();
        seventhItem.scrollIntoView();

        focusArrow
          ? setTimeout(() => {
              document.getElementById(focusArrow).focus();
            }, 100)
          : null;

        return;
      },
      nine: (
        target,
        applyAttrCallback,
        itemOrderStr,
        typeOfScroll,
        focusArrow
      ) => {
        const eighthItem =
          target.parentElement.children[
            target.parentElement.children.length - 2
          ];

        if (typeOfScroll == "mouse") {
          setTimeout(() => {
            target.parentElement.setAttribute("data-item-order", itemOrderStr);

            applyAttrCallback(eighthItem);

            eighthItem.focus();
            eighthItem.scrollIntoView();
          }, 500);
          return;
        }

        target.parentElement.setAttribute("data-item-order", itemOrderStr);

        applyAttrCallback(eighthItem);

        eighthItem.focus();
        eighthItem.scrollIntoView();

        focusArrow
          ? setTimeout(() => {
              document.getElementById(focusArrow).focus();
            }, 100)
          : null;

        return;
      },
    },
  },
  // down
  down: {
    top: {
      one: (
        target,
        applyAttrCallback,
        itemOrderStr,
        typeOfScroll,
        focusArrow
      ) => {
        const secondItem = target.parentElement.children[1];

        if (typeOfScroll == "mouse") {
          setTimeout(() => {
            target.parentElement.setAttribute("data-item-order", itemOrderStr);

            applyAttrCallback(secondItem);

            secondItem.focus();
            secondItem.scrollIntoView();
          }, 500);
          return;
        }

        target.parentElement.setAttribute("data-item-order", itemOrderStr);

        applyAttrCallback(secondItem);

        secondItem.focus();
        secondItem.scrollIntoView();

        focusArrow
          ? setTimeout(() => {
              document.getElementById(focusArrow).focus();
            }, 100)
          : null;

        return;
      },
      two: (
        target,
        applyAttrCallback,
        itemOrderStr,
        typeOfScroll,
        focusArrow
      ) => {
        const thirdItem = target.parentElement.children[2];
        if (typeOfScroll == "mouse") {
          setTimeout(() => {
            target.parentElement.setAttribute("data-item-order", itemOrderStr);

            applyAttrCallback(thirdItem);

            thirdItem.focus();
            thirdItem.scrollIntoView();
          }, 500);
          return;
        }

        target.parentElement.setAttribute("data-item-order", itemOrderStr);

        applyAttrCallback(thirdItem);

        thirdItem.focus();
        thirdItem.scrollIntoView();

        focusArrow
          ? setTimeout(() => {
              document.getElementById(focusArrow).focus();
            }, 100)
          : null;

        return;
      },
    },
    bottom: {
      seven: (
        target,
        applyAttrCallback,
        itemOrderStr,
        typeOfScroll,
        focusArrow
      ) => {
        const eighthItem =
          target.parentElement.children[
            target.parentElement.children.length - 2
          ];

        if (typeOfScroll == "mouse") {
          setTimeout(() => {
            target.parentElement.setAttribute("data-item-order", itemOrderStr);

            applyAttrCallback(eighthItem);

            eighthItem.focus();
            eighthItem.scrollIntoView();
          }, 500);
          return;
        }

        target.parentElement.setAttribute("data-item-order", itemOrderStr);

        applyAttrCallback(eighthItem);

        eighthItem.focus();
        eighthItem.scrollIntoView();

        focusArrow
          ? setTimeout(() => {
              document.getElementById(focusArrow).focus();
            }, 100)
          : null;

        return;
      },
      eight: (
        target,
        applyAttrCallback,
        itemOrderStr,
        typeOfScroll,
        focusArrow
      ) => {
        const lastItem =
          target.parentElement.children[
            target.parentElement.children.length - 1
          ];

        if (typeOfScroll == "mouse") {
          setTimeout(() => {
            target.parentElement.setAttribute("data-item-order", itemOrderStr);

            applyAttrCallback(lastItem);

            lastItem.focus();
            lastItem.scrollIntoView();
          }, 500);
          return;
        }

        target.parentElement.setAttribute("data-item-order", itemOrderStr);

        applyAttrCallback(lastItem);

        lastItem.focus();
        lastItem.scrollIntoView();

        focusArrow
          ? setTimeout(() => {
              document.getElementById(focusArrow).focus();
            }, 100)
          : null;

        return;
      },
      nine: (
        target,
        applyAttrCallback,
        itemOrderStr,
        typeOfScroll,
        focusArrow
      ) => {
        const firstItem = target.parentElement.children[0];

        if (typeOfScroll == "mouse") {
          setTimeout(() => {
            target.parentElement.setAttribute("data-item-order", itemOrderStr);

            applyAttrCallback(firstItem);

            firstItem.focus();
            firstItem.scrollIntoView();
          }, 500);
          return;
        }

        target.parentElement.setAttribute("data-item-order", itemOrderStr);

        applyAttrCallback(firstItem);

        firstItem.focus();
        firstItem.scrollIntoView();

        focusArrow
          ? setTimeout(() => {
              document.getElementById(focusArrow).focus();
            }, 100)
          : null;

        return;
      },
    },
  },
};

/**
 * create func for mouse scroll, arrow key scroll, arrow button scroll
 * **/

/**
 * mobile scroll up
 * **/

const mobileMouseScrollUp = mobileScrollUpFactoryFunc(
  mobileScrollHelper,
  applyFocusSnapItemAttr,
  ["mobile-one-last", "mobile-nine-first", "standard"],
  null
);

const mobileArrowKeyScrollUp = mobileScrollUpFactoryFunc(
  mobileScrollHelper,
  applyFocusSnapItemAttr,
  ["mobile-one-last", "mobile-nine-first", "standard"],
  null
);

const mobileArrowBtnScrollUp = mobileScrollUpFactoryFunc(
  mobileScrollHelper,
  applyFocusSnapItemAttr,
  ["mobile-one-last", "mobile-nine-first", "standard"],
  "upBtn"
);

/**
 * mobile scroll down
 * **/
const mobileMouseScrollDown = mobileScrollDownFactoryFunc(
  mobileScrollHelper,
  applyFocusSnapItemAttr,
  ["standard", "mobile-one-last", "mobile-nine-first"],
  null
);

const mobileArrowKeyScrollDown = mobileScrollDownFactoryFunc(
  mobileScrollHelper,
  applyFocusSnapItemAttr,
  ["standard", "mobile-one-last", "mobile-nine-first"],
  null
);

const mobileArrowBtnScrollDown = mobileScrollDownFactoryFunc(
  mobileScrollHelper,
  applyFocusSnapItemAttr,
  ["standard", "mobile-one-last", "mobile-nine-first"],
  "downBtn"
);

/**
 * desktop scroll up
 * **/

const desktopMouseScrollUp = desktopScrollUpFactoryFunc(
  desktopScrollHelper,
  applyFocusSnapItemAttr,
  [
    "desktop-two-last",
    "desktop-eight-first",
    "desktop-nine-first",
    "standard",
    "desktop-one-last",
  ],
  null
);
const desktopArrowKeyScrollUp = desktopScrollUpFactoryFunc(
  desktopScrollHelper,
  applyFocusSnapItemAttr,
  [
    "desktop-two-last",
    "desktop-eight-first",
    "desktop-nine-first",
    "standard",
    "desktop-one-last",
  ],
  null
);
const desktopArrowBtnScrollUp = desktopScrollUpFactoryFunc(
  desktopScrollHelper,
  applyFocusSnapItemAttr,
  [
    "desktop-two-last",
    "desktop-eight-first",
    "desktop-nine-first",
    "standard",
    "desktop-one-last",
  ],
  "upBtn"
);

/**
 * desktop scroll down
 * **/

const desktopMouseScrollDown = desktopScrollDownFactoryFunc(
  desktopScrollHelper,
  applyFocusSnapItemAttr,
  [
    "desktop-nine-first",
    "standard",
    "desktop-one-last",
    "desktop-two-last",
    "desktop-eight-first",
  ],
  null
);
const desktopArrowKeyScrollDown = desktopScrollDownFactoryFunc(
  desktopScrollHelper,
  applyFocusSnapItemAttr,
  [
    "desktop-nine-first",
    "standard",
    "desktop-one-last",
    "desktop-two-last",
    "desktop-eight-first",
  ],
  null
);
const desktopArrowBtnScrollDown = desktopScrollDownFactoryFunc(
  desktopScrollHelper,
  applyFocusSnapItemAttr,
  [
    "desktop-nine-first",
    "standard",
    "desktop-one-last",
    "desktop-two-last",
    "desktop-eight-first",
  ],
  "downBtn"
);

// call Object.freeze on our method obj so we can't mutate it

// on click

export function clickPreviousSnapItem(event) {
  // find snap item with tabindex === "0"
  if (event.target.closest("BUTTON")) {
    console.log("prev btn");
    const windowWidth = window.innerWidth;
    const currentFocusedElement = document.getElementById("currentFocused");
    const posindexUpArrowBtn =
      currentFocusedElement.getAttribute("data-pos-index");
    // set tabindex to "-1"
    currentFocusedElement.setAttribute("tabindex", "-1");
    // remove id attribute
    currentFocusedElement.removeAttribute("id");
    // aria-hidden "true"
    currentFocusedElement.setAttribute("aria-hidden", "true");

    /**
     * mobile
     * **/
    if (windowWidth <= 375) {
      if (
        posindexUpArrowBtn == "one" ||
        posindexUpArrowBtn == "two" ||
        posindexUpArrowBtn == "nine"
      ) {
        mobileArrowBtnScrollUp(currentFocusedElement, posindexUpArrowBtn, null);
        return;
      }
    }

    /**
     * desktop
     * **/

    if (windowWidth >= 1440) {
      if (
        posindexUpArrowBtn == "one" ||
        posindexUpArrowBtn == "two" ||
        posindexUpArrowBtn == "three" ||
        posindexUpArrowBtn == "eight" ||
        posindexUpArrowBtn == "nine"
      ) {
        desktopArrowBtnScrollUp(
          currentFocusedElement,
          posindexUpArrowBtn,
          "upBtn"
        );
        return;
      }
    }

    // scroll up
    scrollingUpHelper(currentFocusedElement);
    previousSnapSibling(currentFocusedElement, windowWidth);
    document.getElementById("currentFocused").focus();
    setTimeout(() => {
      document.getElementById("upBtn").focus();
    }, 50);
  }
}

export function clickNextSnapItem(event) {
  // find snap item with tabindex === "0"
  if (event.target.closest("BUTTON")) {
    console.log("next btn");
    const windowWidth = window.innerWidth;
    const currentFocusedItem = document.getElementById("currentFocused");
    const posindexDownArrowBtn =
      currentFocusedItem.getAttribute("data-pos-index");
    // set tabindex to "-1"
    currentFocusedItem.setAttribute("tabindex", "-1");
    // remove id attribute
    currentFocusedItem.removeAttribute("id");
    // aria-hidden "true"
    currentFocusedItem.setAttribute("aria-hidden", "true");

    /**
     * mobile
     * **/

    if (windowWidth <= 375) {
      if (
        posindexDownArrowBtn == "one" ||
        posindexDownArrowBtn == "eight" ||
        posindexDownArrowBtn == "nine"
      ) {
        mobileArrowBtnScrollDown(
          currentFocusedItem,
          posindexDownArrowBtn,
          null
        );
        return;
      }
    }

    /**
     * desktop
     * **/

    if (windowWidth >= 1440) {
      if (
        posindexDownArrowBtn == "one" ||
        posindexDownArrowBtn == "two" ||
        posindexDownArrowBtn == "seven" ||
        posindexDownArrowBtn == "eight" ||
        posindexDownArrowBtn == "nine"
      ) {
        desktopArrowBtnScrollDown(
          currentFocusedItem,
          posindexDownArrowBtn,
          "downBtn"
        );
        return;
      }
    }
    scrollingDownHelper(currentFocusedItem);
    nextSnapSibling(currentFocusedItem, windowWidth);
    document.getElementById("currentFocused").focus();
    setTimeout(() => {
      document.getElementById("downBtn").focus();
    }, 50);
  }
}

/**
 * keyboard
 * **/

const methodsForKeyboardScroll = {
  // up arrow
  ArrowUp: (
    event,
    element,
    width,
    posindex,
    keyScrollFuncObj,
    defaultActionFuncsObj
  ) => {
    event.preventDefault();

    const { mobileArrowKeyScrollUp, desktopArrowKeyScrollUp } =
      keyScrollFuncObj;

    const {
      scrollingUpHelper,
      previousSnapSibling,
      changeCurrentSnapItemAttr,
      applyFocusSnapItemAttr,
    } = defaultActionFuncsObj;

    changeCurrentSnapItemAttr(element);

    /**
     * mobile
     * **/

    if (width <= 375) {
      if (posindex == "one" || posindex == "two" || posindex == "nine") {
        mobileArrowKeyScrollUp(element, posindex, null);
        return;
      }
    }

    /**
     * desktop
     * **/

    if (width >= 1440) {
      if (
        posindex == "one" ||
        posindex == "two" ||
        posindex == "three" ||
        posindex == "eight" ||
        posindex == "nine"
      ) {
        desktopArrowKeyScrollUp(element, posindex, null);
        return;
      }
    }

    // func to move two top items to bottom
    // func to move one bottom item to top

    scrollingUpHelper(element);
    previousSnapSibling(element, width);

    width <= 375
      ? document.getElementById("currentFocused").focus()
      : (document.getElementById("currentFocused").scrollIntoView(),
        document.getElementById("currentFocused").focus());

    console.log("up");
  },
  // left arrow
  ArrowLeft: (
    event,
    element,
    width,
    posindex,
    keyScrollFuncObj,
    defaultActionFuncsObj
  ) => {
    event.preventDefault();

    const { mobileArrowKeyScrollUp, desktopArrowKeyScrollUp } =
      keyScrollFuncObj;

    const {
      scrollingUpHelper,
      previousSnapSibling,
      changeCurrentSnapItemAttr,
      applyFocusSnapItemAttr,
    } = defaultActionFuncsObj;

    changeCurrentSnapItemAttr(element);

    /**
     * mobile
     * **/

    if (width <= 375) {
      if (posindex == "one" || posindex == "two" || posindex == "nine") {
        mobileArrowKeyScrollUp(element, posindex, null);
        return;
      }
    }

    /**
     * desktop
     * **/

    if (width >= 1440) {
      if (
        posindex == "one" ||
        posindex == "two" ||
        posindex == "three" ||
        posindex == "eight" ||
        posindex == "nine"
      ) {
        desktopArrowKeyScrollUp(element, posindex, null);
        return;
      }
    }

    scrollingUpHelper(element);
    previousSnapSibling(element, width);

    width <= 375
      ? document.getElementById("currentFocused").focus()
      : (document.getElementById("currentFocused").scrollIntoView(),
        document.getElementById("currentFocused").focus());

    console.log("left");
  },
  // down arrow
  ArrowDown: (
    event,
    element,
    width,
    posindex,
    keyScrollFuncObj,
    defaultActionFuncsObj
  ) => {
    event.preventDefault();

    const { mobileArrowKeyScrollDown, desktopArrowKeyScrollDown } =
      keyScrollFuncObj;

    const { scrollingDownHelper, nextSnapSibling, changeCurrentSnapItemAttr } =
      defaultActionFuncsObj;

    changeCurrentSnapItemAttr(element);

    /**
     * mobile
     * **/

    if (width <= 375) {
      // if (posindex == "one") {
      //   const secondItem = element.parentElement.children[1];

      //   element.parentElement.setAttribute("data-item-order", "standard");

      //   applyFocusSnapItemAttr(secondItem);

      //   secondItem.focus();

      //   return;
      // }

      // if (posindex == "eight") {
      //   const lastItem = lastSnapItem(element);

      //   element.parentElement.setAttribute(
      //     "data-item-order",
      //     "mobile-one-last"
      //   );

      //   applyFocusSnapItemAttr(lastItem);

      //   lastItem.focus();

      //   return;
      // }

      // if (posindex == "nine") {
      //   element.parentElement.setAttribute(
      //     "data-item-order",
      //     "mobile-nine-first"
      //   );

      //   const firstItem = element.parentElement.children[0];

      //   applyFocusSnapItemAttr(firstItem);

      //   firstItem.focus();

      //   return;
      // }

      if (posindex == "one" || posindex == "eight" || posindex == "nine") {
        mobileArrowKeyScrollDown(element, posindex, null);
        return;
      }

      // if (posindex == "one") {
      //   methodObj["down"]["top"][posindex](
      //     element,
      //     callToRender,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexOne,
      //     null,
      //     null
      //   );
      //   return;
      // }

      // if (posindex == "eight") {
      //   methodObj["down"]["bottom"][posindex](
      //     element,
      //     callToRender,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexSeven,
      //     null,
      //     null
      //   );
      // }

      // if (posindex == "nine") {
      //   methodObj["down"]["bottom"][posindex](
      //     element,
      //     callToRender,
      //     moveLastTwoItemsToBeginning,
      //     createNewOrderedArrayIndexOne,
      //     null,
      //     null
      //   );
      //   return;
      // }
    }

    /**
     * desktop
     * **/

    if (width >= 1440) {
      if (
        posindex == "one" ||
        posindex == "two" ||
        posindex == "seven" ||
        posindex == "eight" ||
        posindex == "nine"
      ) {
        desktopArrowKeyScrollDown(element, posindex, null);
        return;
      }
    }

    // func to move two bottom items to top
    // func to move one top item to bottom
    scrollingDownHelper(element);
    nextSnapSibling(element, width);

    width <= 375
      ? document.getElementById("currentFocused").focus()
      : (document.getElementById("currentFocused").scrollIntoView(),
        document.getElementById("currentFocused").focus());

    console.log("down");
  },
  // right arrow
  ArrowRight: (
    event,
    element,
    width,
    posindex,
    keyScrollFuncObj,
    defaultActionFuncsObj
  ) => {
    event.preventDefault();

    const { mobileArrowKeyScrollDown, desktopArrowKeyScrollDown } =
      keyScrollFuncObj;

    const { scrollingDownHelper, nextSnapSibling, changeCurrentSnapItemAttr } =
      defaultActionFuncsObj;

    changeCurrentSnapItemAttr(element);

    /**
     * mobile
     * **/

    if (width <= 375) {
      if (posindex == "one" || posindex == "eight" || posindex == "nine") {
        mobileArrowKeyScrollDown(element, posindex, null);
        return;
      }
    }

    /**
     * desktop
     * **/

    if (width >= 1440) {
      if (
        posindex == "one" ||
        posindex == "two" ||
        posindex == "seven" ||
        posindex == "eight" ||
        posindex == "nine"
      ) {
        desktopArrowKeyScrollDown(element, posindex, null);
        return;
      }
    }

    scrollingDownHelper(element);
    nextSnapSibling(element, width);

    width <= 375
      ? document.getElementById("currentFocused").focus()
      : (document.getElementById("currentFocused").scrollIntoView(),
        document.getElementById("currentFocused").focus());

    console.log("right");
  },
  // home
  Home: (
    event,
    element,
    width,
    posindex,
    keyScrollFuncObj,
    defaultActionFuncsObj
  ) => {
    event.preventDefault();

    if (posindex != "one") {
      const { changeCurrentSnapItemAttr, applyFocusSnapItemAttr } =
        defaultActionFuncsObj;

      changeCurrentSnapItemAttr(element);

      const firstItem = element.parentElement.children[0];

      applyFocusSnapItemAttr(firstItem);

      /**
       * mobile
       * **/

      if (width <= 375) {
        element.parentElement.setAttribute(
          "data-item-order",
          "mobile-nine-first"
        );

        firstItem.focus();
        firstItem.scrollIntoView();
        return;
      }

      /**
       * desktop
       * **/

      if (width >= 1440) {
        element.parentElement.setAttribute(
          "data-item-order",
          "desktop-eight-first"
        );

        firstItem.focus();
        firstItem.scrollIntoView();

        return;
      }
    }
    console.log("home");
  },
  // end
  End: (
    event,
    element,
    width,
    posindex,
    keyScrollFuncObj,
    defaultActionFuncsObj
  ) => {
    event.preventDefault();

    if (posindex != "nine") {
      const { changeCurrentSnapItemAttr, applyFocusSnapItemAttr } =
        defaultActionFuncsObj;

      changeCurrentSnapItemAttr(element);

      const lastItem =
        element.parentElement.children[
          element.parentElement.children.length - 1
        ];

      applyFocusSnapItemAttr(lastItem);

      /**
       * mobile
       * **/

      if (width <= 375) {
        element.parentElement.setAttribute(
          "data-item-order",
          "mobile-one-last"
        );

        lastItem.focus();
        lastItem.scrollIntoView();
        return;
      }

      /**
       * desktop
       * **/

      if (width >= 1440) {
        element.parentElement.setAttribute(
          "data-item-order",
          "desktop-two-last"
        );

        lastItem.focus();
        lastItem.scrollIntoView();
        return;
      }

      console.log("end");
    }
  },
  // page up
  PageUp: (
    event,
    element,
    width,
    posindex,
    keyScrollFuncObj,
    defaultActionFuncsObj
  ) => {
    event.preventDefault();

    if (posindex == "one") {
      return;
    }
    const twoAboveCurrentFocused =
      element.previousElementSibling.previousElementSibling;

    const { changeCurrentSnapItemAttr, applyFocusSnapItemAttr } =
      defaultActionFuncsObj;

    changeCurrentSnapItemAttr(element);

    /**
     * mobile
     * **/

    if (width <= 375) {
      // check if event.target data-pos-index is "nine" or "two"
      if (posindex == "nine") {
        applyFocusSnapItemAttr(twoAboveCurrentFocused);

        element.parentElement.setAttribute("data-item-order", "standard");

        twoAboveCurrentFocused.focus();
        twoAboveCurrentFocused.scrollIntoView();
        return;
      }

      if (posindex == "two" || posindex == "three") {
        const firstItem = element.parentElement.children[0];
        applyFocusSnapItemAttr(firstItem);

        element.parentElement.setAttribute(
          "data-item-order",
          "mobile-nine-first"
        );

        firstItem.focus();
        firstItem.scrollIntoView();

        return;
      }
    }

    /**
     * desktop
     * **/

    if (width >= 1440) {
      // two last item to top
      if (posindex == "two" || posindex == "three") {
        const firstItem = element.parentElement.children[0];
        applyFocusSnapItemAttr(firstItem);

        element.parentElement.setAttribute(
          "data-item-order",
          "desktop-eight-first"
        );

        firstItem.focus();
        firstItem.scrollIntoView();

        return;
      }

      // four last item to top
      if (posindex == "four") {
        applyFocusSnapItemAttr(twoAboveCurrentFocused);

        element.parentElement.setAttribute(
          "data-item-order",
          "desktop-nine-first"
        );

        twoAboveCurrentFocused.focus();
        twoAboveCurrentFocused.scrollIntoView();

        return;
      }

      if (posindex == "eight") {
        applyFocusSnapItemAttr(twoAboveCurrentFocused);

        element.parentElement.setAttribute("data-item-order", "standard");

        twoAboveCurrentFocused.focus();
        twoAboveCurrentFocused.scrollIntoView();
        return;
      }

      if (posindex == "nine") {
        applyFocusSnapItemAttr(twoAboveCurrentFocused);

        element.parentElement.setAttribute("data-item-order", "standard");

        twoAboveCurrentFocused.focus();
        twoAboveCurrentFocused.scrollIntoView();
        return;
      }
    }

    // select previous previous sibling element

    // default action
    applyFocusSnapItemAttr(twoAboveCurrentFocused);
    twoAboveCurrentFocused.focus();
    twoAboveCurrentFocused.scrollIntoView();

    console.log("pageup");
  },
  // page down
  PageDown: (
    event,
    element,
    width,
    posindex,
    keyScrollFuncObj,
    defaultActionFuncsObj
  ) => {
    event.preventDefault();

    if (posindex == "nine") {
      return;
    }
    const twoBelowCurrentFocused =
      element.nextElementSibling.nextElementSibling;

    const { changeCurrentSnapItemAttr, applyFocusSnapItemAttr } =
      defaultActionFuncsObj;
    // check if posindex is "one", "seven" or "eight"

    changeCurrentSnapItemAttr(element);

    /**
     * mobile
     * **/

    if (width <= 375) {
      if (posindex == "one") {
        applyFocusSnapItemAttr(twoBelowCurrentFocused);

        element.parentElement.setAttribute("data-item-order", "standard");

        twoBelowCurrentFocused.focus();
        twoBelowCurrentFocused.scrollIntoView();

        return;
      }

      if (posindex == "seven" || posindex == "eight") {
        const lastItem =
          element.parentElement.children[
            element.parentElement.children.length - 1
          ];

        applyFocusSnapItemAttr(lastItem);

        element.parentElement.setAttribute(
          "data-item-order",
          "mobile-one-last"
        );

        lastItem.focus();
        lastItem.scrollIntoView();

        return;
      }
    }

    /**
     * desktop
     * **/

    if (width >= 1440) {
      // one first two to end
      if (posindex == "one" || posindex == "two") {
        applyFocusSnapItemAttr(twoBelowCurrentFocused);

        element.parentElement.setAttribute("data-item-order", "standard");

        twoBelowCurrentFocused.focus();
        twoBelowCurrentFocused.scrollIntoView();
        return;
      }

      if (posindex == "six") {
        applyFocusSnapItemAttr(twoBelowCurrentFocused);

        element.parentElement.setAttribute(
          "data-item-order",
          "desktop-one-last"
        );

        twoBelowCurrentFocused.focus();
        twoBelowCurrentFocused.scrollIntoView();

        return;
      }
      // seven first two to end
      if (posindex == "seven" || posindex == "eight") {
        const lastItem =
          element.parentElement.children[
            element.parentElement.children.length - 1
          ];

        applyFocusSnapItemAttr(lastItem);

        element.parentElement.setAttribute(
          "data-item-order",
          "desktop-two-last"
        );

        lastItem.focus();
        lastItem.scrollIntoView();

        return;
      }
    }

    // select next next sibling element

    applyFocusSnapItemAttr(twoBelowCurrentFocused);

    twoBelowCurrentFocused.focus();
    twoBelowCurrentFocused.scrollIntoView();

    console.log("pagedown");
  },
};

export function keyboardScrollThroughSnapItems(event) {
  if (event.ctrlKey) {
    return;
  }
  // event.code
  const windowWidth = window.innerWidth;
  const currentFocusedSnapItem = document.getElementById("currentFocused");
  const targetPosIndex = currentFocusedSnapItem.getAttribute("data-pos-index");

  if (
    event.code == "Space" &&
    document.activeElement == currentFocusedSnapItem
  ) {
    event.preventDefault();
  }
  /**
   * up, right, down and left arrow keys
   * **/
  if (methodsForKeyboardScroll[event.code]) {
    methodsForKeyboardScroll[event.code](
      event,
      currentFocusedSnapItem,
      windowWidth,
      targetPosIndex,
      {
        mobileArrowKeyScrollUp,
        mobileArrowKeyScrollDown,
        desktopArrowKeyScrollUp,
        desktopArrowKeyScrollDown,
      },
      {
        scrollingUpHelper,
        scrollingDownHelper,
        previousSnapSibling,
        nextSnapSibling,
        changeCurrentSnapItemAttr,
        applyFocusSnapItemAttr,
      }
    );
  }
}

// up and left arrow

function previousSnapSibling(element, width) {
  const negativeVerticalScroll = width <= 375 ? -1 : -50;
  // instead of working with document.activeElement which will give us the curent focused element
  // we will use event.target.closest("div[aria-roledescription='slide']") or work with snap item
  // for both keyboard and clicking on previous and next btn
  // pass in the div with aria-roledescription='slide' as the element parameter
  // algorithm to assign value string "0" to tabindex attr will be handled by our intersection observer func
  element.parentElement.scrollBy(0, negativeVerticalScroll);
}

// down and right arrow

function nextSnapSibling(element, width) {
  const positiveVerticalScroll = width <= 375 ? 1 : 50;
  // instead of working with document.activeElement which will give us the curent focused element
  // we will use event.target.closest("div[aria-roledescription='slide']") or work with snap item
  // for both keyboard and clicking on previous and next btn
  // pass in the div with aria-roledescription='slide' as the element parameter
  // algorithm to assign value string "0" to tabindex attr will be handled by our intersection observer func
  element.parentElement.scrollBy(0, positiveVerticalScroll);
}

/**
 * mobile scroll up factory func
 * **/

function mobileScrollUpFactoryFunc(
  mobileMethodsObj,
  applyAttrFunc,
  [oneIndexAttrStr, twoIndexAttrStr, nineIndexAttrStr],
  focusArrowBtn
) {
  return function innerFunc(target, posIndex, scrollType) {
    // top one
    if (posIndex == "one") {
      mobileMethodsObj["up"]["top"][posIndex](
        target,
        applyAttrFunc,
        oneIndexAttrStr,
        scrollType,
        focusArrowBtn
      );
      return;
    }

    // top eight
    if (posIndex == "two") {
      mobileMethodsObj["up"]["top"][posIndex](
        target,
        applyAttrFunc,
        twoIndexAttrStr,
        scrollType,
        focusArrowBtn
      );
      return;
    }

    // bottom nine
    if (posIndex == "nine") {
      mobileMethodsObj["up"]["bottom"][posIndex](
        target,
        applyAttrFunc,
        nineIndexAttrStr,
        scrollType,
        focusArrowBtn
      );
      return;
    }
  };
}

/**
 * mobile scroll down factory func
 * **/

function mobileScrollDownFactoryFunc(
  mobileMethodsObj,
  applyAttrFunc,
  [oneIndexAttrStr, eightIndexAttrStr, nineIndexAttrStr],
  focusArrowBtn
) {
  return function innerFunc(target, posIndex, scrollType) {
    // top one
    if (posIndex == "one") {
      mobileMethodsObj["down"]["top"][posIndex](
        target,
        applyAttrFunc,
        oneIndexAttrStr,
        scrollType,
        focusArrowBtn
      );
      return;
    }
    // bottom eight
    if (posIndex == "eight") {
      mobileMethodsObj["down"]["bottom"][posIndex](
        target,
        applyAttrFunc,
        eightIndexAttrStr,
        scrollType,
        focusArrowBtn
      );
      return;
    }
    // bottom nine
    if (posIndex == "nine") {
      mobileMethodsObj["down"]["bottom"][posIndex](
        target,
        applyAttrFunc,
        nineIndexAttrStr,
        scrollType,
        focusArrowBtn
      );
      return;
    }
  };
}

/**
 * desktop scroll up factory func
 * **/

function desktopScrollUpFactoryFunc(
  desktopMethodObj,
  applyAttrFunc,
  [
    oneIndexAttrStr,
    twoIndexAttrStr,
    threeIndexAttrStr,
    eightIndexAttrStr,
    nineIndexAttrStr,
  ],
  focusArrowBtn
) {
  return function innerFunc(target, posIndex, scrollType) {
    // top one
    if (posIndex == "one") {
      desktopMethodObj["up"]["top"][posIndex](
        target,
        applyAttrFunc,
        oneIndexAttrStr,
        scrollType,
        focusArrowBtn
      );
      return;
    }
    // top two
    if (posIndex == "two") {
      desktopMethodObj["up"]["top"][posIndex](
        target,
        applyAttrFunc,
        twoIndexAttrStr,
        scrollType,
        focusArrowBtn
      );
      return;
    }
    // top three
    if (posIndex == "three") {
      desktopMethodObj["up"]["top"][posIndex](
        target,
        applyAttrFunc,
        threeIndexAttrStr,
        scrollType,
        focusArrowBtn
      );
      return;
    }
    // bottom eight
    if (posIndex == "eight") {
      desktopMethodObj["up"]["bottom"][posIndex](
        target,
        applyAttrFunc,
        eightIndexAttrStr,
        scrollType,
        focusArrowBtn
      );
      return;
    }
    // bottom nine
    if (posIndex == "nine") {
      desktopMethodObj["up"]["bottom"][posIndex](
        target,
        applyAttrFunc,
        nineIndexAttrStr,
        scrollType,
        focusArrowBtn
      );
      return;
    }
  };
}

/**
 * desktop scroll down factory func
 * **/

function desktopScrollDownFactoryFunc(
  desktopMethodObj,
  applyAttrFunc,
  [
    oneIndexAttrStr,
    twoIndexAttrStr,
    threeIndexAttrStr,
    eightIndexAttrStr,
    nineIndexAttrStr,
  ],
  focusArrowBtn
) {
  return function innerFunc(target, posIndex, scrollType) {
    // top one
    if (posIndex == "one") {
      desktopMethodObj["down"]["top"][posIndex](
        target,
        applyAttrFunc,
        oneIndexAttrStr,
        scrollType,
        focusArrowBtn
      );
      return;
    }
    // top two
    if (posIndex == "two") {
      desktopMethodObj["down"]["top"][posIndex](
        target,
        applyAttrFunc,
        twoIndexAttrStr,
        scrollType,
        focusArrowBtn
      );
      return;
    }
    // bottom seven
    if (posIndex == "seven") {
      desktopMethodObj["down"]["bottom"][posIndex](
        target,
        applyAttrFunc,
        threeIndexAttrStr,
        scrollType,
        focusArrowBtn
      );
      return;
    }
    // bottom eight
    if (posIndex == "eight") {
      desktopMethodObj["down"]["bottom"][posIndex](
        target,
        applyAttrFunc,
        eightIndexAttrStr,
        scrollType,
        focusArrowBtn
      );
      return;
    }
    // bottom nine
    if (posIndex == "nine") {
      desktopMethodObj["down"]["bottom"][posIndex](
        target,
        applyAttrFunc,
        nineIndexAttrStr,
        scrollType,
        focusArrowBtn
      );
      return;
    }
  };
}

/**
 * wheel event instead of intersection observer to work with desktop/mobile screen size
 * when user zoom in
 * **/

export function focusCenteredSnapItemOnWheelScrollDesktopMobile(event) {
  const screenSize = window.innerWidth;
  console.log(event);
  console.log("screenSize", screenSize);
  const { deltaY } = event;
  const currentFocused = document.getElementById("currentFocused");
  const targetPosIndex = currentFocused.getAttribute("data-pos-index");
  console.log(currentFocused, "currentFocused");
  // get element with id currentFocused
  // set tabindex to "-1"
  currentFocused.setAttribute("tabindex", "-1");
  // remove id attribute
  currentFocused.removeAttribute("id");
  // aria-hidden "true"
  currentFocused.setAttribute("aria-hidden", "true");

  // when deltaY is negative run scrollingUpHelper
  if (deltaY < 0) {
    /**
     * mobile
     * **/
    if (screenSize <= 375) {
      // top one
      if (
        targetPosIndex == "one" ||
        targetPosIndex == "two" ||
        targetPosIndex == "nine"
      ) {
        mobileMouseScrollUp(currentFocused, targetPosIndex, "mouse");
        return;
      }
    }

    /**
     * desktop
     * **/

    if (screenSize >= 1440) {
      if (
        targetPosIndex == "one" ||
        targetPosIndex == "two" ||
        targetPosIndex == "three" ||
        targetPosIndex == "eight" ||
        targetPosIndex == "nine"
      ) {
        desktopMouseScrollUp(currentFocused, targetPosIndex, "mouse");
        return;
      }
    }

    scrollingUpHelper(currentFocused);
    setTimeout(() => {
      document.getElementById("currentFocused").focus();
      document.getElementById("currentFocused").scrollIntoView();
    }, 500);

    console.log("scrolling up");
  }
  // when deltaY is positive run scrollingDownHelper
  if (deltaY > 0) {
    /**
     * mobile
     * **/
    if (screenSize <= 375) {
      if (
        targetPosIndex == "nine" ||
        targetPosIndex == "one" ||
        targetPosIndex == "eight"
      ) {
        mobileMouseScrollDown(currentFocused, targetPosIndex, "mouse");
        return;
      }
    }

    /**
     * desktop
     * **/

    if (screenSize >= 1440) {
      if (
        targetPosIndex == "one" ||
        targetPosIndex == "two" ||
        targetPosIndex == "seven" ||
        targetPosIndex == "eight" ||
        targetPosIndex == "nine"
      ) {
        desktopMouseScrollDown(currentFocused, targetPosIndex, "mouse");
        return;
      }
    }

    scrollingDownHelper(currentFocused);
    setTimeout(() => {
      document.getElementById("currentFocused").focus();
      document.getElementById("currentFocused").scrollIntoView();
    }, 500);
    console.log("scrolling down");
    /**
     * desktop
     * **/
  }
}

/**
 * scrolling up helper
 * **/

function scrollingUpHelper(target, btnUpClicked) {
  const previousSnapItem = target.previousElementSibling;
  // set tabindex to "0"
  previousSnapItem.setAttribute("tabindex", "0");
  // aria-hidden "false"
  previousSnapItem.setAttribute("aria-hidden", "false");
  // add id attribute "currentFocused"
  previousSnapItem.setAttribute("id", "currentFocused");
}

/**
 * scrolling down helper
 * **/

function scrollingDownHelper(target, btnDownClicked) {
  const nextSnapItem = target.nextElementSibling;
  // set tabindex to "0"
  nextSnapItem.setAttribute("tabindex", "0");
  // aria-hidden "false"
  nextSnapItem.setAttribute("aria-hidden", "false");
  // add id attribute "currentFocused"
  nextSnapItem.setAttribute("id", "currentFocused");
}

/**
 * change current snap item attr
 * **/

function changeCurrentSnapItemAttr(target) {
  // set tabindex to "-1"
  target.setAttribute("tabindex", "-1");
  // remove id attribute
  target.removeAttribute("id");
  // aria-hidden "true"
  target.setAttribute("aria-hidden", "true");
}

/**
 * apply focus snap item attr
 * **/

function applyFocusSnapItemAttr(target) {
  // set tabindex to "0"
  target.setAttribute("tabindex", "0");
  // aria-hidden "false"
  target.setAttribute("id", "currentFocused");
  // add id attribute "currentFocused"
  target.setAttribute("aria-hidden", "false");
}

/**
 * assign item order attr
 * **/

function assignItemOrderAttr(focusedElement, attrValue, time) {
  setTimeout(() => {
    focusedElement.parentElement.setAttribute("data-item-order", attrValue);
  }, time);
}

/**
 * resize mobile. desktop going to mobile
 * **/

export function resizeDesktopToMobile(target, resizeFocusFunc) {
  const targetPosindex = target.getAttribute("data-pos-index");

  // // dont move snap items
  // if (
  //   targetPosindex == "three" ||
  //   targetPosindex == "four" ||
  //   targetPosindex == "five" ||
  //   targetPosindex == "six" ||
  //   targetPosindex == "seven"
  // ) {
  //   target.focus();
  //   target.scrollIntoView();
  //   return;
  // }
  // move snap items
  // top
  if (targetPosindex == "one") {
    target.parentElement.setAttribute("data-item-order", "mobile-nine-first");
  }
  if (targetPosindex == "two" || targetPosindex == "eight") {
    target.parentElement.setAttribute("data-item-order", "standard");
  }
  if (targetPosindex == "nine") {
    target.parentElement.setAttribute("data-item-order", "mobile-one-last");
  }

  resizeFocusFunc(document.activeElement);
  return;
}

/**
 * resize desktop. mobile going to desktop
 * **/

export function resizeMobileToDesktop(target, resizeFocusFunc) {
  const targetPosindex = target.getAttribute("data-pos-index");
  // dont move snap items
  // if (
  //   targetPosindex == "three" ||
  //   targetPosindex == "four" ||
  //   targetPosindex == "five" ||
  //   targetPosindex == "six" ||
  //   targetPosindex == "seven"
  // ) {

  //   return;
  // }
  // move snap items
  if (targetPosindex == "one") {
    target.parentElement.setAttribute("data-item-order", "desktop-eight-first");
  }

  if (targetPosindex == "two") {
    target.parentElement.setAttribute("data-item-order", "desktop-nine-first");
  }

  if (targetPosindex == "eight") {
    target.parentElement.setAttribute("data-item-order", "desktop-one-last");
  }

  if (targetPosindex == "nine") {
    target.parentElement.setAttribute("data-item-order", "desktop-two-last");
  }

  resizeFocusFunc(document.activeElement);
  return;
}

/**
 * resize focus correct item
 * **/

export function resizeFocusCorrectItem(target) {
  if (
    target.getAttribute("id") == "upBtn" ||
    target.getAttribute("id") == "downBtn"
  ) {
    document.getElementById("currentFocused").focus();
    document.getElementById("currentFocused").scrollIntoView();
    setTimeout(() => {
      target.focus();
    }, 80);
    return;
  }

  console.log(target, "target after replacechildren()");

  if (document.activeElement.tagName == "BODY") {
    console.log("focus is on body element");
    setTimeout(() => {
      document.getElementById("currentFocused").focus();
      document.getElementById("currentFocused").scrollIntoView();
    }, 80);
    return;
  }

  if (document.activeElement.getAttribute("id") == "currentFocused") {
    setTimeout(() => {
      document.getElementById("currentFocused").scrollIntoView();
    }, 80);
    return;
  }
}
