import React from "react";

export function useMediaQuery(minMax, width) {
  const [targetReached, setTargetReached] = React.useState(false);

  const updateTarget = React.useCallback((event) => {
    if (event.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  React.useEffect(() => {
    const media = window.matchMedia(`(${minMax}-width: ${width}px)`);
    // media.addListener(updateTarget);
    media.addEventListener("change", (event) => updateTarget(event));

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    // return () => media.removeListener(updateTarget);
    return () =>
      media.removeEventListener("change", (event) => updateTarget(event));
  }, []);

  return targetReached;
}

// carousel-snap-item
// intro-snap-item

const methodsForObserver = {
  "carousel-snap-item": () => {
    // show-intro
    document
      .getElementById("show-intro")
      .getAttribute("data-carouselbtnclicked") == "true"
      ? document
          .getElementById("show-intro")
          .setAttribute("data-carouselbtnclicked", "false")
      : null;
  },
  "intro-snap-item": () => {
    // show-carousel
    document
      .getElementById("show-carousel")
      .getAttribute("data-introbtnclicked") == "true"
      ? document
          .getElementById("show-carousel")
          .setAttribute("data-introbtnclicked", "false")
      : null;
  },
};

export function observeIntroCarouselContainer(
  rootElement,
  children,
  isDesktop
) {
  // callback
  function changeSwipeBtnsClickedAttr(entries, observer) {
    // loop through entries
    entries.forEach(function observeEachComponent(entry, index) {
      if (!entry.isIntersecting) {
        return;
      }
      // we want to assign "false" to data-carouselbtnclicked and data-introbtnclicked based on entry target
      methodsForObserver[entry.target.getAttribute("id")]();
    });
  }
  // options
  const options = {
    root: rootElement,
    threshold: 0.5,
    rootMargin: "0px",
  };
  // passed into func call/invoke/execute to intersection observer
  const observer = new IntersectionObserver(
    changeSwipeBtnsClickedAttr,
    options
  );
  if (isDesktop) {
    console.log("this is desktop size");
    observer.disconnect();
  }
  // loop through children and observe the element in the children array
  children.forEach(function addObserverToEachChild(element) {
    observer.observe(element);
  });
}
