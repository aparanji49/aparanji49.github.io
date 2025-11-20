"use client";

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import EmojiCursor from "./EmojiCursor";
const designsData = [
  
   {
    title: "LifeBoard", 
    description: "Wireframes",
    imageUrl: "/images/figmalogo.png",
    tool: "Figma",
    projectLink: "https://www.figma.com/design/hWSTkY7dVyAbxoZVxs5phx/Lifeboard?t=nTzP3LDP7lzomn0T-1"
  },
    {
    title: "Musical Instrument Store", 
    description: "Wireframes",
    imageUrl: "/images/figmalogo.png",
    tool: "Figma",
    projectLink: "https://www.figma.com/design/9DBGg9WqrLet1KMu1c2nl2/MusicalInstrumentStore?t=nTzP3LDP7lzomn0T-1"
  },
  {
    title: "PeerInsights", 
    description: "Wireframes",
    imageUrl: "/images/figmalogo.png",
    tool: "Figma",
    projectLink: "https://www.figma.com/design/QuQ6zrI6bzJVONkVXDzzf1/PeerEvaluation-Web-App?t=DtunWPuQhoLze2Gd-1"
  },
  {
    title: "Portfolio website", 
    description: "Mockups",
    imageUrl: "/images/figmalogo.png",
    tool: "Figma",
    projectLink: "https://www.figma.com/design/GLvojw2krJ7aTIWhg5F1gQ/Portfolio-designs?node-id=0-1&t=DtunWPuQhoLze2Gd-1"
  },
    {
    title: "EnchantedPages Ecommerce Website", 
    description: "Mockups",
    imageUrl: "/images/figmalogo.png",
    tool: "Figma",
    projectLink: "https://www.figma.com/design/hNbevidXgWPjRw087k1Ril/ProjectPart1-WAD?t=DossvNWWRprVj0Yw-1"
  },
    {
    title: "AI-Powered Career Companion", 
    description: "Mockups",
    imageUrl: "/images/figmalogo.png",
    tool: "Figma",
    projectLink: "https://www.figma.com/design/K1pEsKbAcq1u8pyDrI04vO/Career-Companion?node-id=0-1&t=N7WwrQYvmwb34XSe-1"
  },
    {
    title: "Online Slam Book", 
    description: "Wireframes",
    imageUrl: "/images/balsamiqlogo.png",
    tool: "Balsamiq",
    projectLink: "https://github.com/aparanji49/OnlineSlamBook/tree/master/Wireframes"
  },
    {
    title: "Event Ease", 
    description: "Wireframes",
    imageUrl: "/images/balsamiqlogo.png",
    tool: "Balsamiq",
    projectLink: "https://github.com/aparanji49/Misc/blob/main/Design%20Documents.pdf"
  },
];

const Designs = () => {
  return (
    <>
    <section id="designs" className="container-sm" style={{marginTop: '2rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h2 className="section-heading display-6">UI/UX Designs for my projects</h2>
      {designsData.map((design, index) => (
        <div
                    key={index}
                    className="design-capsule"
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      width: '85%',
                      height: 'fit-content',
                      backgroundColor: '#fff',
                      borderRadius: '20px',
                      border: '1px solid black',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                      padding: '1rem',
                      position: 'relative',
                      marginBottom: '1rem',
                      alignItems: 'center',
                     justifyContent: 'space-between',
                    }}
                  >
                    <h4 style={{ color: '#000000' }}>{design.title}</h4>
                    <p style={{ color: '#646464', fontSize: '0.95rem' }}>
                      {design.description}
                    </p>
                    <p style={{ color: '#646464', fontSize: '0.95rem' }}>
                      <Image src={design.imageUrl} alt={design.tool} height={20} width={10} style={{marginLeft: '0.5rem', marginBottom: '0.3rem'}}/> {design.tool} 
                    </p>
                    <a href={design.projectLink} target="_blank" rel="noopener noreferrer" style={{  right: '1rem', color:'black' }}>
                     Link <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </a>
                  </div>))}
    
    </section>
     <EmojiCursor idleMs={1500} sizeRem={2} jitterPx={3} idleEmoji={"😴"} activeEmoji={"👩‍🎨"}/>
        </>
  );
};
export default Designs;