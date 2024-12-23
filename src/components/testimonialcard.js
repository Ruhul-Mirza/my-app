import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function TestimonialCard({ quote, image }) {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto bg-white shadow-lg rounded-2xl">
      <div className="flex-1 w-full md:w-[60%] flex flex-col justify-start items-start p-6 md:p-10">
        <FontAwesomeIcon
          icon={faQuoteLeft}
          className="text-[#ed1c24] text-5xl mb-4"
        />
        <p className="quote text-lg text-black">{quote}</p>
      </div>
      <div className="w-full md:w-[40%] h-64 md:h-auto flex items-center justify-center">
        <img
          src={image}
          alt="Testimonial"
          className="w-full h-full object-cover rounded-b-2xl md:rounded-l-none md:rounded-r-2xl"
        />
      </div>
    </div>
  );
}

export default TestimonialCard;
