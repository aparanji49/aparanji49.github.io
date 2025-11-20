"use client";

import { useRef, useState, useEffect } from "react";
import InstagramPost from "./InstagramPost";

export default function InstagramCarousel({
  posts,
  title = "Instagram (Telugu) — 2022",
}) {
  const viewportRef = useRef(null);
  const [index, setIndex] = useState(0);

  const slideTo = (i) => {
    const vp = viewportRef.current;
    if (!vp) return;
    const clamped = Math.max(0, Math.min(i, posts.length - 1));
    const child = vp.children[clamped];
    if (child) child.scrollIntoView({ behavior: "smooth", inline: "center" });
    setIndex(clamped);
  };

  const next = () => slideTo(index + 1);
  const prev = () => slideTo(index - 1);

  // Keep index in sync when user scrolls manually
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;

    const handler = () => {
      const children = Array.from(vp.children);
      const centers = children.map((el) => {
        const rect = el.getBoundingClientRect();
        return Math.abs((rect.left + rect.right) / 2 - window.innerWidth / 2);
      });
      const nearest = centers.indexOf(Math.min(...centers));
      if (nearest !== -1) setIndex(nearest);
    };

    vp.addEventListener("scroll", handler, { passive: true });
    return () => vp.removeEventListener("scroll", handler);
  }, []);

  return (
    <section
      id="ig-embeds"
      className="container-sm"
      style={{ marginTop: "2rem" }}
    >
      <h3 className="section-heading h5" style={{ marginBottom: "0.75rem" }}>
        {title}
      </h3>
      <p
        style={{
          marginTop: "2rem",
          marginBottom: "1rem",
          color: "#444",
          fontSize: "1rem",
        }}
      >
        In 2022, I experimented with creative technical communication by
        designing a series of educational memes in <strong>Telugu</strong>.
        These posts used humor and cultural context to make{" "}
        <strong>Core Java</strong> concepts more approachable, combining
        technical depth with accessible, engaging storytelling.
      </p>

      <div style={{ position: "relative" }}>
        {/* Carousel viewport */}
        <div
          ref={viewportRef}
          style={{
            display: "grid",
            gridAutoFlow: "column",
            gridAutoColumns: "min(540px, 95%)",
            gap: "1rem",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            paddingBottom: "0.5rem",
          }}
        >
          {posts.map((permalink) => (
            <div
              key={permalink}
              style={{
                scrollSnapAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <InstagramPost permalink={permalink} />
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          aria-label="Previous"
          onClick={prev}
          disabled={index === 0}
          style={{
            position: "absolute",
            left: "-8px",
            top: "40%",
            transform: "translateY(-50%)",
            border: "none",
            background: "rgba(0,0,0,0.65)",
            color: "#fff",
            width: 36,
            height: 36,
            borderRadius: "9999px",
            cursor: index === 0 ? "not-allowed" : "pointer",
          }}
        >
          ‹
        </button>
        <button
          aria-label="Next"
          onClick={next}
          disabled={index === posts.length - 1}
          style={{
            position: "absolute",
            right: "-8px",
            top: "40%",
            transform: "translateY(-50%)",
            border: "none",
            background: "rgba(0,0,0,0.65)",
            color: "#fff",
            width: 36,
            height: 36,
            borderRadius: "9999px",
            cursor: index === posts.length - 1 ? "not-allowed" : "pointer",
          }}
        >
          ›
        </button>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            gap: 6,
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          {posts.map((_, i) => (
            <button
              key={i}
              onClick={() => slideTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                border: "none",
                background: i === index ? "#000" : "#cfcfcf",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
