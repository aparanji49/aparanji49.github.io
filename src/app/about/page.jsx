// src/app/about/page.jsx

import About from "../components/About";

export const metadata = {
  title: "About",
  description:
    "Full-stack software engineer at Virginia Tech: Next.js peer-evaluation analytics, Kafka notifications, FastAPI LLM pipelines, Spring Boot microservices, and M.Eng. CS from Virginia Tech.",
};

const AboutPage = () => {
  return (
    <>
      {/* Designed & Developed by Sai Aparanji Nemmani – © 2025 */}
      <About />
    </>
  );
};

export default AboutPage;
