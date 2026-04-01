"use client";

import React from "react";

const Skills = () => {
  return (
    <section id="skills-subsection" className="skills container">
      <h2 className="section-heading display-6">Skills</h2>

      <div className="skills-grid">

        {/* Frontend Engineering */}
        <div className="skill-card">
          <p className="subheading_text">Frontend Engineering</p>
          <ul className="skills-icons">
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
              <span>React</span>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" />
              <span>Next.js</span>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" />
              <span>TypeScript</span>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" />
              <span>HTML</span>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" />
              <span>CSS</span>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" alt="Framer Motion" />
              <span>Framer Motion</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/TanStack/query/main/media/logo.svg"
                alt="React Query"
              />
              <span>React Query</span>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" alt="Redux" />
              <span>Redux</span>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
              <span>Tailwind CSS</span>
            </li>
          </ul>
        </div>

        {/* Backend & AI */}
        <div className="skill-card">
          <p className="subheading_text">Backend & AI</p>
          <ul className="skills-icons">
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" />
              <span>Java</span>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring Boot" />
              <span>Spring Boot</span>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" />
              <span>Node.js</span>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express" />
              <span>Express</span>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" alt="GraphQL" />
              <span>GraphQL</span>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" />
              <span>Python</span>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" alt="FastAPI" />
              <span>FastAPI</span>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/langgraph.svg"
                alt="LangGraph"
              />
              <span>LangGraph</span>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" alt="Kafka" />
              <span>Kafka</span>
            </li>
          </ul>
        </div>

        {/* Data, Infrastructure & Cloud */}
        <div className="skill-card">
          <p className="subheading_text">Data, Infrastructure & Cloud</p>
          <ul className="skills-icons">
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
              <span>PostgreSQL</span>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" />
              <span>MySQL</span>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
              <span>MongoDB</span>
            </li>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" />
              <span>AWS</span>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" />
              <span>Docker</span>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" />
              <span>GCP</span>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" alt="Redis" />
              <span>Redis</span>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" alt="Prisma" />
              <span>Prisma</span>
            </li>
            <li>
              <span className="skill-icon" aria-hidden>
                🔄
              </span>
              <span>CI/CD (GitHub Actions)</span>
            </li>
          </ul>
        </div>

        {/* Engineering Practices */}
        <div className="skill-card">
          <p className="subheading_text">Engineering Practices</p>
          <ul className="skills-icons">
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" />
              <span>Git</span>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" />
              <span>GitHub</span>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" alt="Jest" />
              <span>Jest</span>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg" alt="JUnit" />
              <span>JUnit</span>
            </li>
            <li>
              <span className="skill-icon">🧠</span>
              <span>System Design</span>
            </li>
            <li>
              <span className="skill-icon">📐</span>
              <span>Data Structures & Algorithms</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;
