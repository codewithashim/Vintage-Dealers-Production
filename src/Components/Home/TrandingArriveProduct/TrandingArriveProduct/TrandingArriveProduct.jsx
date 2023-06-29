import React from "react";
import NewArrivals from "../NewArrivals/NewArrivals";
import TrandingProduct from "../TrandingProduct/TrandingProduct";


const TrandingArriveProduct = () => {
  return (
    <section className="md:grid grid-cols-4 gap-4 py-[30]">
      <div className="">
        <TrandingProduct />
      </div>
      <div className="col-span-3">
        <NewArrivals />
      </div>
    </section>
  );
};

export default TrandingArriveProduct;
