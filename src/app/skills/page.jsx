// src/app/skills/page.jsx

import Skills from "../components/Skills";

export const metadata = {
  title: "Skills",
  description:
    "Technical skills: Java, Python, JavaScript, React, Next.js, TypeScript, React Query, Spring Boot, Node.js, FastAPI, LangGraph, Kafka, AWS, PostgreSQL, MongoDB, Redis, Prisma, CI/CD, AWS, GCP, Docker.",
};

const SkillsPage = () => {
  return (
    <>
      <Skills />
    </>
  );
};

export default SkillsPage;