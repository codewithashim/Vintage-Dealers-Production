import React, { useState } from "react";
import Acura from "../../../Assets/PopularBrand/acura-logo.png";
import Fiat from "../../../Assets/PopularBrand/fiat-logo.png";
import Holden from "../../../Assets/PopularBrand/holden-logo.png";
import Lamborghini from "../../../Assets/PopularBrand/lamborghini-logo.png";
import Lotus from "../../../Assets/PopularBrand/lotus-logo.png";
import Maybach from "../../../Assets/PopularBrand/maybach-logo.png";
import Saab from "../../../Assets/PopularBrand/saab-logo.png";
import Tesla from "../../../Assets/PopularBrand/tesla-logo.png";
import Toyota from "../../../Assets/PopularBrand/toyota-logo.png";

import Image from "next/image";
import Link from "next/link";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const brandData = [
  {
    id: 1,
    brandName: "Acura",
    brandImage: Acura,
  },
  {
    id: 2,
    brandName: "Fiat",
    brandImage: Fiat,
  },
  {
    id: 3,
    brandName: "Holden",
    brandImage: Holden,
  },
  {
    id: 4,
    brandName: "Lamborghini",
    brandImage: Lamborghini,
  },
  {
    id: 5,
    brandName: "Lotus",
    brandImage: Lotus,
  },
  {
    id: 6,
    brandName: "Maybach",
    brandImage: Maybach,
  },
  {
    id: 7,
    brandName: "Saab",
    brandImage: Saab,
  },
  {
    id: 8,
    brandName: "Tesla",
    brandImage: Tesla,
  },
  {
    id: 9,
    brandName: "Toyota",
    brandImage: Toyota,
  },
];

const PopualrBrand = () => {
  const [updateData, setUpdateData] = useState(12);
  const showCard = () => {
    if (updateData == 12) {
      setUpdateData((p) => p + brandData.length);
    } else {
      setUpdateData((p) => p - brandData.length);
    }
  };

  return (
    <section>
      <div className="">
        <div className="md:w-[100%] mx-auto mt-7 md:mt-10 mb-5 md:mb-20 md:block ">
          <div className="text-center leading-10 mb-5 md:mb-8">
            <h1 className="lg:text-3xl uppercase xxs:text-2xl  text-black font-bold">
              Popular Brands
            </h1>
          </div>
          <div className=" rounded-lg pb-[1px]">
            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6  md:pt-5 gap-5">
              {brandData.slice(0, updateData).map((child) => {
                const { id, brandName, brandImage } = child;
                // console.log(id, "id form cetagory");
                return (
                  <div
                    className="color-b bg-white p-2 md:p-3 text-center rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-red-500"
                    key={id}
                  >
                    <Link href={`/brand/${brandName}`}>
                      <Image
                        alt="image"
                        src={brandImage}
                        className="chele items-center justify-center  inline-flex"
                        width={65}
                        height={65}
                      />

                      <div className="dark:text-black text-sm font-semibold tracking-wide cursor-pointer">
                        {brandName}
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            <p
              className="flex justify-end items-center text-black hover:text-red-500 text-[12px] my-2 px-1 pr-4 tracking-wide  hover:text-red-10 cursor-pointer"
              onClick={() => showCard()}
            >
              {`Read ${updateData == 12 ? "Less" : "More"}`}{" "}
              {updateData == 12 ? (
                <AiFillCaretUp className="mt-1 text-[15px]" />
              ) : (
                <AiFillCaretDown className="mt-1 text-[15px]" />
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopualrBrand;
