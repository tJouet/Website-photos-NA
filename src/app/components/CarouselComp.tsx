"use client";
import React, { useState, useRef, useEffect } from "react";
import "../components/styles.css";
import AlbumDisplayCarousel from "../atoms/AlbumDisplayCarousel";

const data = {
  albums: [
    {
      title: "Garorock 2023",
      description: "pictures I took in garorock's 2023 edition.",
      images: [
        "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
        "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
        "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
        "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
      ],
    },
    {
      title: "Les vieilles charrues 2023",
      description: "pictures I took in Les vieilles charrues 2023 edition.",
      images: [
        "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
        "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
        "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
        "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
      ],
    },
    {
      title: "Hellfest 2023",
      description: "pictures I took in Hellfest's 2023 edition.",
      images: [
        "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
        "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
        "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
        "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
      ],
    },
  ],
};

//Creer un fake date avec un [{src:"src"(trouver comment faire une preview de toutes les photos), description:{description}, albumTitle:'title'}]  remplacer les image simples dans le map ci dessous par des "albums" à ouvrir au clic
const CarouselComp = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    <div
      ref={containerRef}
      className="snap-mandatory snap-x flex flex-row w-full overflow-x-auto  justify-between scroll-smooth no-scrollbar"
    >
      {data.albums.map((album, index) => (
        <div
          ref={(el) => (itemRefs.current[index] = el)}
          className="snap-center shrink-0 first:pl-12 md:first:pl-36 px-8 last:pr-16 md:last:pr-36"
          key={index}
        >
          <AlbumDisplayCarousel
            album={album}
            isActive={index === activeIndex}
          />
        </div>
      ))}
    </div>
  );
};

export default CarouselComp;
