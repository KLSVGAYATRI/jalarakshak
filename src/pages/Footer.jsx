import React from 'react';
import { NavLink } from 'react-router-dom';
import p1 from '../assets/images/logo.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Import React Icons

const Footer = () => {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/technology', label: 'Technology' },
    { path: '/about', label: 'About us' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Name */}
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex items-center">
            <img src={p1} alt="Jala Rakshak Logo" className="h-12 w-auto" />
            <span
              className="ml-3 text-2xl text-[#444444] font-bold"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              Jala Rakshak
            </span>
          </div>
          <p
            className="mt-4 text-[16px] text-[#444444] text-center sm:text-left"
            style={{ fontFamily: "'Calibri', sans-serif" }}
          >
            Innovating water safety through smart technology.
          </p>
        </div>

        {/* Nested Grid for Quick Links and Contact Us */}
        <div className="grid grid-cols-2 gap-8 sm:col-span-2 lg:col-span-2">
          {/* Navigation Links */}
          <div className="text-center sm:text-left">
            <h3
              className="text-[20px] text-[#444444] font-semibold"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-[16px] ${
                        isActive ? 'text-cyan-500' : 'text-[#444444] hover:text-cyan-500'
                      } transition-colors duration-200`
                    }
                    style={{ fontFamily: "'Calibri', sans-serif" }}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center sm:text-left">
            <h3
              className="text-[20px] text-[#444444] font-semibold"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              Contact Us
            </h3>
            <ul className="mt-4 space-y-2 text-[16px] text-[#444444]" style={{ fontFamily: "'Calibri', sans-serif" }}>
              <li>Email: <a href="mailto:info@jalarakshak.com" className="hover:text-cyan-500">info.skjipl@gmail.com </a></li>
              <li>Phone: <a href="tel:+1234567890" className="hover:text-cyan-500">+91 8978859246</a></li>
              <li>Address: Innovation Valley Visakhapatnam Andhra Pradesh - 530048 India</li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center sm:text-left">
          <h3
            className="text-[20px] text-[#444444] font-semibold"
            style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
          >
            Follow Us
          </h3>
          <div className="mt-4 flex justify-center sm:justify-start space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#444444] hover:text-cyan-500">
              <FaFacebookF className="text-2xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#444444] hover:text-cyan-500">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#444444] hover:text-cyan-500">
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#444444] hover:text-cyan-500">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="mt-12 border-t border-gray-200 pt-6 text-center">
        <p
          className="text-[14px] text-[#444444]"
          style={{ fontFamily: "'Calibri', sans-serif" }}
        >
          © {new Date().getFullYear()} Jala Rakshak. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;