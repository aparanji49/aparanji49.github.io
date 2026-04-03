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
import { SITE } from "../../config/site";

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
              <h1 className="display-6">SAI APARANJI NEMMANI</h1>
            </div>

            <br />

            <p className="intro_text">/uh-PAH-run-jee/ 🗣️</p>

            {/* <p className="intro_text">
            A Computer Science Graduate student at Virginia Tech 👩‍💻
          </p> */}
            <p className="intro_text">
              I’m a <strong>full-stack software engineer</strong> shipping{" "}
              <strong>production web applications</strong> and{" "}
              <strong>scalable REST APIs</strong>, with hands-on work integrating{" "}
              <strong>LLMs and generative AI</strong> into real products. Recent
              experience includes Next.js and TypeScript (including{" "}
              <strong>React Query</strong>), <strong>Java/Spring Boot microservices</strong>, Node.js,{" "}
              <strong>Kafka</strong>-backed event workflows, MongoDB and PostgreSQL,{" "}
              <strong>AWS</strong>, and <strong>CI/CD</strong> (GitHub Actions, GitLab, Vercel). I’m also
              building <strong>FastAPI</strong> pipelines for <strong>LLM inference</strong> over
              structured review data. I own features end to end—from UX and APIs to deployment and reliability.
              <span className="intro_skills_text">
                React • Next.js • TypeScript • React Query • Java • Spring Boot •
                Node.js • Kafka • Python / FastAPI • REST • MongoDB • PostgreSQL •
                AWS • LLMs
              </span>
              Nearly four years in production software;{" "}
              <strong>M.Eng. Computer Science, Virginia Tech</strong> (3.88 GPA) 👩‍💻.
            </p>


            <div className="hero-cta-row">
              <CTAButton text="View projects" href="/projects" />
              <CTAButton
                text="View resume"
                href={SITE.resumeUrl}
                variant="secondary"
              />
            </div>

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
              alt="Sai Aparanji Nemmani — full-stack software engineer"
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
