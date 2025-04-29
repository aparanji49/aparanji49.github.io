// src/app/components/Hero.jsx

'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';


export default function Hero() {
  return (
    <section id="intro-subsection" className="container-sm">
      <div className="main container-sm">
        <div className="main-text container-sm-6">
          <p className="h6">
            Hi!{' '}
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
            </picture>{' '}
            Nice to see you here! I'm
          </p>

          <div className="typewriter">
            <h2 className="display-6">SAI APARANJI NEMMANI</h2>
          </div>
          <br />
          <p className="intro_text">/uh-PAH-run-jee/ 🗣️</p>
          <p className="intro_text">
            A Computer Science Graduate student at Virginia Tech 👩‍💻
          </p>
          <p className="intro_text">
            Actively seeking Full-Time opportunities as a <strong>Software Engineer</strong>, <strong>Frontend Engineer</strong>, <strong>Backend Engineer</strong>, <strong>Full Stack Web Developer</strong>, or <strong>Cloud Engineer</strong>, where I can build impactful, scalable solutions and grow with a mission-driven team.
          </p>

          <div className="about__icons">
            <Link href="mailto:nsaiaparanji@gmail.com" className="about__icon" title="Email me">
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
            <Link href="https://www.linkedin.com/in/saiaparanjinemmani/" className="about__icon" target="_blank" title="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link href="https://github.com/aparanji49/" className="about__icon" target="_blank" title="GitHub">
              <FontAwesomeIcon icon={faGithub} />
              
            </Link>
            <Link href="https://medium.com/@nsaiaparanji" className="about__icon" target="_blank" title="Medium">
              <FontAwesomeIcon icon={faMedium} />
            </Link>
          </div>
        </div>

        <div className="image container-sm-6">
          <Image
            className="image_about"
            src="/images/image_portfolio1.jpg" // You should place this image under public/images/
            alt="Sai Aparanji Image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
