import React from "react";
import Link from "next/link";
import LogoNavStyles from "./LogoNavBar.module.css";
import MobileIcon from "../MobileIcon";
import FullNavMenu from "../FullNavMenu";
import { useMediaQuery } from "../../../utils/Helpers";

export default function LogoNavbarContainer({ children, ...props }) {
  const isDesktop = useMediaQuery("min", 1440);
  return (
    <div className={LogoNavStyles[`logo-nav-container`]}>
      {/* display flex */}
      {/* logo */}
      <Link href="/">
        <a className={LogoNavStyles[`logo-text`]}>toan_khuong</a>
      </Link>
      {/* full nav bar */}
      {isDesktop ? <FullNavMenu /> : null}
      {/* mobile icon */}
      <MobileIcon />
    </div>
  );
}
