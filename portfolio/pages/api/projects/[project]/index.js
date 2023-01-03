// import { projectData } from "../../../../utils/data";

// export default async function projectHandler(req, res) {
//   // console.log(req.query.project, "req.query");
//   // console.log(projectData.projects.first, "data backend");
//   const projects = projectData.projects;

//   console.log(projects[req.query.project], "projects[req.query.project]");

//   res.status(200).json(projects[req.query.project]);
// }

import data from "../../../../utils/data.json";

export default async function projectHandler(req, res) {
  // console.log(req.query.project, "req.query");
  // console.log(projectData.projects.first, "data backend");
  const projects = data.projects;

  console.log(projects[req.query.project], "projects[req.query.project]");

  res.status(200).json(projects[req.query.project]);
}

// [projects] dir

// import { projectData } from "../../../utils/data";

// export default async function projectsHandler(req, res) {
//   console.log(req);
//   res.status(200).json(projectData.projects);
// }
