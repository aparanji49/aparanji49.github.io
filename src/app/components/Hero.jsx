// src/app/components/Hero.jsx

"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
// import EmojiCursor from "./EmojiCursor";
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <>
      <section id="intro-subsection" className="container-sm">
        {/* Designed & Developed by Sai Aparanji Nemmani – © 2025 */}

        <div className="main container-sm">
          <div className="main-text container-sm-6">
            <p className="h6">
              Hi!{" "}
              <picture>
                <source
                  srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/512.webp"
                  type="image/webp"
                />
                <img
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/512.gif"
                  alt="👋"
                  width="32"
                  height="32"
                />
              </picture>{" "}
              Nice to see you here! I'm
            </p>

            <div className="typewriter">
              <h2 className="display-6">SAI APARANJI NEMMANI</h2>
            </div>

            <br />

            <p className="intro_text">/uh-PAH-run-jee/ 🗣️</p>

            {/* <p className="intro_text">
            A Computer Science Graduate student at Virginia Tech 👩‍💻
          </p> */}
            <p className="intro_text">
              Full-stack software engineer shipping{" "}
              <strong>production web applications</strong> and{" "}
              <strong>scalable REST APIs</strong>, with hands-on experience
              integrating <strong>LLMs and generative AI</strong> into real
              products—frontend through backend, data, and cloud. I own
              features end to end: React and Next.js (TypeScript), Java/Spring
              and Node services, databases, AWS deployment, and CI/CD.
              <span className="intro_skills_text">
                React • Next.js • TypeScript • Java • Spring Boot • Node.js •
                Python • REST APIs • MongoDB • PostgreSQL • AWS • LLMs
              </span>
              Nearly four years in production software; M.Eng. Computer Science,
              Virginia Tech (3.88 GPA) 👩‍💻.
            </p>


            {/* Call to Action Buttons */}

            <CTAButton text="View Projects" href="/projects" />

            {/* Social Handles */}
            <div className="about__icons">
              <Link
                href="mailto:nsaiaparanji@gmail.com"
                className="social-pill"
                title="Email me"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="social-text">nsaiaparanji@gmail.com</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/saiaparanjinemmani/"
                className="social-pill"
                target="_blank"
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                <span className="social-text">/in/saiaparanjinemmani</span>
              </Link>

              <Link
                href="https://github.com/aparanji49/"
                className="social-pill"
                target="_blank"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span className="social-text">@aparanji49</span>
              </Link>

              <Link
                href="https://medium.com/@nsaiaparanji"
                className="social-pill"
                target="_blank"
                title="Medium"
              >
                <FontAwesomeIcon icon={faMedium} />
                <span className="social-text">@nsaiaparanji</span>
              </Link>
            </div>
          </div>

          <div className="image container-sm-6">
            <Image
              className="image_about"
              src="images/hero-image.png"
              alt="Sai Aparanji Image"
              width={500}
              height={300}
            />
          </div>
        </div>
      </section>
      {/* <EmojiCursor
        idleMs={1500}
        sizeRem={2}
        jitterPx={3}
        idleEmoji={"😴"}
        activeEmoji={"😀"}
      /> */}
    </>
  );
}
