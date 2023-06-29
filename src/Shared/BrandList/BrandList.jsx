import Link from "next/link";
import React from "react";
import { FaThLarge } from "react-icons/fa";

const brandData = [
  {
    id: 1,
    brandName: "Profender",
  },
  {
    id: 2,
    brandName: "Gabriel",
  },
  {
    id: 3,
    brandName: "Tough Dog",
  },
  {
    id: 4,
    brandName: "King Springs",
  },
  {
    id: 5,
    brandName: "Radflo",
  },
  {
    id: 6,
    brandName: "King Shocks",
  },
  {
    id: 7,
    brandName: "Amada Xtreme",
  },
  {
    id: 8,
    brandName: "Super DK Japan",
  },
  {
    id: 9,
    brandName: "RBI",
  },
  {
    id: 10,
    brandName: "Bilstein",
  },
  {
    id: 11,
    brandName: "Toby's",
  },
];

const BrandList = () => {
  return (
    <section>
      <div>
        <button className="bg-red-500 text-white  rounded-lg flex justify-center gap-2 items-center w-full p-4">
          <FaThLarge /> Brand
        </button>
      </div>
      <div className="overflow-y-auto h-[590px]">
        {brandData.map((brand, Index) => {
          return (
            <div
              className="bg-white rounded-md list-none justify-center items-center gap-4 px-6 border py-3 color-b  text-center  duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-red-500"
              key={Index}
            >
              <li className="py-3 border-b-2 px-4">
                <Link href="#" className="list-none  hover:text-red-500">
                  {brand?.brandName}
                </Link>
              </li>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BrandList;
