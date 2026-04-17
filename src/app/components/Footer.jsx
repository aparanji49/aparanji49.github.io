
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React from 'react';

// import Link from 'next/link';
// const Footer = () => {
//   return (
//     // <div class="footer_wrapper">
    
//     <footer className="text-center py-3 mt-auto">  {/* Designed & Developed by Sai Aparanji Nemmani – © 2025 */}

//       {/* Copyright information */}
//       <div className="footer__text">Designed & Developed by Aparanji</div>
//       <p style={{fontSize:"0.6rem"}}>© 2025 Aparanji. All Rights Reserved.</p>

//       {/* Icons */}
//       <div className="footer__icons">
//       <Link href="mailto:nsaiaparanji@gmail.com" className="footer__icon" title="Email me">
//               <FontAwesomeIcon style={{fontSize: "20px", paddingRight: "2px"}} icon={faEnvelope} />
//             </Link>
//             <Link href="https://www.linkedin.com/in/saiaparanjinemmani/" className="footer__icon" target="_blank" title="LinkedIn">
//               <FontAwesomeIcon style={{fontSize: "20px", paddingRight: "2px"}} icon={faLinkedin} />
//             </Link>
//             <Link href="https://github.com/aparanji49/" className="footer__icon" target="_blank" title="GitHub">
//               <FontAwesomeIcon style={{fontSize: "20px", paddingRight: "2px"}} icon={faGithub} />
//             </Link>
//             <Link href="https://medium.com/@nsaiaparanji" className="footer__icon" target="_blank" title="Medium">
//               <FontAwesomeIcon style={{fontSize: "20px", paddingRight: "2px"}} icon={faMedium} />
//             </Link>
//       </div>
//     </footer>
//     // </div>
//   );
// };

// export default Footer;
import React from "react";
import Link from "next/link";
// import { SITE } from "../../config/site";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__row">
        <div className="site-footer__left">
          <div className="site-footer__title">Designed & Developed by Aparanji</div>
          <p className="site-footer__tagline">
            Full-stack software engineer · Web apps, REST APIs, LLMs & cloud
          </p>
          <nav className="site-footer__links" aria-label="Quick links">
            <Link href="/projects/">Projects</Link>
            <Link href="/experience/">Education &amp; work</Link>
            {/* <Link href={SITE.resumeUrl}>Resume</Link> */}
            <Link href="/contact/">Contact</Link>
          </nav>
          <p className="site-footer__copy">© {new Date().getFullYear()}</p>
        </div>

        {/* If you want icons later, this matches your CSS */}
        {/* <div className="site-footer__icons">...</div> */}
      </div>
    </footer>
  );
};

export default Footer;

