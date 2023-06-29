import useShopHooks from "@/src/Hooks/useShopHooks/useShopHooks";
import Link from "next/link";
import React, { useContext } from "react";
import { FaThLarge } from "react-icons/fa";

const AllCategory = () => {
  const { categoryData } = useShopHooks();

  return (
    <section>
      <div>
        <button className="bg-red-500 text-white  rounded-lg flex justify-center gap-2 items-center w-full p-4">
          <FaThLarge /> ALL CATEGORIES
        </button>
      </div>
      <div className="overflow-y-auto h-[590px]">
        {categoryData &&
          categoryData.map((cet, Index) => {
            const { _id, categories } = cet;
            return (
              <div
                className="bg-white rounded-md list-none justify-center items-center gap-4 px-6 border py-3 color-b  text-center  duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-red-500"
                key={_id}
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
    </section>
  );
};

export default AllCategory;
