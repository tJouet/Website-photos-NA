import React, { useEffect, useState } from "react";
import Logo from "@/public/logo.svg";
import data from "../../../public/data.json";

const Hero = () => {
  const randomizeHero = () => {
    let images: string[] = [];
    for (let i = 0; i < data.length; i++) {
      images.push(...data[i].images);
    }
    setHeroImg(images[Math.floor(Math.random() * images.length)]);
  };

  const [heroImg, setHeroImg] = useState<string>("/images/picHero.jpg");

  const MINUTE_MS = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      randomizeHero();
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);
  return (
    <>
      <div
        className="h-screen w-full z-0 bg-cover top-0 flex justify-evenly items-center"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="md:absolute md:bottom-20 md:left-10">
          <Logo className="h-[50px] md:h-[130px] md:translate-y-6 " />
        </div>
      </div>
    </>
  );
};

export default Hero;
