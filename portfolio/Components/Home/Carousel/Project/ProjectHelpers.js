// import {
//   factoryFuncCreateArray,
//   moveFirstItemToEndOfList,
//   moveFirstTwoItemsToEnd,
//   moveLastItemToBeginningOfList,
//   moveLastTwoItemsToBeginning,
// } from "../carouselHelpers";

// /**
//  * create func to create arrays for touch event
//  * **/

// // working with index 1 and 7 mobile

// const touchEventCreateNewOrderedArrayIndexOne = factoryFuncCreateArray(1);

// const touchEventCreateNewOrderedArrayIndexSeven = factoryFuncCreateArray(7);

// // working with index 2 and 6 desktop

// const touchEventCreateNewOrderedArrayIndexTwo = factoryFuncCreateArray(2);

// const touchEventCreateNewOrderedArrayIndexSix = factoryFuncCreateArray(6);

/**
 * scroll methods for touch event
 * **/

const touchEventVerticalMovementHelper = {
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

        // render component
        // typeOfScroll == "mouse"
        //   ? setTimeout(() => {
        //       renderComponent((prev) => {
        //         return {
        //           ...prev,
        //           bottomOrTopArray: arrayForTopOneUp,
        //           targetElement: "uptopone",
        //         };
        //       });
        //     }, 500)
        //   : setTimeout(() => {
        //       renderComponent((prev) => {
        //         return {
        //           ...prev,
        //           bottomOrTopArray: arrayForTopOneUp,
        //           targetElement: "uptopone",
        //           clickedBtn: upDownArrow,
        //         };
        //       });
        //     }, 100);
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
};

export function touchStartForMobile(event) {
  const objDataFromStorage = localStorage.getItem("cachedDataMobile")
    ? JSON.parse(localStorage.getItem("cachedDataMobile"))
    : null;
  const dataObj = objDataFromStorage
    ? objDataFromStorage
    : { touchStateScreenY: null, clientRectY: null };
  console.log(event.changedTouches[0].screenY);
  console.log("start", event.target.getBoundingClientRect().y);
  // assign touchstart value to obj properties
  dataObj.touchStateScreenY = event.changedTouches[0].screenY;
  dataObj.clientRectY = event.target.getBoundingClientRect().y;
  localStorage.setItem("cachedDataMobile", JSON.stringify(dataObj));
}

export function touchEndForMobile(event) {
  // touchend values
  const touchendScreenY = event.changedTouches[0].screenY;
  const touchendClientRectY = event.target.getBoundingClientRect().y;
  // touchstart screenY greater than touchend screenY going up
  // touchend screenY greater than touchstart screenY going down
  const valuesFromStorage = localStorage.getItem("cachedDataMobile")
    ? JSON.parse(localStorage.getItem("cachedDataMobile"))
    : null;

  const objOfTouchStartValues = valuesFromStorage ? valuesFromStorage : null;

  if (!objOfTouchStartValues) {
    console.log("objOfTouchStartValues is null.");
    return;
  }

  console.log("objOfTouchStartValues", objOfTouchStartValues);
  console.log("touch start values from local storage");
  console.log(objOfTouchStartValues.clientRectY);
  console.log(objOfTouchStartValues.touchStateScreenY);
  console.log(typeof objOfTouchStartValues.clientRectY);
  console.log(typeof objOfTouchStartValues.touchStateScreenY);
  console.log("touch end values");
  console.log("touchendScreenY", touchendScreenY);
  console.log("touchendClientRectY", touchendClientRectY);

  const currentFocusedSnapItem = document.getElementById("currentFocused");
  const targetPosIndex = currentFocusedSnapItem.getAttribute("data-pos-index");

  setTimeout(() => {
    if (
      objOfTouchStartValues.clientRectY ==
      event.target.getBoundingClientRect().y
    ) {
      console.log(
        "objOfTouchStartValues.clientRect == event.target.getBoundingClientRect().y each other"
      );
      console.log(
        objOfTouchStartValues.clientRectY ==
          event.target.getBoundingClientRect().y
      );
      return;
    }
    // touchstart clientRect.y is greater than touchend clientRect.y going up
    if (
      objOfTouchStartValues.clientRectY > event.target.getBoundingClientRect().y
    ) {
      console.log("scrolling up");
      touchEventChangeCurrentSnapItemAttr(currentFocusedSnapItem);

      // one
      if (targetPosIndex == "one") {
        touchEventVerticalMovementHelper["up"]["top"][targetPosIndex](
          currentFocusedSnapItem,
          touchEventApplyFocusSnapItemAttr,
          "standard",
          null,
          null
        );
        return;
      }

      // eight
      if (targetPosIndex == "eight") {
        touchEventVerticalMovementHelper["up"]["bottom"][targetPosIndex](
          currentFocusedSnapItem,
          touchEventApplyFocusSnapItemAttr,
          "mobile-one-last",
          null,
          null
        );
        return;
      }

      // nine
      if (targetPosIndex == "nine") {
        touchEventVerticalMovementHelper["up"]["bottom"][targetPosIndex](
          currentFocusedSnapItem,
          touchEventApplyFocusSnapItemAttr,
          "mobile-one-first",
          null,
          null
        );
        return;
      }

      // default action
      touchEventMovingUpHelper(currentFocusedSnapItem);
      document.getElementById("currentFocused").focus();
    }
    // touchend clientRect.y is greater than touchstart clientRect.y going down
    if (
      event.target.getBoundingClientRect().y > objOfTouchStartValues.clientRectY
    ) {
      console.log("scrolling down");

      touchEventChangeCurrentSnapItemAttr(currentFocusedSnapItem);

      // one
      if (targetPosIndex == "one") {
        touchEventVerticalMovementHelper["down"]["top"][targetPosIndex](
          currentFocusedSnapItem,
          touchEventApplyFocusSnapItemAttr,
          "standard",
          null,
          null
        );
        return;
      }

      // two
      if (targetPosIndex == "two") {
        touchEventVerticalMovementHelper["down"]["top"][targetPosIndex](
          currentFocusedSnapItem,
          touchEventApplyFocusSnapItemAttr,
          "mobile-one-last",
          null,
          null
        );
        return;
      }

      // nine
      if (targetPosIndex == "nine") {
        touchEventVerticalMovementHelper["down"]["bottom"][targetPosIndex](
          currentFocusedSnapItem,
          touchEventApplyFocusSnapItemAttr,
          "mobile-nine-first",
          null,
          null
        );
        return;
      }

      // default action
      touchEventMovingDownHelper(currentFocusedSnapItem);
      document.getElementById("currentFocused").focus();
    }
    console.log("end", event.target.getBoundingClientRect().y);
    console.log("end", event.changedTouches[0].screenY);
  }, 500);
}

/**
 * scrolling up helper touch event
 * **/

function touchEventMovingUpHelper(target) {
  const nextSnapItem = target.nextElementSibling;
  // set tabindex to "0"
  nextSnapItem.setAttribute("tabindex", "0");
  // aria-hidden "false"
  nextSnapItem.setAttribute("aria-hidden", "false");
  // add id attribute "currentFocused"
  nextSnapItem.setAttribute("id", "currentFocused");
}

/**
 * scrolling down helper touch event
 * **/

function touchEventMovingDownHelper(target) {
  const previousSnapItem = target.previousElementSibling;
  // set tabindex to "0"
  previousSnapItem.setAttribute("tabindex", "0");
  // aria-hidden "false"
  previousSnapItem.setAttribute("aria-hidden", "false");
  // add id attribute "currentFocused"
  previousSnapItem.setAttribute("id", "currentFocused");
}

/**
 * change current snap item attr touch event
 * **/

function touchEventChangeCurrentSnapItemAttr(target) {
  // set tabindex to "-1"
  target.setAttribute("tabindex", "-1");
  // remove id attribute
  target.removeAttribute("id");
  // aria-hidden "true"
  target.setAttribute("aria-hidden", "true");
}

/**
 * apply focus snap item attr touch event
 * **/

function touchEventApplyFocusSnapItemAttr(target) {
  // set tabindex to "0"
  target.setAttribute("tabindex", "0");
  // aria-hidden "false"
  target.setAttribute("id", "currentFocused");
  // add id attribute "currentFocused"
  target.setAttribute("aria-hidden", "false");
}
