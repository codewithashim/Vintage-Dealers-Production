import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BrandOne from "../../../Assets/Brands/brand_1.png";
import BrandTwo from "../../../Assets/Brands/brand_2.png";
import BrandThree from "../../../Assets/Brands/brand_3.png";
import BrandFour from "../../../Assets/Brands/brand_4.png";
import BrandFive from "../../../Assets/Brands/brand_5.png";
import BrandSix from "../../../Assets/Brands/brand_6.png";
import BrandSeven from "../../../Assets/Brands/brand_7.png";
import BrandEight from "../../../Assets/Brands/brand_8.png";
import BrandNine from "../../../Assets/Brands/brand_9.png";
import BrandTen from "../../../Assets/Brands/brand_10.png";
import BrandEleven from "../../../Assets/Brands/brand_11.png";
import BrandTwelve from "../../../Assets/Brands/brand_12.png";
import BrandThirteen from "../../../Assets/Brands/brand_13.png";
import BrandFourteen from "../../../Assets/Brands/brand_14.png";
import BrandFifteen from "../../../Assets/Brands/brand_15.png";
import BrandSixteen from "../../../Assets/Brands/brand_16.png";
import BrandSeventeen from "../../../Assets/Brands/brand_17.png";
import BrandEighteen from "../../../Assets/Brands/brand_18.png";
import BrandNineteen from "../../../Assets/Brands/brand_19.png";
import Image from "next/image";

const brandBannerData = [
  {
    id: 1,
    image: BrandOne,
  },
  {
    id: 2,
    image: BrandTwo,
  },
  {
    id: 3,
    image: BrandThree,
  },
  {
    id: 4,
    image: BrandFour,
  },
  {
    id: 5,
    image: BrandFive,
  },
  {
    id: 6,
    image: BrandSix,
  },
  {
    id: 7,
    image: BrandSeven,
  },
  {
    id: 8,
    image: BrandEight,
  },
  {
    id: 9,
    image: BrandNine,
  },
  {
    id: 10,
    image: BrandTen,
  },
  {
    id: 11,
    image: BrandEleven,
  },
  {
    id: 12,
    image: BrandTwelve,
  },
  {
    id: 13,
    image: BrandThirteen,
  },
  {
    id: 14,
    image: BrandFourteen,
  },
  {
    id: 15,
    image: BrandFifteen,
  },
  {
    id: 16,
    image: BrandSixteen,
  },
  {
    id: 17,
    image: BrandSeventeen,
  },
  {
    id: 18,
    image: BrandEighteen,
  },
  {
    id: 19,
    image: BrandNineteen,
  },
];

const BrandBanner = () => {
  return (
    <section className="pb-[3rem]">
      <div className="border bg-slate-500">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          // pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            360: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
        >
          {brandBannerData.map((tData) => (
            <SwiperSlide key={tData.id} className="cursor-grab">
              <div className="px-2">
                <div className="flex justify-center">
                  <div className="cart-header rounded-[20px] w-[200px] h-[200px] mx-auto flex items-center justify-center">
                    <Image
                      src={tData.image}
                      alt="brand"
                      width={200}
                      height={200}
                      className="m-auto"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BrandBanner;
