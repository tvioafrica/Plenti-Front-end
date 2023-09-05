"use client";
import React from "react";
import { promotion1, promotion2 } from "@/images/index";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Promotions = () => {
  return (
    <div className="p-[1rem]">
      <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={promotion1.src} alt="" className="w-[90%] m-auto h-[132px] rounded-md" />
        </SwiperSlide>
      </Swiper>

      <img src={promotion2.src} className="w-full h-[352px] my-[1rem] rounded-md" />
    </div>
  );
};

export default Promotions;
