"use client";
import React, { useState, useRef, useEffect } from "react";
import "../components/styles.css";
import { useAppContext } from "@/AppContext";
import AlbumDisplayCarousel from "../atoms/AlbumDisplayCarousel";
import Title from "../atoms/Title";

const CarouselComp = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { data } = useAppContext();

  function scrollToFirstRow(pixels) {
    setHasScrolled(true);
    window.scrollTo({
      top: window.scrollY + pixels, // Ajoute les pixels à la position actuelle
      behavior: "smooth", // Défilement fluide
    });
  }

  const handleScroll = () => {
    if (containerRef.current && itemRefs.current) {
      const containerCenter = containerRef.current.offsetWidth / 2;
      const distances = itemRefs.current.map((item, index) => {
        if (!item) return Number.MAX_VALUE;
        const itemCenter =
          item.offsetLeft +
          item.offsetWidth / 2 -
          containerRef.current.scrollLeft;
        return Math.abs(containerCenter - itemCenter);
      });
      const newActiveIndex = distances.indexOf(Math.min(...distances));
      setActiveIndex(newActiveIndex);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
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
      <Title content="Gallery" subText="Featured content:" />
      <div
        ref={containerRef}
        className="snap-mandatory snap-x flex flex-row w-full overflow-x-auto  justify-between scroll-smooth no-scrollbar"
      >
        {data.map((album, index) => (
          <div
            ref={(el) => (itemRefs.current[index] = el)}
            className="snap-center shrink-0 first:pl-12 md:first:pl-36 px-8 last:pr-16 md:last:pr-36"
            key={index}
            onClick={!hasScrolled ? () => scrollToFirstRow(450) : null}
          >
            <AlbumDisplayCarousel
              album={album}
              isActive={index === activeIndex}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CarouselComp;
