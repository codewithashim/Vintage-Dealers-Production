import Image from "next/image";
import React, { useCallback, useRef } from "react";
import { FaCartPlus, FaEye, FaPhabricator } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";
import useProduct from "@/src/Hooks/useProduct/useProduct";
import Link from "next/link";

const BestShellingProduct = () => {
  const { allProductData } = useProduct();

  const filterProductData = allProductData?.filter((data) => {
    return data?.productType === "BEST SELLING";
  });

  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className=" mx-2 relative">
      <div className="title my-6 flex justify-between items-center">
        <h2 className=" text-[1rem] md:text-[1.5rem] text-center md:text-left lg:text-3xl uppercase xxs:text-2xl  text-black font-bold">
          Best Selling Products
        </h2>

        <div className="flex  items-center gap-10 top-0">
          <button
            className="prev-arrow cursor-pointer bg-[#ED1C24] p-3 rounded-full"
            onClick={handlePrev}
          >
            <TbArrowBigLeft className="h-6 w-6 text-white" />
          </button>
          <button
            className="next-arrow cursor-pointer bg-[#ED1C24] p-3 rounded-full"
            onClick={handleNext}
          >
            <TbArrowBigRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      <div>
        <Swiper
          ref={sliderRef}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
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
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
        >
          <div className="grid grid-cols-1 justify-center items-center mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterProductData &&
              filterProductData.map((product, Index) => {
                return (
                  <SwiperSlide className="cursor-grab" key={product._id}>
                    <div className="cardBody md:m-0 w-[320px] mx-auto  flex flex-col hover:border-red-500 color-b bg-white p-2 md:p-3 rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 ">
                      <div className="productImage p-2">
                        <Image
                          src={product?.productImage}
                          width={280}
                          height={280}
                          className="w-full h-full"
                          alt="Product Image"
                        />
                      </div>
                      <hr className="w-full bg-slate-400" />
                      <div className="productInfo mt-2 p-2">
                        <h2 className="productName font-bold ">
                          {product?.productName}
                        </h2>
                        <p className="productPrice text-red-500 font-semibold pt-3">
                          $ {product?.productPrice}
                        </p>
                        <p className="productDescription py-3">
                          {product?.productDescription?.slice(0, 150)}
                        </p>

                        <div className="productAddToCart flex gap-5 items-center">
                          <div>
                            <Link
                              className="border  px-4 py-4 flex justify-center items-center gap-4 hover:border-red-500 color-b bg-white p-2 md:p-3 text-center rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-red-500"
                              href={`/product-detail/${product?._id}`}
                            >
                              <FaCartPlus />
                              Product Detail
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default BestShellingProduct;
