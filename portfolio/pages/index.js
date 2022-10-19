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
import { useMediaQuery } from "../utils/Helpers";

export default function Home({ children, ...props }) {
  const isMobile = useMediaQuery("max", 375);
  React.useEffect(() => {
    const introCarouselParent = document.getElementById(
      "intro-carousel-component-parent"
    );
    const childrenElements = [...introCarouselParent.children];
    console.log(introCarouselParent);
    console.log(childrenElements);
    introCarouselParent.getBoundingClientRect().width <= 375
      ? observeIntroCarouselContainer(introCarouselParent, childrenElements)
      : null;
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
      {isMobile ? <MobileMenu /> : null}
      {/* footer */}
      <Footer />
    </React.Fragment>
  );
}
