import React from "react";
import Link from "next/link";
import LogoNavStyles from "./LogoNavBar.module.css";
import MobileIcon from "../MobileIcon";
import FullNavMenu from "../FullNavMenu";
// import { useMediaQuery } from "../../../utils/Helpers";

export default function LogoNavbarContainer({ children, pageName }) {
  // const isDesktop = useMediaQuery("min", 1440);
  return (
    <div id="top-of-screen" className={LogoNavStyles[`logo-nav-container`]}>
      {/* display flex */}
      {/* logo */}
      <Link href="/">
        <a className={LogoNavStyles[`logo-text`]}>toan_khuong</a>
      </Link>
      {/* full nav bar */}
      <FullNavMenu currentPage={pageName} />
      {/* {isDesktop ? <FullNavMenu currentPage={pageName} /> : null} */}
      {/* mobile icon */}
      <MobileIcon />
    </div>
  );
}
