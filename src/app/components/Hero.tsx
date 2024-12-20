import React from "react";
import Logo from "@/public/logo.svg";
const Hero = () => {
  return (
    <>
      <div className="h-screen w-full z-0 bg-cover bg-hero-pattern top-0 flex justify-evenly items-center ">
        <Logo className="h-[50px] md:h-[130px] md:translate-y-6" />
      </div>
    </>
  );
};

export default Hero;
