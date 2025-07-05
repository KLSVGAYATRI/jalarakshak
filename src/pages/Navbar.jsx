import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Replace with your image path

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/technology', label: 'Technology' },
    { path: '/about', label: 'About us' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-md py-6 px-4 sm:px-6 lg:px-20 flex items-center justify-between">

      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 w-auto sm:h-10" />
        <span
          className="ml-2 text-2xl sm:text-[32px] text-black"
          style={{ fontFamily: '"DM Serif Display", serif' }}
        >
          Jala Rakshak
        </span>
      </div>

      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d={
                isMenuOpen
                  ? 'M4 4l16 16M4 20L20 4'
                  : 'M3 5h18M3 12h18M3 19h18'
              }
            />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <ul
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:flex lg:space-x-10 text-gray-600 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 py-4 lg:py-0 px-4 lg:px-0 transition-all duration-300`}
      >
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `text-lg sm:text-[20px] ${
                  isActive
                    ? 'text-cyan-500 border-b-2 border-cyan-500'
                    : 'text-[#444444] hover:text-cyan-500'
                } transition-colors duration-200`
              }
              style={{ fontFamily: '"Calibri", sans-serif' }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Download App Button */}
      <button
        className="hidden lg:block bg-cyan-500 text-white px-4 py-2 rounded-full hover:bg-cyan-600 transition text-sm sm:text-base"
      >
        Download app
      </button>
    </nav>
  );
};

export default Navbar;