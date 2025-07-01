// "use client";

// import React from "react";

// const About = () => {
//   return (

//     <section id="about-subsection" className="container-sm">
//  {/* Designed & Developed by Sai Aparanji Nemmani – © 2025 */}
//      <div className="about container-sm-6 lg-8 container-md-8">
//         <h2 className="section-heading display-6">About Me</h2>

//         <div className="about_text card-box">
//           <p className="intro_text">
//             I'm a <strong>Master’s student in Computer Science</strong> at <strong>Virginia Tech</strong>, currently in my <strong>final semester</strong> and <strong>graduating in May 2025</strong>. I will be <strong>available to start full-time roles from July 2025</strong>.
//           </p>
//           <p className="intro_text">
//             I'm passionate about <strong>building intuitive and impactful web applications</strong>. I enjoy <strong>bringing ideas to life</strong> and crafting digital experiences that are <strong>functional</strong>, <strong>responsive</strong>, and <strong>user-centric</strong>.
//           </p>
//           <p className="intro_text">
//             On the backend, I've created APIs using <strong>Java with Spring Boot</strong>, <strong>Firebase Functions</strong>, <strong>Django with Python</strong>, and currently exploring <strong>FastAPI with Python</strong>.
//           </p>
//           <p className="intro_text">
//             For frontend, I start with <strong>UI design</strong> and build <strong>responsive static pages</strong> using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JS</strong>. I'm proficient in <strong>React</strong>, <strong>Bootstrap</strong>, <strong>Framer Motion</strong>, focusing on <strong>accessibility</strong> and <strong>responsive design</strong>.
//           </p>
//           <p className="intro_text">
//             I'm comfortable with <strong>MySQL</strong>, <strong>PostgreSQL</strong>, and <strong>MongoDB</strong>.
//           </p>
//           <p className="intro_text">
//             On the cloud side, I work with <strong>AWS</strong> services (Lambda, API Gateway, EC2, S3), <strong>Azure DevOps CI/CD</strong>, and <strong>GCP deployments</strong>. Also used <strong>Docker Compose</strong> for containerization.
//           </p>
//           <p className="intro_text">
//             Professional experience at <strong>Virtusa</strong> (Software Engineer) and <strong>Bunchful</strong> (Web Developer Intern) — frontend, backend, feature building, and client interactions.
//           </p>
//           <p className="intro_text">
//             Exploring <strong>AI/ML</strong> space through courses and projects like <strong>LangChain</strong> and <strong>OpenAI APIs</strong>.
//           </p>
//           <p className="intro_text">
//             I'm an <strong>Oracle Certified Associate, Java SE 8 Programmer</strong> (Feb 2020).
//             <a className="body_links" href="https://drive.google.com/file/d/1rsk6J09d8R2gA_lGgQoQFKGFQV_GK5eN/view?usp=sharing" target="_blank" rel="noopener noreferrer">
//               View certification here
//             </a>.
//           </p>
//           <p className="intro_text">
//             I love <strong>learning</strong>, <strong>understanding systems deeply</strong>, and building better solutions.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
"use client";

import React from "react";
import Image from "next/image";


const About = () => {
  return (
    <section id="about-subsection" className="container-sm space-y-10">
      {/* Designed & Developed by Sai Aparanji Nemmani – © 2025 */}

      <div className="about container-sm-6 lg-8 container-md-8">
        <h2 className="section-heading display-6">About Me</h2>

        {/* Technical Profile Card */}
        <div className="about_text card-box">
          <p className="intro_text">
            I’m a <strong>recent Computer Science graduate</strong> from <strong>Virginia Tech</strong> (May 2025) with a passion for building elegant, scalable, and human-centered web applications.
          </p>
          <p className="intro_text">
            I specialize in <strong>Full Stack Development</strong> and <strong>Cloud Engineering</strong> — creating responsive UIs with <strong>React</strong>, <strong>HTML/CSS</strong>, <strong>JavaScript</strong>, <strong>Framer Motion</strong>, and <strong>Bootstrap</strong>, while designing performant backend APIs with <strong>Spring Boot</strong>, <strong>Firebase Functions</strong>, and <strong>Django</strong>. I’m currently exploring <strong>FastAPI</strong> with Python.
          </p>
          <p className="intro_text">
            I'm skilled with <strong>MySQL</strong>, <strong>PostgreSQL</strong>, <strong>MongoDB</strong>, and deploy robust cloud-based apps using <strong>AWS (Lambda, API Gateway, EC2, S3)</strong>, <strong>Azure DevOps</strong>, and <strong>GCP</strong>. I also use <strong>Docker Compose</strong> for containerization and local orchestration.
          </p>
          <p className="intro_text">
            I bring hands-on industry experience through roles at <strong>Virtusa</strong> (Software Engineer) and <strong>Bunchful</strong> (Web Developer Intern), delivering full-stack features and collaborating directly with clients.
          </p>
          <p className="intro_text">
            I'm currently exploring the <strong>AI/ML landscape</strong> through personal projects using <strong>LangChain</strong> and <strong>OpenAI APIs</strong>.
          </p>
          <p className="intro_text">
            I’m also an <strong>Oracle Certified Associate – Java SE 8 Programmer</strong> (Feb 2020).
            <a
              className="body_links"
              href="https://drive.google.com/file/d/1rsk6J09d8R2gA_lGgQoQFKGFQV_GK5eN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >View certification here</a>
            .
          </p>
          <p className="intro_text">
            I'm a fast learner who thrives on <strong>understanding systems deeply</strong> and building <strong>solutions that matter</strong>.
          </p>
        </div>

        {/* Personal Hobbies Card */}
        {/* <div className="about_text card-box mt-3">
          <h3 className="section-subheading mb-2">Beyond Code</h3>
          <p className="intro_text">
            When I’m not coding, I recharge through <strong>singing</strong>, <strong>painting</strong>, and <strong>sketching</strong>. I find that creativity in one area fuels innovation in another.
          </p>
          <div className="hobby-gallery grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div className="hobby-card">
              <Image
                className="rounded-lg shadow-md"
                src="/images/singing.png"
                alt="Singing"
                height={100}
              />
            </div>
            <div className="hobby-card">
              <Image
                alt="Painting"
                className="rounded-lg shadow-md"
                src="/images/painting.png"
                height={100}
              />
            </div>
            <div className="hobby-card">
              <Image
                src="/images/sketching.png"
                alt="Sketching"
                className="rounded-lg shadow-md"
                height={100}
              />
            </div>
          </div>
        </div> */}
        {/* Personal Hobbies Card */}
<div className="about_text card-box mt-3">
  <h3 className="section-subheading mb-2">Beyond Code</h3>
  <p className="intro_text">
    When I’m not coding, I recharge through <strong>singing</strong>, <strong>painting</strong>, and <strong>sketching</strong>. I find that creativity in one area fuels innovation in another.
  </p>
<div className="hobby-gallery">
    <div className="transform hover:scale-105 transition duration-300 ease-in-out">
      <Image
        className="rounded-lg shadow-md"
        src="/images/singing.png"
        alt="Singing"
        width={100}
        height={100}
      />
    </div>
    <div className="transform hover:scale-105 transition duration-300 ease-in-out">
      <Image
        className="rounded-lg shadow-md"
        src="/images/painting.png"
        alt="Painting"
        width={100}
        height={100}
      />
    </div>
    <div className="transform hover:scale-105 transition duration-300 ease-in-out">
      <Image
        className="rounded-lg shadow-md"
        src="/images/sketching.png"
        alt="Sketching"
        width={100}
        height={100}
      />
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default About;
