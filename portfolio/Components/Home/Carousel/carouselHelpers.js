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
  if (event.target.closest("BUTTON")) {
    console.log("prev btn");
  }
}

export function clickNextSnapItem(event) {
  if (event.target.closest("BUTTON")) {
    console.log("next btn");
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
  console.log(event.target.closest("div[aria-roledescription='slide']"));
  // if (event.target.closest("DIV") && event.target.closest("DIV").getAttribute("aria-roledescription") == "slide") {
  //     // methodsForKeyboardScroll[event.code]()
  // }
}

function previousSnapSibling(event, element) {}

function nextSnapSibling(event, element) {}

// intersection observer

// use getElementById in .useEffect() to select snap items container and its children
// pass those variables to funcs below
export function observeSnapItemsContainerMobile(rootElement, children) {
  // callback
  function assignValuesToElementAttrMobile(entries, observer) {
    entries.forEach(function loopThroughItemsMobile(entry) {
      if (!entry.isIntersecting) {
        return;
      }
      console.log("mobile");
      console.log(entry);
    });
  }
  // options
  const mobileOptions = {
    root: rootElement,
    //
    threshold: 0.5,
    rootMargin: "0px 16px 0px 16px",
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

function carouselMobile() {
  // we can just call focus on prev/next sibling
}

function carouselDesktop() {}
