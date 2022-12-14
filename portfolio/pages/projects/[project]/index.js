import React from "react";
import Head from "next/head";
import SingleProjectStyles from "../../../styles/SingleProject.module.css";
import LogoNavbarContainer from "../../../Components/Shared/LogoNavbar";
import MobileMenu from "../../../Components/Shared/MobileMenu";
import Main from "../../../Components/Shared/Main";
import Footer from "../../../Components/Shared/Footer";
import { server } from "../../../config/index";
import axios from "axios";

export default function SingleProject({ children, data }) {
  console.log(data);
  return (
    <React.Fragment>
      <Head>
        <title>Project Title</title>
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>
      <a href="#main-content" className="skip-link">
        Skip to Main Content
      </a>
      <LogoNavbarContainer pageName="projects" />
      <header className={SingleProjectStyles[`header`]} role="banner"></header>
      <Main>
        {/* sidebar */}
        {/* three containers */}
        {/* table of content */}
        {/* project links */}
        {/* project workflow */}
        {/* three containers */}
        {/* individual project content */}
        {/* project images/screenshots */}
      </Main>
      <MobileMenu></MobileMenu>
      <Footer></Footer>
      <h2
        className={SingleProjectStyles[`title`]}
      >{`this is single project. Title is ${data.title}`}</h2>
    </React.Fragment>
  );
}

export async function getStaticPaths() {
  const projectPaths = ["first", "second", "third", "fourth", "fifth"];
  const paths = projectPaths.map(function makgeProjectPaths(path) {
    // const [project] = path;
    return {
      params: { project: path },
    };
  });
  console.log(paths, "paths");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const response = await axios(
    `${server}/api/projects/${context.params.project}`
  );
  //   console.log(response, "response");
  const data = response.data;

  return {
    props: { data },
  };
}
