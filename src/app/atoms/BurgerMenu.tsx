"use client"
import { useState } from 'react';

interface BurgerMenuProps{
onToggle:(arg0: boolean)=> void
}

const BurgerMenu:React.FC<BurgerMenuProps> = ({ onToggle }) => {
    const [isOpen, setIsOpen] = useState(false);
    
  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle(newState); 
  };

  return (
    <div className="justify-end items-end flex flex-col w-screen py-6" >
      <button
        className="md:hidden flex items-center   px-3 py-2 border rounded border-gray-600 hover:text-gray-700 hover:border-gray-700 mr-6"
        onClick={toggleMenu}
      >
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
        </svg>
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center `}>    
        <nav className="text-[20px] md:flex md:flex-row md:justify-evenly w-screen  font-semibold  items-end flex flex-col mr-6 md:mr-0 md:mt-2">
            <a className="block mt-4 md:inline-block md:mt-0 ">
              Home
            </a>
          
            <a className="block mt-4 md:inline-block md:mt-0 ">
              About
            </a>
  
            <a className="block mt-4 md:inline-block md:mt-0 ">
              Contact
            </a>
     
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;