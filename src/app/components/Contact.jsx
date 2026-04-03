"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


const ContactForm = () => {
    useEffect(() => {
        // Ensure the LinkedIn badge script is loaded
        const script = document.createElement('script');
        script.src = 'https://platform.linkedin.com/badges/js/profile.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
  return (
    <>
    <section id="contact-form-subsection" className="container-sm">
     {/* Designed & Developed by Sai Aparanji Nemmani – © 2025 */}

      <h2 className="section-heading display-6">Contact Me</h2>
      <div className="row contact">
        {/* Left Column */}
        <div className="col-md-6 col-sm-12 contact-form-div contact-form-div--lead">
          <div className="contact-title">
            <div className="h5">Get in touch!</div>
          </div>

          <div className="contact-details" aria-label="Contact information">
            <a
              className="contact-detail-row contact-detail-row--link"
              href="mailto:nsaiaparanji@gmail.com"
            >
              <span className="contact-detail-icon" aria-hidden>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="contact-detail-text">nsaiaparanji@gmail.com</span>
            </a>
            <a
              className="contact-detail-row contact-detail-row--link"
              href="tel:+15716415925"
            >
              <span className="contact-detail-icon" aria-hidden>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span className="contact-detail-text">(571) 641-5925</span>
            </a>
            <Link
              className="contact-detail-row contact-detail-row--link"
              href="https://www.linkedin.com/in/saiaparanjinemmani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-detail-icon" aria-hidden>
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
              <span className="contact-detail-text">
                linkedin.com/in/saiaparanjinemmani
              </span>
            </Link>
            <div className="contact-detail-row">
              <span className="contact-detail-icon" aria-hidden>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <span className="contact-detail-text contact-detail-text--muted">
                USA (open to relocation across US)
              </span>
            </div>
          </div>

          <a
            className="mail-button"
            href="mailto:nsaiaparanji@gmail.com"
          >
            Send me an email 📤 <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

         {/* Right Column with LinkedIn Badge */}
         <div className="col-md-6 col-sm-12 linkedinbadge">
            <div
              className="badge-base LI-profile-badge"
              data-locale="en_US"
              data-size="medium"
              data-theme="dark"
              data-type="VERTICAL"
              data-vanity="saiaparanjinemmani"
              data-version="v1"
              dangerouslySetInnerHTML={{
                __html: `<a class="badge-base__link LI-simple-link body_links" href="https://www.linkedin.com/in/saiaparanjinemmani?trk=profile-badge" target="_blank" rel="noopener noreferrer"></a>`,
              }}
            ></div>
          </div>
      </div>
    </section>
 {/* <EmojiCursor idleMs={1500} sizeRem={2} jitterPx={3} idleEmoji={"😴"} activeEmoji={"📨"}/> */}
    
    </>
  );
};

export default ContactForm;
