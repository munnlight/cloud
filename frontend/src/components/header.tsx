import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger icon

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <span className="text-3xl text-blue-700">🎟️</span>
          <h1 className="text-2xl font-bold text-blue-700 tracking-tight hover:text-blue-800 transition duration-300">
            TicketMongolia
          </h1>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-8 text-gray-700 text-base font-medium">
            <li>
              <a
                href="#home"
                className="relative hover:text-blue-700 transition-all duration-300 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-700 after:bottom-[-4px] after:left-0 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
              >
                Нүүр
              </a>
            </li>
            <li>
              <a
                href="#events"
                className="relative hover:text-blue-700 transition-all duration-300 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-700 after:bottom-[-4px] after:left-0 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
              >
                Тоглолтууд
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="relative hover:text-blue-700 transition-all duration-300 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-700 after:bottom-[-4px] after:left-0 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
              >
                Холбоо барих
              </a>
            </li>
          </ul>
        </nav>

        {/* Login Button */}
        <div className="hidden md:flex items-center">
          <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-all duration-200 text-base font-medium">
            Нэвтрэх
          </button>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />} {/* Dynamic hamburger icon */}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md">
          <ul className="flex flex-col space-y-4 px-4 py-6 text-gray-700 text-base font-medium">
            <li>
              <a
                href="#home"
                className="hover:text-blue-700 transition-all duration-300"
                onClick={toggleMenu}
              >
                Нүүр
              </a>
            </li>
            <li>
              <a
                href="#events"
                className="hover:text-blue-700 transition-all duration-300"
                onClick={toggleMenu}
              >
                Тоглолтууд
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-700 transition-all duration-300"
                onClick={toggleMenu}
              >
                Холбоо барих
              </a>
            </li>
            <li>
              <button
                className="w-full bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-all duration-200"
                onClick={toggleMenu}
              >
                Нэвтрэх
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
