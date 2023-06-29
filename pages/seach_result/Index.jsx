import { DataContextApi } from "@/src/Context/DataContext";
import ChatLayout from "@/src/Layouts/ChatLayout";
import MainLayout from "@/src/Layouts/MainLayout";
import { Breadcrumbs, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCartPlus, FaPhabricator } from "react-icons/fa";
import Image from "next/image";

const Index = () => {
  const [searchresultData, setSearchresultData] = useState([]);

  useEffect(() => {
    const searchresultLocalData = localStorage.getItem("searchRes");
    setSearchresultData(JSON.parse(searchresultLocalData));
  }, []);

  return (
    <main>
      <MainLayout>
        <ChatLayout>
          <div role="presentation" className="py-4 px-2 bg-neutral-100">
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/"
              >
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Home
              </Link>
              <Typography
                sx={{ display: "flex", alignItems: "center" }}
                color="text.primary"
              >
                <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Search Result
              </Typography>
            </Breadcrumbs>
          </div>

          <section className="my-6">
            <div className="grid grid-cols-1 justify-center items-center mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchresultData &&
                searchresultData.length > 0 &&
                searchresultData?.map((product) => {
                  return (
                    <div
                      className="cardBody md:m-0 w-[320px] mx-auto  flex flex-col hover:border-red-500 color-b bg-white p-2 md:p-3 rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 "
                      key={product._id}
                    >
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
                            <button className="border  px-4 py-4 flex justify-center items-center gap-4 hover:border-red-500 color-b bg-white p-2 md:p-3 text-center rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-red-500">
                              <FaCartPlus />
                              Add to Cart
                            </button>
                          </div>
                          <div className="text-4xl text-gray-400 border p-2 rounded-full cursor-pointer hover:border-red-500 color-b bg-white  md:p-3 text-center duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-red-500">
                            <FaPhabricator />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </section>
        </ChatLayout>
      </MainLayout>
    </main>
  );
};

export default Index;
