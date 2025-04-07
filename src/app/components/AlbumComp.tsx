"use client";
import React, { useState, useRef, useEffect } from "react";
import "../components/styles.css";
import { useAppContext } from "@/AppContext";
import AlbumDisplayCarousel from "../atoms/AlbumDisplayCarousel";
import Title from "../atoms/Title";

const AlbumComp = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [windowYpos, setWindowYpos] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { data } = useAppContext();

  function scrollToFirstRow(pixels: number) {
    setHasScrolled(true);
    setWindowYpos(window.scrollY);
    window.scrollTo({
      top: window.scrollY + pixels,
      behavior: "smooth",
    });
  }

  const handleScroll = () => {
    if (containerRef.current && itemRefs.current) {
      const containerCenter = containerRef.current.offsetWidth / 2;
      const distances = itemRefs.current
        .map((item) => {
          if (!item) return Number.MAX_VALUE;
          if (containerRef.current != null) {
            const itemCenter =
              item.offsetLeft +
              item.offsetWidth / 2 -
              containerRef.current.scrollLeft;
            return Math.abs(containerCenter - itemCenter);
          }
        })
        .filter((distance): distance is number => distance !== undefined);
      const newActiveIndex = distances.indexOf(Math.min(...distances));
      setActiveIndex(newActiveIndex);
    }
  };

  useEffect(() => {
    if (window.scrollY < windowYpos) {
      setHasScrolled(false);
    }
  }, [windowYpos]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <Title content="Gallery" imageUrl="/images/picHero.jpg" />
      <div
        ref={containerRef}
        className="snap-mandatory snap-x flex flex-row w-full overflow-x-auto  justify-between scroll-smooth no-scrollbar"
      >
        {data.map((item, index) => (
          <div
            ref={(el) => (itemRefs.current[index] = el)}
            className="snap-center shrink-0 first:pl-12 md:first:pl-36 px-8 last:pr-16 md:last:pr-36"
            key={index}
            //TO DO: if windowsYpos < window.scrollY => reset hasScrolled
            onClick={!hasScrolled ? () => scrollToFirstRow(450) : null}
          >
            <AlbumDisplayCarousel
              album={item}
              isActive={index === activeIndex}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default AlbumComp;
