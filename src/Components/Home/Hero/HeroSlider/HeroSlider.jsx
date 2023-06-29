import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Style/HeroStyle.module.scss";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import useCommonApiData from "@/src/Hooks/useCommonApiData/useCommonApiData";

const HeroSlider = () => {
  const { sliderData } = useCommonApiData();

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper heroSlider"
      >
        {sliderData &&
          sliderData.map((slide) => {
            return (
              <SwiperSlide key={slide._id}>
                <Image
                  src={slide.brandSliderImage}
                  alt="Red Rose Auto Trading"
                  layout="responsive"
                  width={750}
                  height={500}
                  className="w-[100%] h-[100%]"
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default HeroSlider;
