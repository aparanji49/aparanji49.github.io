// src/app/projects/page.jsx

import Projects from "../components/Projects";

export const metadata = {
  title: "Projects",
  description:
    "Portfolio projects: Lifeboard AI scheduling (LangGraph, Next.js), cloud modernization, URL safety ML, and full-stack web applications.",
};

const ProjectsPage = () => {
  return (
    <>
      <Projects />
    </>
  );
};

export default ProjectsPage;