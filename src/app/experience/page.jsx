// src/app/experience/page.jsx

import Experience from "../components/Experience";

export const metadata = {
  title: "Education & Work",
  description:
    "Work experience: Software Engineer at Virginia Tech, Full Stack Intern at Bunchful, Software Engineer at Virtusa. M.Eng. Computer Science, Virginia Tech.",
};

const ExperiencePage = () => {
  return (
    <>
      <Experience />
    </>
  );
};

export default ExperiencePage;