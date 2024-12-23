import React, { useEffect, useState } from "react";

const Hero = () => {
  
  const [counts, setCounts] = useState({
    count1: 0,
    count2: 0,
    count3: 0,
  });

  
  const updateCount = (target, currentCount, setCount) => {
    const speed = 100;
    const increment = target / speed;
    const updatedCount = Math.ceil(currentCount + increment);

    if (updatedCount < target) {
      setCount(updatedCount);
      setTimeout(() => updateCount(target, updatedCount, setCount), 20);
    } else {
      setCount(target);
    }
  };

  
  useEffect(() => {
    updateCount(26000000, counts.count1, (newCount) => setCounts((prev) => ({ ...prev, count1: newCount })));
    updateCount(400000, counts.count2, (newCount) => setCounts((prev) => ({ ...prev, count2: newCount })));
    updateCount(200, counts.count3, (newCount) => setCounts((prev) => ({ ...prev, count3: newCount })));
  }, []); 

  return (
    <div className="bg-image">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
        <div className="flex flex-wrap md:flex-nowrap gap-x-20 -mx-4">
          {/* Left Section */}
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <h4 className="text-[1.4rem]">Sell on 1mdm.com</h4>
            <h1 className="font-semibold text-[2.3rem] leading-tight">
              Reach millions of B2B buyers globally
            </h1>
            <div className="pt-8 md:pt-12 flex flex-col lg:flex-row gap-3">
              {/* Start Selling Button */}
              <a href="#">
                <button
                  type="button"
                  className="bg-[#ed1c24] text-white px-4 py-2 rounded-3xl hover:bg-red-700 transition duration-300 w-full sm:w-auto"
                >
                  Start selling
                </button>
              </a>

              {/* Chat with Consultant Button */}
              <a href="#">
                <button
                  type="button"
                  className="bg-transparent text-[#ed1c24] border border-[#ed1c24] px-4 py-2 rounded-3xl hover:bg-[#ed1c24] hover:text-white transition duration-300 w-full sm:w-auto"
                >
                  Chat with consultant
                </button>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 px-4">
            <div className="lg:text-right text-center sm:text-left">
              {/* First Statistic */}
              <div className="mb-12">
                <h3 className="text-3xl text-gray-900 font-semibold counter">
                  {counts.count1.toLocaleString()}
                </h3>
                <p className="text-gray-600">active buyers globally</p>
              </div>

              {/* Second Statistic */}
              <div className="mb-12">
                <h3 className="text-3xl text-gray-900 font-semibold counter">
                  {counts.count2.toLocaleString()}
                </h3>
                <p className="text-gray-600">product inquiries daily</p>
              </div>

              {/* Third Statistic */}
              <div>
                <h3 className="text-3xl text-gray-900 font-semibold counter">
                  {counts.count3.toLocaleString()}
                </h3>
                <p className="text-gray-600">countries and regions represented</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
