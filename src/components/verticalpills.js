import React, { useState } from "react";
import image1 from "../image/1.png";
import image2 from "../image/2.png";
import image3 from "../image/3.png";
import image4 from "../image/4.png";

const VerticalPills = () => {
  const [activeTab, setActiveTab] = useState("Custom storefront");

  const content = [
    {
      id: "Custom storefront",
      heading: "Set up a store that showcases your brand",
      text: "Differentiate yourself from the competition with a full store dedicated to your products- no coding or design skills necessary!",
      image: image1,
    },
    {
      id: "Advertising tools",
      heading: "Increase exposure by up to 120% with a suite of smart advertising tools.",
      text: "Get your products placed in the right spots to be noticed by the exact audience you are targeting.",
      image: image2,
    },
    {
      id: "Data and analytics",
      heading: "Optimize your every move with in-depth data and customer insights",
      text: "Improve performance with dashboards detailing product exposure, click volume, spend, average cost, store visits, and more.!",
      image: image3,
    },
    {
      id: "Customer Support",
      heading: "Know you're supported throughout your journey",
      text: "From onboarding help to online chats to local support during business hours and account optimization tips -- we're here for you",
      image: image4,
    },
  ];

  return (
    <>
      <h1 className="text-red-900 mt-16 mb-10 text-center p-5 text-3xl font-semibold">Grow your business with a suite of tools built for you</h1>
  <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto mb-20">
      {/* Vertical navigation pills */}
      <div className="w-full lg:w-1/3 flex flex-col items-start space-y-6 p-4 lg:border-r-2">
        {content.map((item) => (
          <button
            key={item.id}
            className={`w-full py-2 px-4 text-lg font-medium text-left ${
              activeTab === item.id
                ? "border-l-4 border-[#ed1c24] text-[#ed1c24]"
                : "border-l-4 border-gray text-gray-600"
            } hover:bg-gray-100 transition-all`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.id}
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className="flex flex-col lg:flex-row items-center w-full">
        <div className="flex flex-col w-full lg:w-2/3 px-6 py-0">
          {content
            .filter((item) => item.id === activeTab)
            .map((item) => (
              <div key={item.id} className="my-6 lg:my-2 md:mb-0 sm:mb-0">
                {/* Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                  {item.heading}
                </h2>
                <p className="text-lg lg:text-xl mb-4 md:mb-0 sm:mb-0">
                  {item.text}
                </p>
              </div>
            ))}
        </div>

        {/* Image Section */}
        {content
          .filter((item) => item.id === activeTab)
          .map((item) => (
            <div key={item.id} className="lg:w-1/3 md:w-1/2">
              <img
                src={item.image}
                alt={`Image for pill ${item.id}`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
      </div>
    </div>
    </>
    
  );
};

export default VerticalPills;
