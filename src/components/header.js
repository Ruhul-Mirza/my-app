import React, { useState } from 'react';
import logo from "../image/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="mt-3 shadow-md">
      {/* Header Top */}
      <div className="container mx-auto pb-1 border-b border-gray-300 flex flex-col sm:flex-row flex-wrap justify-between items-center">
        <div className="font-normal text-gray-500 text-center sm:text-left text-base sm:text-lg mb-2 sm:mb-0">
          World's Largest Medical Equipment Market Place
        </div>
        <div className="flex space-x-2 justify-center sm:justify-end items-center text-base sm:text-lg mr-3">
          <a
            href="#"
            className="text-black font-normal hover:text-[#ed1c24] transition duration-300"
          >
            My account
          </a>
          <span className="text-black">|</span>
          <a
            href="#"
            className="text-black hover:text-[#ed1c24] transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="container mx-auto bg-white border-gray-200 sticky top-0">
        <div className="flex flex-wrap items-center justify-between p-3">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <img src={logo} className="h-15" alt="1MDM Logo" />
          </a>

          {/* Toggle Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-3 w-15 h-15 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Navbar Menu */}
          <div
            id="navbar-default"
            className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}
          >
            <ul className="font-normal flex flex-col md:flex-row md:space-x-5 text-lg mt-4 md:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 transition duration-300 text-gray-500 md:hover:text-[#ed1c24] md:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 transition duration-300 text-gray-500 md:hover:text-[#ed1c24] md:p-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 transition duration-300 text-gray-500 md:hover:text-[#ed1c24] md:p-0"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 transition duration-300 text-gray-500 md:hover:text-[#ed1c24] md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
