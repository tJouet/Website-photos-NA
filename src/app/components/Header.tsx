"use client";

import React, { useState, useEffect } from "react";
import Logo from "@/public/logo.svg";
import BurgerMenu from "@/app/atoms/BurgerMenu";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const gradientOpacity = Math.min(scrollY / 100, 1);
  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 w-full pb-2  flex flex-row justify-center items-center border-b-2 border-white z-[90]"
        style={{
          background: `linear-gradient(to bottom, rgba(29, 29, 29, ${gradientOpacity}), rgba(29, 29, 29, ${gradientOpacity}) 95%, rgba(29, 29, 29, 0) 99%)`,
        }}
      >
        <div
          className={` flex flex-row md:flex-col justify-between   md:justify-center items-center w-full  `}
        >
          <Logo className="h-[35px] md:h-[60px] md:m-6 md:ml-6 absolute pl-6 md:static top-6" />
          <BurgerMenu onToggle={toggleMenu} />
        </div>
      </header>
    </>
  );
};

export default Header;
