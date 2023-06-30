import { DataContextApi } from "@/src/Context/DataContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaBars, FaMixer } from "react-icons/fa";

const HomeNav = () => {
  const { homeHeroHeaderShow, setHomeHeroHeaderShow } =
    useContext(DataContextApi);
  const menuList = (
    <>
      <li>
        <Link
          href="/"
          className="text-gray-700 hover:text-red-500 text-[1.2rem] font-semibold"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/services"
          className="text-gray-700 hover:text-red-500 text-[1.2rem] font-semibold"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          href="/products"
          className="text-gray-700 hover:text-red-500 text-[1.2rem] font-semibold"
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="text-gray-700 hover:text-red-500 text-[1.2rem] font-semibold"
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className="text-gray-700 hover:text-red-500 text-[1.2rem] font-semibold"
        >
          Contact Us
        </Link>
      </li>
    </>
  );

  return (
    <>
      <nav>
        <div className="flex items-center container mx-auto">
          <div>
            <div
              className="hover:cursor-pointer sm:hidden  mt-5 mb-4 mx-4 relative z-20"
              onClick={() => setHomeHeroHeaderShow(!homeHeroHeaderShow)}
            >
              <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
              <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
              <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
            </div>
            {/* mobile device menu */}
            <div className="relative">
              {homeHeroHeaderShow && (
                <div className="absolute top-0 left-0 right-0  w-[100vw] h-auto bg-white z-10">
                  <div className="float-right p-6">
                    <h2
                      className="text-2xl font-bold text-red-500 mt-3"
                      onClick={() => setHomeHeroHeaderShow(!homeHeroHeaderShow)}
                    >
                      <FaMixer />
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="mt-5 mr-5">
                      <ul className="pb-4">{menuList}</ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* mobile device menu */}

            <div className="flex items-center justify-center">
              <ul
                className={`md:flex space-x-4 items-center duration-200 
              hidden top-0 left-0 w-full my-4 font-[1.2rem]`}
              >
                {menuList}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HomeNav;
