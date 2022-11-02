import React from "react";
import Head from "next/head";
import HomeStyles from "../styles/Home.module.css";
import LogoNavbarContainer from "../Components/Shared/LogoNavbar/index";
import MobileMenu from "../Components/Shared/MobileMenu";
import Intro from "../Components/Home/Intro";
import Carousel from "../Components/Home/Carousel";
import Main from "../Components/Shared/Main";
import Footer from "../Components/Shared/Footer";
import { observeIntroCarouselContainer } from "../utils/Helpers";

export default function Home({ children, ...props }) {
  React.useEffect(() => {
    // local storage
    const dataFromStorage = !localStorage.getItem("cachedObserverValues")
      ? null
      : JSON.parse(localStorage.getItem("cachedObserverValues"));

    const dataObj = dataFromStorage
      ? dataFromStorage
      : { resizeIndicator: null };

    const introCarouselParent = document.getElementById(
      "intro-carousel-component-parent"
    );
    const childrenElements = [...introCarouselParent.children];

    if (window.innerWidth <= 375) {
      observeIntroCarouselContainer(introCarouselParent, childrenElements);
    }

    /**
     * Resize Observer
     * **/

    const resizeIntroCarousel = new ResizeObserver((entries) => {
      if (window.innerWidth <= 375 && dataObj.resizeIndicator == "mobile") {
        console.log("return mobile");
        return;
      }
      if (window.innerWidth >= 1440 && dataObj.resizeIndicator == "desktop") {
        console.log("return desktop");
        return;
      }
      console.log(entries[0].contentRect.width);
      console.log(window.innerWidth);
      if (window.innerWidth <= 375) {
        if (!dataObj.resizeIndicator) {
          console.log("mobile: resize is null");
          // observeIntroCarouselContainer(introCarouselParent, childrenElements);
          dataObj.resizeIndicator = "mobile";
          localStorage.setItem("cachedObserverValues", JSON.stringify(dataObj));
          return;
        }
        if (dataObj.resizeIndicator == "desktop") {
          console.log("mobile: resize is desktop");
          observeIntroCarouselContainer(introCarouselParent, childrenElements);
          dataObj.resizeIndicator = "mobile";
          localStorage.setItem("cachedObserverValues", JSON.stringify(dataObj));
          return;
        }
      }
      if (window.innerWidth >= 1440) {
        if (!dataObj.resizeIndicator) {
          console.log("desktop: resize is null");
          // observeIntroCarouselContainer(
          //   introCarouselParent,
          //   childrenElements,
          //   true
          // );
          dataObj.resizeIndicator = "desktop";
          localStorage.setItem("cachedObserverValues", JSON.stringify(dataObj));
          return;
        }
        if (dataObj.resizeIndicator == "mobile") {
          console.log("desktop: resize is desktop");
          observeIntroCarouselContainer(
            introCarouselParent,
            childrenElements,
            true
          );
          dataObj.resizeIndicator = "desktop";
          localStorage.setItem("cachedObserverValues", JSON.stringify(dataObj));
          return;
        }
      }
    });

    resizeIntroCarousel.observe(introCarouselParent);

    // introCarouselParent.getBoundingClientRect().width <= 375
    //   ? observeIntroCarouselContainer(introCarouselParent, childrenElements)
    //   : null;
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>Toan Khuong</title>
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>
      <a href="#main-content" className="skip-link">
        Skip to Main Content
      </a>
      <header className={HomeStyles[`header`]} role="banner">
        {/* Logo nav container */}
        <LogoNavbarContainer pageName="home" />
      </header>
      <Main>
        <div
          id="intro-carousel-component-parent"
          className={HomeStyles[`intro-carousel-container`]}
        >
          <Intro />
          <Carousel />
        </div>
      </Main>
      <MobileMenu />
      {/* footer */}
      <Footer />
    </React.Fragment>
  );
}
