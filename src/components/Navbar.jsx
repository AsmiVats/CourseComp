import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`flex items-center justify-between py-4 px-6 bg-gray-900`}>

      <div className="flex items-center">
        <span className="text-white text-2xl font-bold">LOGO</span>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-white hover:text-gray-400">About Us</a>
        <a href="#" className="text-white hover:text-gray-400">Services</a>
        <a href="#" className="text-white hover:text-gray-400">Contact</a>
      </div>
      
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="flex flex-col items-center">
          <a href="#" className="text-white hover:text-gray-400 my-2">About Us</a>
          <a href="#" className="text-white hover:text-gray-400 my-2">Services</a>
          <a href="#" className="text-white hover:text-gray-400 my-2">Contact</a>
        </div>
      </div>
      <div className="md:hidden">
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          <svg viewBox="0 0 20 20" fill="currentColor" className="menu w-6 h-6">
            <path fillRule="evenodd" d="M3 9a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
