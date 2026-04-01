// "use client"; // Important! This tells Next.js this file uses client-side interactivity

// import { useState } from "react";
// // import Link from "next/link";
// import Image from "next/image";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   const handleMenuToggle = () => setIsMenuOpen((v) => !v);;

//   const handleThemeToggle = () => {
//     setDarkMode(!darkMode);
//     document.body.classList.toggle("dark");
//   };

//   return (
//     <header className="container-fluid headerBar">

//    {/* <header className="container-fluid d-flex justify-content-between align-items-center p-3"> */}
//       {/* Designed & Developed by Sai Aparanji Nemmani – © 2025 */}

//       <nav className="navbar navbar-expand-lg menu w-100">
//         {/* <a href="/" className="navbar-brand" >
//           <Image src={"images/logo_portfolio.png"} alt="Logo" width={20} height={20} />
//         </a> */}
//          {/* Left cluster: logo + hamburger */}
//         <div className="headerLeft">
//         <a href="/" className="navbar-brand">
//           <Image
//             src={"images/logo_portfolio.png"}
//             alt="Logo"
//             width={28}
//             height={28}
//             className="header__logo"
//             priority
//           />
//         </a>

//         <button
//           id="hamButton"
//           className="navbar-toggler header__toggler"
//           type="button"
//           onClick={handleMenuToggle}
//           aria-expanded={isMenuOpen}
//           aria-label="Toggle navigation"
//         >
//           {/* <i className={`fa ${isMenuOpen ? 'fa-arrow-left' : 'fa-bars'}`}></i> */}
//           <FontAwesomeIcon icon={isMenuOpen ? faArrowLeft : faBars} />
//         </button>
//         </div>
//         {/* Right cluster: theme switch */}
// {/* Right cluster: theme switch */}
//         <div className="headerRight">
//           <div className="switch" onClick={handleThemeToggle} role="button" aria-label="Toggle theme">
//             <div className="flicker"></div>
//             <div className="moon"></div>
//           </div>
//         </div>
//         <div
//           className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
//           id="navbarNav"
//         >
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a href="#about-subsection" className="nav-link">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#skills-subsection" className="nav-link">
//                 Skills
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#edu-work-section" className="nav-link">
//                 Education & Work
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#projects-subsection" className="nav-link">
//                 Projects
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#tech-blogs" className="nav-link">
//                 Tech Blogs
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#footer" className="nav-link">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       {/* <div className="switch" onClick={handleThemeToggle}>
//         <div className="flicker"></div>
//         <div className="moon"></div>
//       </div> */}
//     </header>
//   );
// }

// src/app/components/Header.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen((v) => !v);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <header className="headerBar container-fluid">
      <nav className="navbar navbar-expand-lg menu w-100">
        {/* Left cluster: logo + hamburger */}
        <div className="headerLeft">
          <a href="/" className="navbar-brand">
            <Image
              src={"images/logo_portfolio.png"}
              alt="Logo"
              width={34}
              height={34}
              className="headerLogo"
            />
          </a>

          <button
            id="hamButton"
            className="navbar-toggler headerToggler"
            type="button"
            onClick={handleMenuToggle}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faArrowLeft : faBars} />
          </button>
        </div>

        {/* Right cluster: theme switch */}
        <div className="headerRight">
          <div
            className="switch"
            onClick={handleThemeToggle}
            role="button"
            aria-label="Toggle theme"
          >
            <div className="flicker"></div>
            <div className="moon"></div>
          </div>
        </div>

        {/* Menu */}
        {/* <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a href="#about-subsection" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#skills-subsection" className="nav-link">Skills</a></li>
            <li className="nav-item"><a href="#edu-work-section" className="nav-link">Education & Work</a></li>
            <li className="nav-item"><a href="#projects-subsection" className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="#tech-blogs" className="nav-link">Tech Blogs</a></li>
            <li className="nav-item"><a href="#footer" className="nav-link">Contact</a></li>
          </ul>
        </div> */}

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                href="/about"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/skills"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/experience"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Education & Work
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/projects"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/designs"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Designs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/blogs"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Tech Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/contact"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
