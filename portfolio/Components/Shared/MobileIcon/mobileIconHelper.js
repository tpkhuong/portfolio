export function animateMobileIcon(event) {
  // selector modal wrapper element
  const modalWrapperElement = document.getElementById("mobile-menu-selector");

  event.target.closest("BUTTON").getAttribute("data-isclicked") == "false" ||
  event.target.closest("BUTTON").getAttribute("data-isclicked") === ""
    ? (event.target.closest("BUTTON").setAttribute("data-isclicked", "true"),
      event.target
        .closest("BUTTON")
        .setAttribute("aria-label", "close mobile navigation menu"),
      setTimeout(() => {
        modalWrapperElement.setAttribute("data-showmenu", "true");
      }, 500))
    : (event.target.closest("BUTTON").setAttribute("data-isclicked", "false"),
      event.target
        .closest("BUTTON")
        .setAttribute("aria-label", "open mobile navigation menu"),
      setTimeout(() => {
        modalWrapperElement.setAttribute("data-showmenu", "false");
      }, 500));
}
