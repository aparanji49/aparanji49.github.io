import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import InstagramPost from "./InstagramPost";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { PrevButton, NextButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import "../css/embla.css";
/**
 * props:
 * - posts: string[]  (Instagram permalinks)
 * - options: EmblaOptionsType
 * - title?: string
 */
const EmblaInstagramCarousel = ({ posts = [], options, title = "Instagram Posts (Telugu) — Core Java — 2022" }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  // Reprocess Instagram embeds on init/reInit/select (helps when slides mount or resize)
  const processEmbeds = useCallback(() => {
    if (window.instgrm && window.instgrm.Embeds) window.instgrm.Embeds.process();
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    processEmbeds();
    emblaApi.on("reInit", processEmbeds).on("select", processEmbeds);
    return () => {
      emblaApi
        .off("reInit", processEmbeds)
        .off("select", processEmbeds);
    };
  }, [emblaApi, processEmbeds]);

  return (
    <section className="embla" style={{ marginTop: "2rem" }}>
      {!!title && (
        <h3 className="section-heading h5" style={{ marginBottom: "0.75rem" }}>
          {title}
        </h3>
      )}
       <p
        style={{
          marginTop: "2rem",
          marginBottom: "1rem",
          color: "#444",
          fontSize: "1rem",
        }}
      >
        In 2022, I experimented with creative technical communication by
        designing a series of educational memes in <strong>Telugu</strong> language.
        These posts used humor and cultural context to make{" "}
        <strong>Core Java</strong> concepts more approachable, combining
        technical depth with accessible, engaging storytelling.
      </p>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
<div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
       </div>  

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {posts.map((permalink, i) => (
            <div className="embla__slide" key={`${permalink}-${i}`}>
              {/* Center the embed within slide height */}
              {/* style={{ display: "flex", justifyContent: "center", alignItems: "center" }} */}
              <div className="embla__slide__number" >
                <InstagramPost permalink={permalink} />
              </div>
            </div>
          ))}
        </div>
      </div>
<div className="embla__buttons">
          {/* <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} /> */}
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        </div>
      {/* <div className="embla__controls"> */}
        {/* <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div> */}
{/* 
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(index === selectedIndex ? " embla__dot--selected" : "")}
            />
          ))}
        </div> */}
      {/* </div> */}
    </section>
  );
};

export default EmblaInstagramCarousel;
