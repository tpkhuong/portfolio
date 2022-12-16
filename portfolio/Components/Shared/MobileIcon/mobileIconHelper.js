export function animateMobileIcon(event) {
  // selector modal wrapper element
  const modalWrapperElement = document.getElementById("mobile-menu-selector");

  // event.target.closest("BUTTON").getAttribute("data-isclicked") == "false" ||
  // event.target.closest("BUTTON").getAttribute("data-isclicked") === ""
  //   ? (event.target.closest("BUTTON").setAttribute("data-isclicked", "true"),
  //     event.target
  //       .closest("BUTTON")
  //       .setAttribute("aria-label", "close mobile navigation menu"),
  //     setTimeout(() => {
  //       modalWrapperElement.setAttribute("data-showmenu", "true");
  //     }, 500) )
  //   : (event.target.closest("BUTTON").setAttribute("data-isclicked", "false"),
  //     event.target
  //       .closest("BUTTON")
  //       .setAttribute("aria-label", "open mobile navigation menu"),
  //     setTimeout(() => {
  //       modalWrapperElement.setAttribute("data-showmenu", "false");
  //     }, 500));

  if (
    event.target.closest("BUTTON").getAttribute("data-isclicked") == "false" ||
    event.target.closest("BUTTON").getAttribute("data-isclicked") === ""
  ) {
    event.target.closest("BUTTON").setAttribute("data-isclicked", "true");

    event.target
      .closest("BUTTON")
      .setAttribute("aria-label", "close mobile navigation menu");

    setTimeout(() => {
      document
        .getElementById("main-footer")
        .setAttribute("data-iszoomed", "true");

      modalWrapperElement.setAttribute("data-showmenu", "true");
    }, 500);
  } else {
    event.target.closest("BUTTON").setAttribute("data-isclicked", "false");

    event.target
      .closest("BUTTON")
      .setAttribute("aria-label", "open mobile navigation menu");

    setTimeout(() => {
      document
        .getElementById("main-footer")
        .setAttribute("data-iszoomed", "false");

      modalWrapperElement.setAttribute("data-showmenu", "false");
    }, 500);
  }
}
