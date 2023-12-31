import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCartPlus, FaPhabricator } from "react-icons/fa";

const CategoryProduct = ({ filterProductData, productLoaded }) => {
  if (productLoaded) {
    return (
      <h2 className="text-2xl text-center text-red-500 font-bold mt-10">
        Loading...
      </h2>
    );
  }

  return (
    <div className="grid grid-cols-1 justify-center items-center mx-auto md:grid-cols-4 lg:grid-cols-4 gap-4">
      {filterProductData &&
        filterProductData.map((product, Index) => {
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
                    <Link
                      className="border  px-4 py-4 flex justify-center items-center gap-4 hover:border-red-500 color-b bg-white p-2 md:p-3 text-center rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-red-500"
                      href={`/product-detail/${product?._id}`}
                    >
                      <FaCartPlus />
                      Product Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CategoryProduct;
