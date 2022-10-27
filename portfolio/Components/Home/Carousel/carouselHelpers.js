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
    const windowWidth = window.innerWidth;
    const currentFocusedElement = document.getElementById("currentFocused");
    previousSnapSibling(currentFocusedElement, windowWidth);
    setTimeout(() => {
      event.target.closest("BUTTON").focus();
    }, 50);
  }
}

export function clickNextSnapItem(event) {
  // find snap item with tabindex === "0"
  if (event.target.closest("BUTTON")) {
    console.log("next btn");
    const windowWidth = window.innerWidth;
    const currentFocusedItem = document.getElementById("currentFocused");
    nextSnapSibling(currentFocusedItem, windowWidth);
    setTimeout(() => {
      event.target.closest("BUTTON").focus();
    }, 50);
  }
}

// keyboard

const methodsForKeyboardScroll = {
  // up arrow
  ArrowUp: (event, element, width) => {
    event.preventDefault();
    previousSnapSibling(element, width);
    console.log("up");
  },
  // left arrow
  ArrowLeft: (event, element, width) => {
    event.preventDefault();
    previousSnapSibling(element, width);
    console.log("left");
  },
  // down arrow
  ArrowDown: (event, element, width) => {
    event.preventDefault();
    nextSnapSibling(element, width);
    console.log("down");
  },
  // right arrow
  ArrowRight: (event, element, width) => {
    event.preventDefault();
    nextSnapSibling(element, width);
    console.log("right");
  },
  // home
  Home: (event, element, width) => {
    event.preventDefault();

    console.log("home");
  },
  // end
  End: (event, element, width) => {
    event.preventDefault();

    console.log("end");
  },
  // page up
  PageUp: (event, element, width) => {
    event.preventDefault();

    console.log("up");
  },
  // page down
  PageDown: (event, element, width) => {
    event.preventDefault();

    console.log("down");
  },
};

export function keyboardScrollThroughSnapItems(event) {
  // event.code
  const windowWidth = window.innerWidth;
  // pass in event and element to methodsForKeyboardScroll[key]()
  // console.log(event.target.closest("div[aria-roledescription='slide']"));
  const currentFocusedSnapItem = document.getElementById("currentFocused");
  // if (event.target.closest("DIV") && event.target.closest("DIV").getAttribute("aria-roledescription") == "slide") {
  // }
  if (
    event.code == "Space" &&
    document.activeElement == currentFocusedSnapItem
  ) {
    event.preventDefault();
  }
  if (methodsForKeyboardScroll[event.code]) {
    methodsForKeyboardScroll[event.code](
      event,
      currentFocusedSnapItem,
      windowWidth
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

// intersection observer

/**
 * mobile
 * **/

// use getElementById in .useEffect() to select snap items container and its children
// pass those variables to funcs below
export function observeSnapItemsContainerMobile(
  rootElement,
  children,
  callFuncToRenderNewArray
) {
  // offsetTop 2928
  const mobileScrollHelper = {
    top: {
      one: (target, ob) => {
        console.log(target);
        console.log("ob", ob);

        target.nextElementSibling.setAttribute("tabindex", "-1");
        target.nextElementSibling.setAttribute("aria-hidden", "true");
        console.log(target.parentElement.children);
        const parentChildren = [...target.parentElement.children];
        const arr = [...parentChildren];
        const lastItem = arr[arr.length - 1];
        const beforeLastItem = arr.slice(0, -1);
        console.log(lastItem), console.log(beforeLastItem);
        const reorderItems = createNewOrderedArrayIndexOne(
          [lastItem, ...beforeLastItem],
          "1"
        );
        console.log(reorderItems);
        ob.disconnect();

        // callFuncToRenderNewArray(reorderItems);
        callFuncToRenderNewArray((prev) => {
          return {
            ...prev,
            bottomOrTopArray: reorderItems,
            targetElement: "one",
          };
        });
      },
      two: (target, ob) => {
        console.log(target);
        console.log("ob", ob);

        target.previousElementSibling.setAttribute("tabindex", "-1");
        target.previousElementSibling.setAttribute("aria-hidden", "true");
        console.log(target.parentElement.children);
        const parentChildren = [...target.parentElement.children];
        const copyOfArr = [...parentChildren];
        const [firstItem, ...restOfArray] = copyOfArr;
        console.log(firstItem);
        console.log(restOfArray);
        const newOrderedItems = createNewOrderedArrayIndexOne(
          [...restOfArray, firstItem],
          "2"
        );
        console.log(newOrderedItems);
        ob.disconnect();

        // callFuncToRenderNewArray(newOrderedItems);
        callFuncToRenderNewArray((values) => {
          return {
            ...values,
            bottomOrTopArray: newOrderedItems,
            targetElement: "two",
          };
        });
      },
      nine: (target, ob) => {
        console.log(target);
        console.log("ob", ob);

        target.nextElementSibling.setAttribute("tabindex", "-1");
        target.nextElementSibling.setAttribute("aria-hidden", "true");
        console.log(target.parentElement.children);

        const scrollChildren = [...target.parentElement.children];
        const copyOfArray = [...scrollChildren];
        const firstItem = copyOfArray[0];
        const secondItem = copyOfArray[1];
        const restOfItems = copyOfArray.slice(2);
        console.log(firstItem);
        console.log(secondItem);
        console.log(restOfItems);
        const reorderedChildren = createNewOrderedArrayIndexSeven(
          [...restOfItems, firstItem, secondItem],
          "9"
        );
        console.log(reorderedChildren);
        ob.disconnect();

        // callFuncToRenderNewArray(reorderedChildren);
        callFuncToRenderNewArray((values) => {
          return {
            ...values,
            bottomOrTopArray: reorderedChildren,
            targetElement: "nine",
          };
        });
      },
    },
    bottom: {
      one: (target, ob) => {
        console.log(target);
        console.log("ob", ob);
        target.previousElementSibling.setAttribute("tabindex", "-1");
        target.previousElementSibling.setAttribute("aria-hidden", "true");
        console.log(target.parentElement.children);

        const snapItems = [...target.parentElement.children];
        const copyOfSnapItems = [...snapItems];
        const secondToLast = copyOfSnapItems[copyOfSnapItems.length - 2];
        const lastItem = copyOfSnapItems[copyOfSnapItems.length - 1];
        const beforeLastTwo = copyOfSnapItems.slice(0, -2);
        console.log(secondToLast);
        console.log(lastItem);
        console.log(beforeLastTwo);
        const reorderedItems = createNewOrderedArrayIndexOne(
          [secondToLast, lastItem, ...beforeLastTwo],
          "1"
        );
        console.log(reorderedItems);
        ob.disconnect();
        // callFuncToRenderNewArray(reorderedItems);
        callFuncToRenderNewArray((prevValues) => {
          return {
            ...prevValues,
            bottomOrTopArray: reorderedItems,
            targetElement: "one",
          };
        });
      },
      eight: (target, ob) => {
        console.log(target);
        console.log("ob", ob);

        target.nextElementSibling.setAttribute("tabindex", "-1");
        target.nextElementSibling.setAttribute("aria-hidden", "true");
        console.log(target.parentElement.children);

        const snapChildren = [...target.parentElement.children];
        const copyOfSnapChildren = [].concat(snapChildren);
        const lastItem = copyOfSnapChildren[copyOfSnapChildren.length - 1];
        const beforeLastItem = copyOfSnapChildren.slice(0, -1);
        console.log(lastItem);
        console.log(beforeLastItem);
        const reordernSnapItem = createNewOrderedArrayIndexSeven(
          [lastItem, ...beforeLastItem],
          "8"
        );
        console.log(reordernSnapItem);
        ob.disconnect();

        // callFuncToRenderNewArray(reordernSnapItem);
        // debugger;
        callFuncToRenderNewArray((prevValues) => {
          return {
            ...prevValues,
            bottomOrTopArray: reordernSnapItem,
            targetElement: "eight",
          };
        });
      },
      nine: (target, ob) => {
        console.log(target);
        console.log("ob", ob);

        target.previousElementSibling.setAttribute("tabindex", "-1");
        target.previousElementSibling.setAttribute("aria-hidden", "true");
        console.log(target.parentElement.children);

        const parentChildren = [...target.parentElement.children];
        const copyOfArray = parentChildren.slice();
        // get target parent children
        const [firstElement, ...restOfItems] = copyOfArray;
        console.log(firstElement);
        console.log(restOfItems);
        const reorderArray = createNewOrderedArrayIndexSeven(
          [...restOfItems, firstElement],
          "9"
        );
        console.log(reorderArray);
        ob.disconnect();

        // callFuncToRenderNewArray(reorderArray);
        callFuncToRenderNewArray((prevValues) => {
          return {
            ...prevValues,
            bottomOrTopArray: reorderArray,
            targetElement: "nine",
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
      console.log("previous", entry.target.previousElementSibling);
      console.log("next", entry.target.nextElementSibling);
      const targetPosindex = entry.target.getAttribute("data-pos-index");
      console.log(targetPosindex);
      console.log("mobile");
      console.log(entry.target);
      console.log(entry.target.offsetTop);
      // top position 1 element offsetTop is 0
      // top position 2 element offsetTop is 366
      // bottom position 8 element offsetTop is 2562
      // bottom position 9 element offsetTop is 2928
      const previousFocused = document.activeElement;
      console.log("previousFocused", previousFocused);
      console.log(previousFocused == entry.target);
      if (previousFocused == entry.target) {
        console.log("return");
        return;
      }

      /**
       * when we call setSnapItem func which will render carousel component
       * document.activeElement will be the element with id="currentFocused"
       * **/
      /**
       * one solution
       * **/
      // find current focus element using document.activeElement
      // then find the pos index of that focus element
      // then find pos index of intersecting element
      // compare the two
      // if focus element pos index is less than pos index of intersecting element user is scrolling down
      // if focus element pos index is greater pos index of intersecting element user is scrolling up
      /**
       * another solution
       * **/
      // check where the user is by getting offsetTop of snap item
      /**
       * working at top:0,366,732
       * **/
      if (
        targetPosindex == "nine" &&
        entry.target.previousElementSibling == null &&
        previousFocused !== entry.target
      ) {
        console.log("hello, this is nine");
        console.log(
          "document.getElementByIdcurrentFocused.parentElement.children",
          document.getElementById("currentFocused").parentElement.children
        );
        // when target posindex is nine && target.previousElementSibling == null && target.nextElementSibling.getAttribute("data-pos-index") == "one"
        // take elements with posindex of nine and one placed them at end of array
        mobileScrollHelper["top"][targetPosindex](entry.target, observer);
        return;
      }
      // when target posindex is one && target.previousElementSibling == null && target.nextElementSibling.getAttribute("data-pos-index") == "two"
      // take element with posindex of nine and placed it at the beginning of array
      if (
        targetPosindex == "one" &&
        entry.target.previousElementSibling == null &&
        previousFocused !== entry.target
      ) {
        console.log(
          "document.getElementByIdcurrentFocused.parentElement.children",
          document.getElementById("currentFocused").parentElement.children
        );
        mobileScrollHelper["top"][targetPosindex](entry.target, observer);
        return;
      }
      // when target posindex is two && target.previousElementSibling.getAttribute("data-pos-index") == "nine" && target.previousElementSibling.previousElementSibling.getAttritebu("data-pos-index") == "nine"
      // take element with posindex of nine and placed at end of array
      if (targetPosindex == "two" && previousFocused !== entry.target) {
        if (
          entry.target.previousElementSibling.previousElementSibling &&
          entry.target.previousElementSibling.previousElementSibling.getAttribute(
            "data-pos-index"
          ) == "nine"
        ) {
          console.log(
            "document.getElementByIdcurrentFocused.parentElement.children",
            document.getElementById("currentFocused").parentElement.children
          );
          console.log("hello this is two prev is one prev prev is nine");
          console.log(observer);
          mobileScrollHelper["top"][targetPosindex](entry.target, observer);
          return;
        }
      }
      /**
       * working at bottom: 2195,2562,2928
       * **/
      // when target posindex is eight && target.nextElementSibling.getAttribute("data-pos-index") == "nine" && target.nextElementSibling.nextElementSibling.getAttribute("data-pos-index") == "one"
      // take element with posindex of one and placed it at the beginning of array
      if (
        targetPosindex == "eight" &&
        previousFocused.getAttribute("data-pos-index") == "nine"
      ) {
        console.log(
          "document.getElementByIdcurrentFocused.parentElement.children",
          document.getElementById("currentFocused").parentElement.children
        );
        console.log("this is eight bottom");
        mobileScrollHelper["bottom"][targetPosindex](entry.target, observer);
        return;
      }
      // when target posindex is nine && target.nextElementSibling is null && target.previousElementSibling.getAttribute("data-pos-index") == "eight"
      // take element with posindex of one and placed it at the end of array
      if (targetPosindex == "nine" && entry.target.nextElementSibling == null) {
        console.log(
          "document.getElementByIdcurrentFocused.parentElement.children",
          document.getElementById("currentFocused").parentElement.children
        );
        mobileScrollHelper["bottom"][targetPosindex](entry.target, observer);
        return;
      }
      // when target posindex is one && target.nextElementSibling is null && target.previousElementSibling.getAttribute("data-pos-index") == "nine"
      // take elements with posindex of nine and one placed them at beginning of array
      if (targetPosindex == "one" && entry.target.nextElementSibling == null) {
        console.log(
          "document.getElementByIdcurrentFocused.parentElement.children",
          document.getElementById("currentFocused").parentElement.children
        );
        mobileScrollHelper["bottom"][targetPosindex](entry.target, observer);
        return;
      }
      observerHelper(entry.target);
      //   if (targetPosindex != "one" && targetPosindex != "nine") {
      //     observerHelper(entry.target);
      //     if (
      //       targetPosindex == "eight" &&
      //       document.activeElement.getAttribute("data-pos-index") == "nine"
      //     ) {
      //       console.log("hello this is eight last focus was nine");
      //     }
      //     if (
      //       targetPosindex == "two" &&
      //       document.activeElement.getAttribute("data-pos-index") == "one"
      //     ) {
      //       console.log("hello this is two last focus was one");
      //     }
      //     return;
      //   }
      //   // if entry target pos is one or nine and we're at the bottom of scroll
      //   if (targetPosindex == "nine" || targetPosindex == "one") {
      //     if (entry.target.offsetTop == 2928) {
      //       mobileScrollHelper["bottom"][targetPosindex](entry.target);
      //       return;
      //     }
      //     // if entry target pos is one or nine and we're at the top of scroll
      //     // if (entry.target.offsetTop == 0) {
      //     //   mobileScrollHelper["top"][targetPosindex](entry.target);
      //     //   return;
      //     // }
      //   }
    });
  }
  // options
  const mobileOptions = {
    root: rootElement,
    //
    threshold: 1,
    rootMargin: "0px",
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

/**
 * working with element at index 1 or 7
 * **/

function createNewOrderedArrayIndexOne(array, quantity) {
  return array.map(function createNewOrderedList(element, index) {
    /** 
     * classText,
    posIndex,
    spanText,
    tabindex,
    ariaHidden,
    ariaLabel,
     * **/
    const objOfValues =
      index == 1
        ? {
            classText: "snap-item",
            posIndex: element.getAttribute("data-pos-index"),
            spanText: element.firstElementChild.innerText,
            tabindex: "0",
            ariaHidden: "false",
            ariaLabel: `${quantity} of 9`,
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
  });
}
function createNewOrderedArrayIndexSeven(array, quantity) {
  return array.map(function createNewOrderedList(element, index) {
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
            ariaLabel: `${quantity} of 9`,
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
  });
}

/**
 * desktop
 * **/

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
    rootMargin: "-216px 0px -216px 0px",
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
  // when we rerender our items the target element tabindex will be "0"
  // we are calling .focus() in our React.useEffect()
  const targetTabindex = target.getAttribute("tabindex");
  const elementID = target.getAttribute("id");
  const elementAriaHidden = target.getAttribute("aria-hidden");
  if (targetTabindex === "0") {
    return;
  }

  !elementID ? target.setAttribute("id", "currentFocused") : null;

  setTimeout(() => {
    elementAriaHidden == "true"
      ? target.setAttribute("aria-hidden", "false")
      : null;
  }, 150);

  // if current target element tabindex == "-1" assign "0" to tabindex of target
  const beforeElement = target.previousElementSibling;
  const afterElement = target.nextElementSibling;
  targetTabindex == "-1" ? target.setAttribute("tabindex", "0") : null;

  if (beforeElement) {
    beforeElement.getAttribute("tabindex") === "0"
      ? beforeElement.setAttribute("tabindex", "-1")
      : null;

    beforeElement.getAttribute("id") == "currentFocused"
      ? beforeElement.setAttribute("id", "")
      : null;

    beforeElement.getAttribute("aria-hidden") == "false"
      ? beforeElement.setAttribute("aria-hidden", "true")
      : null;
  }

  if (afterElement) {
    afterElement.getAttribute("tabindex") === "0"
      ? afterElement.setAttribute("tabindex", "-1")
      : null;

    afterElement.getAttribute("id") == "currentFocused"
      ? afterElement.setAttribute("id", "")
      : null;

    afterElement.getAttribute("aria-hidden") == "false"
      ? afterElement.setAttribute("aria-hidden", "true")
      : null;
  }
  target.focus();
}

function mobileReorderedSnapItems() {}

function carouselMobile() {
  // we can just call focus on prev/next sibling
}

function carouselDesktop() {}
