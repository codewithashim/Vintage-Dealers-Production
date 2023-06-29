import React from "react";
import Image from "next/image";
import ProductOne from "@/src/Assets/Products/Product_1.png";
import useProduct from "@/src/Hooks/useProduct/useProduct";

const productList = [
  {
    id: 1,
    productName: "Professional Cordless Drill Power Tools",
    price: 100,
    image: ProductOne,
    description:
      "  Santiago travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididun ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elitet.",
    addtionalInfo: [
      {
        height: 10,
        width: 10,
        weight: 10,
        dimentions: 10,
      },
    ],
  },
  {
    id: 2,
    productName: "Professional Cordless Drill Power Tools",
    price: 150,
    image: ProductOne,
    description:
      "  Santiago travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididun ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elitet.",
    addtionalInfo: [
      {
        height: 10,
        width: 10,
        weight: 10,
        dimentions: 10,
      },
    ],
  },
  {
    id: 3,
    productName: "Professional Cordless Drill Power Tools",
    price: 190,
    image: ProductOne,
    description:
      "  Santiago travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididun ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elitet.",
    addtionalInfo: [
      {
        height: 10,
        width: 10,
        weight: 10,
        dimentions: 10,
      },
    ],
  },
  {
    id: 4,
    productName: "Professional Cordless Drill Power Tools",
    price: 500,
    image: ProductOne,
    description:
      "  Santiago travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididun ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elitet.",
    addtionalInfo: [
      {
        height: 10,
        width: 10,
        weight: 10,
        dimentions: 10,
      },
    ],
  },
  {
    id: 5,
    productName: "Professional Cordless Drill Power Tools",
    price: 500,
    image: ProductOne,
    description:
      "  Santiago travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididun ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elitet.",
    addtionalInfo: [
      {
        height: 10,
        width: 10,
        weight: 10,
        dimentions: 10,
      },
    ],
  },
];

const TrandingProduct = () => {
  const { allProductData } = useProduct();

  const filterProductData = allProductData?.filter((data) => {
    return data?.productType === "TRANDING";
  });

  return (
    <section className="my-4 mx-2">
      <div className="title my-8">
        <h2 className="text-[1rem] md:text-[1.5rem] text-center md:text-left lg:text-3xl uppercase xxs:text-2xl  text-black font-bold">
          Tranding Product
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        {filterProductData &&
          filterProductData.map((product, Index) => {
            return (
              <div
                className="cardBody  md:m-0 flex justify-center items-center gap-4 px-6 border bg-white hover:border-red-500 color-b rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-red-500"
                key={Index}
              >
                <div className="productImage">
                  <Image
                    src={product?.productImage}
                    width={"130"}
                    height={"130"}
                    alt="Product Image"
                  />
                </div>
                <div className="productInfo p-2">
                  <p className="productName">{product?.productName}</p>
                  <p className="productPrice text-red-500 font-semibold pt-3">
                    ${product?.productPrice}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default TrandingProduct;
