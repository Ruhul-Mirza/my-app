import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./testimonialcard";
import Slider1 from "../image/slider-1.webp";
import Slider2 from "../image/slider-2.webp";
import Slider3 from "../image/slider-3.webp";
import "swiper/css";

function Testimonial() {
  const testimonials = [
    {
      quote:
        "Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years’ experience using IP systems that are conventional",
      image: Slider1,
    },
    {
      quote:
        "Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade. Our company’s team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.",
      image: Slider2,
    },
    {
      quote:
        "Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specilised high-quality pigmented imaging process, so he decided to create his own product line.",
      image: Slider3,
    },
  ];

  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext(300);
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev(300);
  };

  return (
    <div className="relative w-full bg-[#f2f4f8] pt-16 pb-8 px-5">
      <h2 className="text-center text-red-700 text-3xl mb-16 font-semibold">
        Success stories from 1mdm.com sellers
      </h2>
      <section>
        <Swiper
          slidesPerView={1}
          centeredSlides
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="gap-4 absolute items-center h-full top-0 z-50 left-10 right-10 justify-between hidden md:flex">
          <button
            type="button"
            onClick={handlePrev}
            className="rounded-full w-10 h-10 border border-red-700 text-red-700 bg-transparent hover:bg-red-700 hover:text-white"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="rounded-full w-10 h-10 border border-red-700 text-red-700 bg-transparent hover:bg-red-700 hover:text-white"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
