import React from "react";
import customarSapurt from "@/src/Assets/Icons/support.png";
import Searvices from "@/src/Assets/Icons/searvices.png";
import WordWidSupport from "@/src/Assets/Icons/world.png";
import Image from "next/image";

const homeInfo = [
  {
    id: 1,
    title: "Customer Support",
    subtitle: "24/7 We are customer care best support",
    icon: customarSapurt,
  },
  {
    id: 2,
    title: "Fast Service Provider",
    subtitle: "Prompt service that never compromises quality",
    icon: Searvices,
  },
  {
    id: 3,
    title: "World-class Product Supplier",
    subtitle: "Delivering products that exceed expectations",
    icon: WordWidSupport,
  },
];

const HomeInfoCard = () => {
  return (
    <section>
      <div className="container md:flex justify-around items-center sm:my-4 gap-4">
        {homeInfo.map((info, Index) => {
          return (
            <div
              className="cardBody mt-4 md:m-0 flex justify-center items-center gap-4 bg-white px-6 border py-20  hover:border-red-500 color-b rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-red-500 "
              key={Index}
            >
              <div>
                <Image
                  src={info?.icon}
                  width={100}
                  height={100}
                  className="w-20 object-cover"
                  alt="Red Rose Auto"
                />
              </div>
              <div>
                <h3 className="font-bold text-[1.2rem]">{info.title}</h3>
                <p className="text-gray-500">{info.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeInfoCard;
