import { DataContextApi } from "@/src/Context/DataContext";
import useShopHooks from "@/src/Hooks/useShopHooks/useShopHooks";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaMixer, FaThLarge } from "react-icons/fa";
import HomeNav from "../../Navbar/HomeNav/HomeNav";
import HeroSlider from "./HeroSlider/HeroSlider";

const Hero = () => {
  const { cateGoryHeaderShow, setCateGoryHeaderShow } =
    useContext(DataContextApi);
  const { categoryData } = useShopHooks();

  return (
    <section>
      <hr className="w-full" />
      <main>
        <section>
          <div className="md:grid grid-cols-4 gap-4 md:h-[650px] mt-2">
            <div>
              <div className="md:hidden block relative">
                <div className="absolute w-full right-0 left-0 px-4 top-[0.5rem] z-10 md:relative md:top-0 md:w-auto md:h-[650px]">
                  <button
                    className="text-white py-3 rounded-lg flex float-right gap-2 items-center "
                    onClick={() => setCateGoryHeaderShow(!cateGoryHeaderShow)}
                  >
                    <FaThLarge /> ALL CATEGORIES
                  </button>
                </div>

                {cateGoryHeaderShow && (
                  <div className="bg-white shadow-lg rounded-md absolute w-full right-0 left-0 px-4 top-[3.5rem] z-10 md:relative md:top-0 md:w-auto md:h-[650px]">
                    <div className="overflow-y-auto h-[400px] duration-300">
                      <div className="float-right px-6 py-3 sticky top-0">
                        <h2
                          className="text-2xl font-bold text-red-500 "
                          onClick={() =>
                            setCateGoryHeaderShow(!cateGoryHeaderShow)
                          }
                        >
                          <FaMixer />
                        </h2>
                      </div>
                      {categoryData &&
                        categoryData.map((cet, Index) => {
                          const { _id, categories } = cet;
                          return (
                            <div
                              className="bg-white rounded-md list-none"
                              key={Index}
                            >
                              <li className="py-3 border-b-2 px-4">
                                <Link
                                  href={`/category/${categories}`}
                                  className="list-none  hover:text-red-500"
                                >
                                  {cet?.categories}
                                </Link>
                              </li>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                )}
              </div>

              <div className="md:block hidden">
                <button className="primaryBg text-white py-3 rounded-lg flex justify-center gap-2 items-center w-full">
                  <FaThLarge /> ALL CATEGORIES
                </button>
              </div>
              <div className="overflow-y-auto hidden md:block md:h-[572px]">
                {categoryData &&
                  categoryData.map((cet, Index) => {
                    const { _id, categories } = cet;
                    return (
                      <div
                        className="bg-white  list-none color-b p-2 md:p-3 text-center rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-red-500 "
                        key={Index}
                      >
                        <li className="py-3 border-b-2 px-4 ">
                          <Link
                            href={`/category/${categories}`}
                            className="list-none  hover:text-red-500"
                          >
                            {cet?.categories}
                          </Link>
                        </li>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="col-span-3 ">
              <div className="md:w-[100%] ">
                <header className="bg-red-500 md:bg-[#f9f9f9dc]">
                  <HomeNav />
                </header>
                <HeroSlider />
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Hero;
