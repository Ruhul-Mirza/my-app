import React from "react";

import heroImage from "../image/hero-bg.png";

const HeroSection = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center py-24"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
        {/* Heading */}
        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-6">
         Ready To Grow Your Business?
        </h1>   

        {/* Buttons */}
        <div className="space-x-2 pt-12">
          <button className="px-6 py-2 text-xl hover:border-2 hover:border-white text-[#ed1c24] bg-white hover:bg-[#ed1c24] hover:text-white rounded-3xl transition duration-300">
            <a src={"#"}>
            Start Selling
            </a>
          </button>
          <button className="px-6 py-2 text-xl text-white bg-transparent border-2 border-white hover:bg-white hover:text-[#ed1c24] rounded-3xl transition duration-300 mt-5 md:mt-0">
            <a src={"#"}>
            Chat With Consultant

            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
