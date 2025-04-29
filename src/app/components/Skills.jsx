"use client";

import React from "react";

const Skills = () => {
  return (
    <section id="skills-subsection" className="skills container">
      <h2 className="section-heading display-6">Skills</h2>

      <div className="skills-grid">
        {/* Programming Languages */}
        <div className="skill-card">
          <h5>Programming Languages</h5>
          <ul className="skills-icons">
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" /><span>Java</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" /><span>Python</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" /><span>JavaScript</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" /><span>TypeScript</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt="C" /><span>C</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" alt="Kotlin" /><span>Kotlin</span></li>
          </ul>
        </div>

        {/* Frontend Development */}
        <div className="skill-card">
          <h5>Frontend Development</h5>
          <ul className="skills-icons">
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" /><span>React</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" /><span>HTML5</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" /><span>CSS3</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" /><span>Bootstrap</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" alt="Material UI" /><span>Material UI</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg" alt="React Bootstrap" /><span>React Bootstrap</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg" alt="React Router" /><span>React Router DOM</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg" alt="jQuery" /><span>jQuery</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original-wordmark.svg" alt="Framer Motion" /><span>Framer Motion</span></li>
          </ul>
        </div>

        {/* Backend & Frameworks */}
        <div className="skill-card">
          <h5>Backend & Frameworks</h5>
          <ul className="skills-icons">
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" /><span>Node.js</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" alt="Express.js" /><span>Express.js</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" alt="Django" /><span>Django</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" alt="Axios" /><span>Axios</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-plain.svg" alt="JSON" /><span>JSON</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tomcat/tomcat-original-wordmark.svg" alt="Apache Tomcat" /><span>Apache Tomcat</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" /><span>Next.js</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" alt="GraphQL" /><span>GraphQL</span></li>
          </ul>
        </div>

        {/* Databases & Cloud */}
        <div className="skill-card">
          <h5>Databases & Cloud</h5>
          <ul className="skills-icons">
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" alt="Firebase" /><span>Firebase</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" /><span>MySQL</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" /><span>PostgreSQL</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" /><span>MongoDB</span></li>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" /><span>AWS</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" alt="GCP" /><span>Google Cloud</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" /><span>Docker</span></li>
          </ul>
        </div>

        {/* Tools & Testing */}
        <div className="skill-card">
          <h5>Tools & Testing</h5>
          <ul className="skills-icons">
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg" alt="JUnit" /><span>JUnit</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" alt="Jest" /><span>Jest</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" /><span>Git</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" /><span>GitHub</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" alt="Jira" /><span>Jira</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" /><span>Figma</span></li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original-wordmark.svg" alt="Eclipse IDE" /><span>Eclipse IDE</span></li>
            <li><img src="https://testing-library.com/img/octopus-64x64.png" alt="React Testing Library" /><span>React Testing Library</span></li>
          </ul>
        </div>

        {/* Other Concepts */}
        <div className="skill-card">
          <h5>Other Concepts</h5>
          <ul className="skills-icons">
            <li><span className="skill-icon">⚙️</span><span>Data Structures & Algorithms</span></li>
            <li><span className="skill-icon">📘</span><span>Object-Oriented Programming</span></li>
            <li><span className="skill-icon">🌍</span><span>Web Development</span></li>
            <li><span className="skill-icon">☁️</span><span>Cloud Concepts</span></li>
            <li><span className="skill-icon">🧠</span><span>System Design</span></li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;
