
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Link from 'next/link';
const Footer = () => {
  return (
    // <div class="footer_wrapper">
    
    <footer className="text-center py-3 mt-auto">  {/* Designed & Developed by Sai Aparanji Nemmani – © 2025 */}

      {/* Copyright information */}
      <div className="footer__text">Designed & Developed by Aparanji</div>
      <p style={{fontSize:"0.95rem"}}>© 2024 Aparanji. All Rights Reserved.</p>

      {/* Icons */}
      <div className="footer__icons">
      <Link href="mailto:nsaiaparanji@gmail.com" className="footer__icon" title="Email me">
              <FontAwesomeIcon style={{fontSize: "36px", paddingRight: "2px"}} icon={faEnvelope} />
            </Link>
            <Link href="https://www.linkedin.com/in/saiaparanjinemmani/" className="footer__icon" target="_blank" title="LinkedIn">
              <FontAwesomeIcon style={{fontSize: "36px", paddingRight: "2px"}} icon={faLinkedin} />
            </Link>
            <Link href="https://github.com/aparanji49/" className="footer__icon" target="_blank" title="GitHub">
              <FontAwesomeIcon style={{fontSize: "36px", paddingRight: "2px"}} icon={faGithub} />
            </Link>
            <Link href="https://medium.com/@nsaiaparanji" className="footer__icon" target="_blank" title="Medium">
              <FontAwesomeIcon style={{fontSize: "36px", paddingRight: "2px"}} icon={faMedium} />
            </Link>
      </div>
    </footer>
    // </div>
  );
};

export default Footer;
