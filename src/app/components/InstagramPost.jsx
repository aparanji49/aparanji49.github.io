"use client";

import { useEffect } from "react";

// If you're on CRA, replace next/script with a plain <script> injector:
function ensureInstagramScript() {
  const id = "instagram-embed-js";
  if (document.getElementById(id)) return;
  const s = document.createElement("script");
  s.id = id;
  s.async = true;
  s.src = "https://www.instagram.com/embed.js";
  document.body.appendChild(s);
}

export default function InstagramPost({ permalink, captioned = true }) {
  useEffect(() => {
    ensureInstagramScript();
    // Try now and once more (script may load async)
    const tick = () => window.instgrm && window.instgrm.Embeds && window.instgrm.Embeds.process();
    tick();
    const t = setTimeout(tick, 300);
    return () => clearTimeout(t);
  }, [permalink]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={`${permalink}?utm_source=ig_embed&utm_campaign=loading`}
      data-instgrm-version="14"
      {...(captioned ? { "data-instgrm-captioned": "" } : {})}
      style={{
        background: "#fff",
        border: 0,
        borderRadius: 8,
        boxShadow: "0 1px 10px rgba(0,0,0,.15)",
        margin: "0 auto",
        maxWidth: 540,
        minWidth: 326,
        width: "100%",
      }}
    >
      {/* Fallback if script blocked */}
      <a href={permalink} target="_blank" rel="noopener noreferrer">
        View this post on Instagram
      </a>
    </blockquote>
  );
}
