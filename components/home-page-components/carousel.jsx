import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./carousel.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  const swiper = useSwiper();
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoHeight={true}
        // navigation={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full max-w-full text-lg leading-relaxed text-ink-soft"
      >
        <SwiperSlide>
          Gents Consulting Engineers is committed to providing innovative, 
          intelligent and integrated sustainable engineering design solutions and quality services to enhance our customers’ satisfaction. 
        </SwiperSlide>
        <SwiperSlide>
          Our sustainable and cost-effective approaches that combine exceptional design, 
          problem solving to most complex engineering challenges, attention to detail and proven performance in Kenya and across East Africa forms the ingredient and main recipe
        </SwiperSlide>
        <SwiperSlide>
          Our experts are some of the most highly qualified and sought professionals in the fields of civil,
           structural, water and sanitation, infrastructure, geotechnical, marine, transport, dam and airport engineering, 
           solid waste management as well as building solutions and litigation.
           Most of our engineers and staffs are locally registered Professionals whose focus is to minimize the environmental impact of our clients’ 
           daily operations while meeting project goals, quality and within budget.

        </SwiperSlide>

        <div className="slider-controler flex max-md:justify-center gap-3 mt-10">
          <button
            aria-label="Previous"
            className="swiper-button-prev static m-0 w-12 h-12 rounded-full border border-ink/15 text-ink bg-white flex items-center justify-center transition-all duration-300 hover:bg-brand-600 hover:border-brand-600 hover:text-white"
          >
            <FaArrowLeft className="text-sm" />
          </button>
          <button
            aria-label="Next"
            className="swiper-button-next static m-0 w-12 h-12 rounded-full border border-brand-600 bg-brand-600 text-white flex items-center justify-center transition-all duration-300 hover:bg-brand-700"
          >
            <FaArrowRight className="text-sm" />
          </button>
        </div>
      </Swiper>
    </>
  );
}
