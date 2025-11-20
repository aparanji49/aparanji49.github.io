'use client'; // Important! This tells Next.js this file uses client-side interactivity

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <header className="container-fluid d-flex justify-content-between align-items-center p-3">
      {/* Designed & Developed by Sai Aparanji Nemmani – © 2025 */}

      <nav className="navbar navbar-expand-lg menu">
        <a href="/" className="navbar-brand" >
          <Image src={"images/logo_portfolio.png"} alt="Logo" width={70} height={70} />
        </a>

        <button
          id="hamButton"
          className="navbar-toggler"
          type="button"
          onClick={handleMenuToggle}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          {/* <i className={`fa ${isMenuOpen ? 'fa-arrow-left' : 'fa-bars'}`}></i> */}
          <FontAwesomeIcon icon={isMenuOpen ? faArrowLeft : faBars} />
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#about-subsection" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#skills-subsection" className="nav-link">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#edu-work-section" className="nav-link">Education & Work</a>
            </li>
            <li className="nav-item">
              <a href="#projects-subsection" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#tech-blogs" className="nav-link">Tech Blogs</a>
            </li>
            <li className="nav-item">
              <a href="#footer" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="switch" onClick={handleThemeToggle}>
        <div className="flicker"></div>
        <div className="moon"></div>
      </div>
    </header>
  );
}
