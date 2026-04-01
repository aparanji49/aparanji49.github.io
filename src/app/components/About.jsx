// "use client";

// import React from "react";
// import Image from "next/image";

// const About = () => {
//   return (
//     <>
//     <section id="about-subsection" className="container-sm">
//       {/* Designed & Developed by Sai Aparanji Nemmani – © 2025 */}

//       <div className="about container-sm-6 lg-8 container-md-8">
//         <h2 className="section-heading display-6">About Me</h2>

//         {/* Technical Profile Card */}
//         {/* <div className="about_text card-box">
//           <p className="intro_text">
//             I’m a <strong>recent Computer Science graduate</strong> from <strong>Virginia Tech</strong> (May 2025) with a passion for building elegant, scalable, and human-centered web applications.
//           </p>
//           <p className="intro_text">
//             I specialize in <strong>Full Stack Development</strong> and <strong>Cloud Engineering</strong> — creating responsive UIs with <strong>React</strong>, <strong>HTML/CSS</strong>, <strong>JavaScript</strong>, <strong>Framer Motion</strong>, and <strong>Bootstrap</strong>, while designing performant backend APIs with <strong>Spring Boot</strong>, <strong>Firebase Functions</strong>, and <strong>Django</strong>. I’m currently exploring <strong>FastAPI</strong> with Python.
//           </p>
//           <p className="intro_text">
//             I'm skilled with <strong>MySQL</strong>, <strong>PostgreSQL</strong>, <strong>MongoDB</strong>, and deploy robust cloud-based apps using <strong>AWS (Lambda, API Gateway, EC2, S3)</strong>, <strong>Azure DevOps</strong>, and <strong>GCP</strong>. I also use <strong>Docker Compose</strong> for containerization and local orchestration.
//           </p>
//           <p className="intro_text">
//             I bring hands-on industry experience through roles at <strong>Virtusa</strong> (Software Engineer) and <strong>Bunchful</strong> (Web Developer Intern), delivering full-stack features and collaborating directly with clients.
//           </p>
//           <p className="intro_text">
//             I'm currently exploring the <strong>AI/ML landscape</strong> through personal projects using <strong>LangChain</strong> and <strong>OpenAI APIs</strong>.
//           </p>
//           <p className="intro_text">
//             I’m also an <strong>Oracle Certified Associate – Java SE 8 Programmer</strong> (Feb 2020).
//             <a
//               className="body_links"
//               href="https://drive.google.com/file/d/1rsk6J09d8R2gA_lGgQoQFKGFQV_GK5eN/view?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//             >View certification here</a>
//             .
//           </p>
//           <p className="intro_text">
//             I'm a fast learner who thrives on <strong>understanding systems deeply</strong> and building <strong>solutions that matter</strong>.
//           </p>
//         </div> */}
//         <div className="about_text card-box">
//           <p className="intro_text">
//             I’m a Computer Science graduate from <strong>Virginia Tech</strong>{" "}
//             who builds accessible, scalable web applications end to end.
//           </p>

//           <p className="intro_text">
//             On the frontend I work with <strong>React/Next.js</strong>,{" "}
//             <strong>TypeScript</strong>,<strong> Tailwind</strong>, and{" "}
//             <strong>Framer Motion</strong>. On the backend I use
//             <strong> Java Spring Boot</strong> with{" "}
//             <strong>Hibernate/JPA</strong> and, when it fits,
//             <strong> Node/Express</strong>.
//           </p>

//           <p className="intro_text">
//             I’m comfortable with <strong>MySQL</strong>,{" "}
//             <strong>PostgreSQL</strong>, and
//             <strong> MongoDB</strong>, and I deploy to <strong>AWS</strong>{" "}
//             using
//             <strong> EC2</strong>, <strong>RDS</strong>, <strong>S3</strong>,{" "}
//             <strong>Lambda</strong>,<strong> API Gateway</strong>,{" "}
//             <strong>Docker</strong>, and <strong>CI/CD</strong>.
//           </p>

//           <p className="intro_text">
//             I’ve delivered features in industry settings at{" "}
//             <strong>Virtusa</strong> and
//             <strong> Bunchful</strong>, collaborating from requirements through
//             release. I value typed APIs, readable code, and practical UX.
//           </p>

//           <p className="intro_text">
//             I’m also exploring <strong>GraphQL</strong>,{" "}
//             <strong>React Query</strong>,<strong> Zod</strong>, and AI tooling
//             with <strong>OpenAI</strong> and <strong>LangChain</strong>.
//           </p>

//           <p className="intro_text">
//             <strong>Oracle Certified Associate — Java SE 8</strong> (
//             <a
//               className="body_links"
//               href="https://drive.google.com/file/d/1rsk6J09d8R2gA_lGgQoQFKGFQV_GK5eN/view?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="View Java SE 8 certification"
//             >
//               view certification
//             </a>
//             ).
//           </p>
//         </div>
//         {/* Personal Hobbies Card */}
//         <div className="about_text card-box mt-3">
//           <h3 className="section-subheading mb-2">Beyond Code</h3>
//           <p className="intro_text">
//             When I’m not coding, I recharge through <strong>singing</strong>,{" "}
//             <strong>painting</strong>, and <strong>sketching</strong>. I find
//             that creativity in one area fuels innovation in another.
//           </p>
//           <div className="hobby-gallery">
//             <div className="transform hover:scale-105 transition duration-300 ease-in-out">
//               <Image
//                 className="rounded-lg shadow-md"
//                 src="/images/singing.png"
//                 alt="Singing"
//                 width={100}
//                 height={100}
//               />
//             </div>
//             <div className="transform hover:scale-105 transition duration-300 ease-in-out">
//               <Image
//                 className="rounded-lg shadow-md"
//                 src="/images/painting.png"
//                 alt="Painting"
//                 width={100}
//                 height={100}
//               />
//             </div>
//             <div className="transform hover:scale-105 transition duration-300 ease-in-out">
//               <Image
//                 className="rounded-lg shadow-md"
//                 src="/images/sketching.png"
//                 alt="Sketching"
//                 width={100}
//                 height={100}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//         </>
//   );
// };

// export default About;
"use client";

import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about-subsection" className="container-sm">
      <div className="about container-sm-6 lg-8 container-md-8">
        <h2 className="section-heading display-6">About me</h2>

        <div className="about_text_div about_text card-box">
          <div>
            <p className="intro_text">
              I’m a <strong>full-stack software engineer</strong> with nearly
              four years shipping <strong>production web applications</strong>{" "}
              and <strong>REST APIs</strong>, including work that integrates{" "}
              <strong>LLMs and generative AI</strong> into real products. My
              background spans TypeScript (React/Next.js), Java (Spring Boot), and Node.js backends, alongside SQL/NoSQL architecture, AWS, and automated CI/CD pipelines. I hold
              an <strong>M.Eng. in Computer Science from Virginia Tech</strong>{" "}
              (3.88 GPA) and I’m focused on full-stack roles where I can own features end to end—from UX clarity to scalable
              services and reliable releases.
            </p>
            <p className="intro_text">
              I enjoy turning fuzzy requirements into intuitive flows, debugging
              carefully, and keeping code readable and refactor-friendly. I’m
              usually tinkering with a new framework or API to understand where
              it fits. I’m most interested in working on <strong>high-traffic, production systems</strong> where performance
              and collaboration matter. I’m looking for teams that care about
              shipping software that stays maintainable as it scales.
            </p>
          </div>
          <div className="about_gif">
            <Image
              src="/images/working.gif"
              alt="Working GIF"
              width={200}
              height={200}
              style={{ borderRadius: '50%' }}
            />
          </div>
        </div>

        {/* Beyond code card */}
        <div className="about_text card-box mt-3">
          <h3 className="subheading_text mb-2">Beyond code</h3>
          <p className="intro_text">
            When I’m not coding, I recharge through <strong>singing</strong>,{" "}
            <strong>painting</strong>, and <strong>sketching</strong>. These
            creative outlets help me slow down and think more deliberately,
            which often carries over into how I design interfaces/features and explain my
            work.
          </p>

          <div className="hobby-gallery">
            <Image
              src="/images/singing.png"
              alt="Singing"
              width={50}
              height={50}
            />
            <Image
              src="/images/painting.png"
              alt="Painting"
              width={50}
              height={50}
            />
            <Image
              src="/images/sketching.png"
              alt="Sketching"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
