"use client";

import React from "react";

const About = () => {
  return (
    <section id="about-subsection" className="container-sm">
      <div className="about container-sm-6 lg-8 container-md-8">
        <h2 className="section-heading display-6">About Me</h2>

        <div className="about_text card-box">
          <p className="intro_text">
            I'm a <strong>Master’s student in Computer Science</strong> at <strong>Virginia Tech</strong>, currently in my <strong>final semester</strong> and <strong>graduating in May 2025</strong>. I will be <strong>available to start full-time roles from July 2025</strong>.
          </p>
          <p className="intro_text">
            I'm passionate about <strong>building intuitive and impactful web applications</strong>. I enjoy <strong>bringing ideas to life</strong> and crafting digital experiences that are <strong>functional</strong>, <strong>responsive</strong>, and <strong>user-centric</strong>.
          </p>
          <p className="intro_text">
            On the backend, I've created APIs using <strong>Java with Spring Boot</strong>, <strong>Firebase Functions</strong>, <strong>Django with Python</strong>, and currently exploring <strong>FastAPI with Python</strong>.
          </p>
          <p className="intro_text">
            For frontend, I start with <strong>UI design</strong> and build <strong>responsive static pages</strong> using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JS</strong>. I'm proficient in <strong>React</strong>, <strong>Bootstrap</strong>, <strong>Framer Motion</strong>, focusing on <strong>accessibility</strong> and <strong>responsive design</strong>.
          </p>
          <p className="intro_text">
            I'm comfortable with <strong>MySQL</strong>, <strong>PostgreSQL</strong>, and <strong>MongoDB</strong>.
          </p>
          <p className="intro_text">
            On the cloud side, I work with <strong>AWS</strong> services (Lambda, API Gateway, EC2, S3), <strong>Azure DevOps CI/CD</strong>, and <strong>GCP deployments</strong>. Also used <strong>Docker Compose</strong> for containerization.
          </p>
          <p className="intro_text">
            Professional experience at <strong>Virtusa</strong> (Software Engineer) and <strong>Bunchful</strong> (Web Developer Intern) — frontend, backend, feature building, and client interactions.
          </p>
          <p className="intro_text">
            Exploring <strong>AI/ML</strong> space through courses and projects like <strong>LangChain</strong> and <strong>OpenAI APIs</strong>.
          </p>
          <p className="intro_text">
            I'm an <strong>Oracle Certified Associate, Java SE 8 Programmer</strong> (Feb 2020). {" "}
            <a className="body_links" href="https://drive.google.com/file/d/1rsk6J09d8R2gA_lGgQoQFKGFQV_GK5eN/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              View certification here
            </a>.
          </p>
          <p className="intro_text">
            I love <strong>learning</strong>, <strong>understanding systems deeply</strong>, and building better solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
