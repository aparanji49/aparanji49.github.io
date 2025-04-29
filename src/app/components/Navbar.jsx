"use client";

import { useState, useEffect } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {  // Change 100 to the scroll position where you want the color to change
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`container-fluid ${isSticky ? "sticky-header" : ""}`}>
 
        <nav className="navbar navbar-expand-lg menu">
          <Link className="navbar-brand" href="/">
            <img src="/images/logo_portfolio.png" alt="Portfolio Logo" height="70" width="70" />
          </Link>
          <button
            id="hamButton"
            className="navbar-toggler"
            type="button"
            onClick={handleMenuToggle}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
             <FontAwesomeIcon icon={isMenuOpen ? faArrowLeft : faBars} />
            {/* <i className={`fa ${isMenuOpen ? 'fa-arrow-left' : 'fa-bars'}`}></i> */}
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link href="/skills">Skills</Link>
              </li>
              <li className="nav-item">
                <Link href="/experience">Education & Work</Link>
              </li>
              <li className="nav-item">
                <Link href="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link href="/blogs">Tech Blogs</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>

      <ThemeSwitch />
    </header>
  );
}
