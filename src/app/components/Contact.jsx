
'use client'; 

import React, { useEffect } from 'react';


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
        <div className="col-md-6 col-sm-12 contact-form-div">
          <div className="contact-title">
            <div className="h5">Get in touch!</div>
          </div>

          {/* Mail Button */}
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

    </>
  );
};

export default ContactForm;
