import React, { useState } from "react";
import BallJoints from "../../../Assets/Category/balljoint.png";
import Bushings from "../../../Assets/Category/bushing.png";
import CoilSprings from "../../../Assets/Category/coilspring.png";
import ControlArms from "../../../Assets/Category/controlarms.png";
import LinkAssy from "../../../Assets/Category/linkassy.png";
import ShockAbsorbers from "../../../Assets/Category/shockabsorber.png";
import Exhaustmanifoldsystem from "../../../Assets/Category/exhaust&manifoldsystem.png";
import Driveshaft from "../../../Assets/Category/driveshaft.png";
import Tierod from "../../../Assets/Category/tierod.png";
import Image from "next/image";
import Link from "next/link";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const cetegoryData = [
  {
    id: 1,
    categories: "Shock Absorbers",
    image: ShockAbsorbers,
  },
  {
    id: 2,
    categories: "Control Arms",
    image: ControlArms,
  },
  {
    id: 3,
    categories: "Coil Springs",
    image: CoilSprings,
  },
  {
    id: 4,
    categories: "Bushings",
    image: Bushings,
  },
  {
    id: 5,
    categories: "Ball Joints",
    image: BallJoints,
  },
  {
    id: 6,
    categories: "Link Assy",
    image: LinkAssy,
  },
  {
    id: 7,
    categories: "Exhaust & Manifold System",
    image: Exhaustmanifoldsystem,
  },
  {
    id: 8,
    categories: "Driveshaft",
    image: Driveshaft,
  },
  {
    id: 9,
    categories: "Tie Rod",
    image: Tierod,
  },
];

const PopualrCategory = () => {
  const [updateData, setUpdateData] = useState(12);
  const showCard = () => {
    if (updateData == 12) {
      setUpdateData((p) => p + cetegoryData.length);
    } else {
      setUpdateData((p) => p - cetegoryData.length);
    }
  };

  return (
    <section>
      <div className="">
        <div className="md:w-[100%] mx-auto mt-7 md:mt-10 mb-5 md:mb-20 md:block ">
          <div className="text-center leading-10 mb-5 md:mb-8">
            <h1 className="lg:text-3xl uppercase xxs:text-2xl  text-black font-bold">
              Popular Categories
            </h1>
          </div>
          <div className=" rounded-lg pb-[1px]">
            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6  md:pt-5 gap-5">
              {cetegoryData.slice(0, updateData).map((child) => {
                const { id, categories, image } = child;
                // console.log(id, "id form cetagory");
                return (
                  <div
                    className="color-b bg-white p-2 md:p-3 text-center rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-red-500"
                    key={id}
                  >
                    <Link href={`/category/${categories}`}>
                      <Image
                        alt="image"
                        src={image}
                        className="chele items-center justify-center  inline-flex"
                        width={65}
                        height={65}
                      />

                      <div className="dark:text-black text-sm font-semibold tracking-wide cursor-pointer">
                        {categories}
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

export default PopualrCategory;
