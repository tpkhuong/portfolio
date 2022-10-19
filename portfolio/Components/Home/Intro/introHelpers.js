export function swipeLeftBtn(event) {
  event.target.closest("BUTTON").getAttribute("data-introbtnclicked") == "false"
    ? event.target
        .closest("BUTTON")
        .setAttribute("data-introbtnclicked", "true")
    : event.target
        .closest("BUTTON")
        .setAttribute("data-introbtnclicked", "false");
  // select intro-snap-item then select parent element
  const introSnapElement = document.getElementById("intro-snap-item");
  const carouselBtnElement = document.getElementById("show-intro");
  event.target.closest("BUTTON").getAttribute("data-introbtnclicked") == "true"
    ? setTimeout(() => {
        introSnapElement.parentElement.scrollBy(5, 0);
      }, 350)
    : null;
  carouselBtnElement.getAttribute("data-carouselbtnclicked") == "true"
    ? carouselBtnElement.setAttribute("data-carouselbtnclicked", "false")
    : null;
}
