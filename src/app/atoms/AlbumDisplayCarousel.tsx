"use client";

import React, { useState } from "react";

interface AlbumDisplayCarousel {
  album: { title: string; description: string; images: string[] };
  isActive: boolean;
}

const AlbumDisplayCarousel: React.FC<AlbumDisplayCarousel> = ({
  album,
  isActive,
}) => {
  const getClassNames = (index: number, isActive: boolean) => {
    const baseStyles =
      "absolute h-[350px] w-[200px] md:h-[600px] md:w-[1080px] rounded-md";

    if (isActive) {
      return index === 0
        ? `${baseStyles} top-0 left-0 z-50  `
        : index === 1
        ? `${baseStyles} top-4 left-4 z-40 animate-open-on-select-1`
        : `${baseStyles} top-8 left-8 z-30 animate-open-on-select-2`;
    } else {
      return index === 0
        ? `${baseStyles} top-0 left-0 z-40`
        : index === 1
        ? `${baseStyles} top-4 left-4 z-30 animate-close-on-leave-1`
        : `${baseStyles} top-8 left-8 z-20 animate-close-on-leave-2`;
    }
  };
  return (
    <div className="relative h-[450px] md:h-[650px] w-[200px] md:w-[1080px] ">
      {album.images.slice(0, 3).map((image, index) => (
        <>
          <div key={index} className={getClassNames(index, isActive)}>
            <div className="absolute p-3 inset-0 bg-gradient-to-b from-black/60 to-transparent rounded-md ">
              {isActive && (
                <p className="animate-slide-in-left leading-5 pr-6">
                  {album.title}
                </p>
              )}
            </div>
            <img
              src={image}
              className="h-full w-full object-cover rounded-md"
              alt={`${album.title} image_${index + 1}`}
            />
          </div>
        </>
      ))}
    </div>
  );
};
export default AlbumDisplayCarousel;
