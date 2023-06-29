import useCommonApiData from "@/src/Hooks/useCommonApiData/useCommonApiData";
import Link from "next/link";
import React from "react";
import { FaMixer, FaThLarge } from "react-icons/fa";
import BestShellingProduct from "../BestShellingProduct/BestShellingProduct";

const SearviceAndBestShelling = () => {
  const { serviceData } = useCommonApiData();

  return (
    <section className="md:grid grid-cols-4 gap-4 py-[30] mb-8">
      <div className="">
        <div className="title my-6">
          <h2 className=" text-[1rem] md:text-[1.5rem] text-center md:text-left lg:text-3xl uppercase xxs:text-2xl  text-black font-bold">
            SERVICES
          </h2>
        </div>

        <div>
          <button className="bg-red-500 text-white  rounded-lg flex justify-center gap-2 items-center w-full p-4">
            <FaThLarge /> ALL SERVICES
          </button>
        </div>
        <div className="overflow-y-auto h-[590px]">
          {serviceData &&
            serviceData.length &&
            serviceData.map((service, Index) => {
              const { _id } = service;
              return (
                <div
                  className="bg-white rounded-md list-none justify-center items-center gap-4 px-6 border py-3 color-b  text-center  duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-red-500"
                  key={Index}
                >
                  <li className="py-3 border-b-2 px-4">
                    <Link
                      href={`/service-detail/${_id}`}
                      className="list-none  hover:text-red-500"
                    >
                      {service?.services}
                    </Link>
                  </li>
                </div>
              );
            })}
        </div>
      </div>

      <div className="col-span-3">
        <BestShellingProduct />
      </div>
    </section>
  );
};

export default SearviceAndBestShelling;
