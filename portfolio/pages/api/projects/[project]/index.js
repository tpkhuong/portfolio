import data from "../../../../utils/data.json";

export default async function projectHandler(req, res) {
  //   console.log(req.query.project, "req.query");
  //   console.log(data.projects, "data");
  const projects = data.projects;

  res.status(200).json(projects[req.query.project]);
}
