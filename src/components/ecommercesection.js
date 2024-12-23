import React from 'react';

const EcommerceSection = () => {
  return (
    <div className="pt-20 pb-0 lg:pb-10 px-5 lg:px-32">
      <h1 className="text-center text-3xl md:text-4xl mb-20 font-semibold">
        <span className="block">1mdm.com is a leading ecommerce platform that</span>
        <span className="block">helps SMEs go global</span>
      </h1>

      <section className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-4">
        <div className="left-side w-full lg:w-1/2 flex justify-center">
          <iframe
            className="w-full lg:w-[95%] h-[300px]"
            src="https://www.youtube.com/embed/TN7iJyc5Uks?si=64Wa1fe4daLyZ5Ac"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="right-side w-full lg:w-1/2 flex flex-col py-10 items-center lg:items-start">
          <p className="text-lg font-normal my-10 text-center lg:text-left">
            Connect with millions of business buyers from around the world
          </p>
          <p className="text-lg font-normal mb-10 text-center lg:text-left">
            Get the tools and know-how to build a successful ecommerce presence for your business.
          </p>
          <p className="text-lg font-normal mb-10 text-center lg:text-left">
            Pocket more from each sale, with take rates as low as 0% in some cases.
          </p>
        </div>
      </section>
    </div>
  );
};

export default EcommerceSection;
