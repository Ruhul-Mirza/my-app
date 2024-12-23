import React from "react";
import Logo from "../image/logo-2.png";

const Footer = () => {
  return (
    <>
<footer className="bg-black">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <div className="flex flex-col">
          <div className="image mb-6">
            <img src={Logo} className="h-12" alt="Imdb Logo" />
          </div>
          <div className="text">
            <span className="block text-lg font-normal text-white">
              One Medical Devices
            </span>
            <span className="block text-lg font-normal text-white">
              Market Place
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-6">
        {/* Platform */}
        <div>
          <h2 className="mb-6 text-2xl text-white">Platform</h2>
          <ul className="text-gray-400">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Sell on 1MDM
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Pricing
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Our Story
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Brands
              </a>
            </li>
          </ul>
        </div>
        {/* Press Room */}
        <div>
          <h2 className="mb-6 text-2xl text-white">Press Room</h2>
          <ul className="text-gray-400">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Images & B-roll
              </a>
            </li>
          </ul>
        </div>
        {/* Reach Us */}
        <div>
          <h2 className="mb-6 text-2xl text-white">Reach Us</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Corporate Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* Policies Section */}
        <div>
          <h2 className="mb-6 text-2xl text-white">Policies</h2>
          <ul className="text-gray-400">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Delivery Information
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  {/* Footer Bottom */}
  <div className="bg-white py-6">
    <span className="block text-lg text-center text-black">
      © 2024 1MDM ⚡ by SuperLabs
    </span>
  </div>
</footer>

    </>
  );
};

export default Footer;
