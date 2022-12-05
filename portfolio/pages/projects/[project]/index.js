import React from "react";
import SingleProjectStyles from "../../../styles/SingleProject.module.css";
import { server } from "../../../config/index";
import axios from "axios";

export default function SingleProject({ children, data }) {
  console.log(data);
  return (
    <React.Fragment>
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
