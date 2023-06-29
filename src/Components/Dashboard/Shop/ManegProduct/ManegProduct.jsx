import React from "react";
import ManageProductCard from "./ManageProductCard/ManageProductCard";
import useProduct from "@/src/Hooks/useProduct/useProduct";
import Paginetion from "@/src/Shared/Paginetion/Paginetion";

const ManegProduct = () => {
  const {
    products,
    page,
    handlePrevPage,
    totalPages,
    handleNextPage,
    setPage,
  } = useProduct();

  return (
    <section>
      <h2 className="py-4 text-2xl font-bold ">Manage Product</h2>

      <div className="grid md:grid-cols-3 gap-4 justify-center items-center">
        {products &&
          products.length &&
          products.map((product) => {
            return <ManageProductCard key={product._id} product={product} />;
          })}
      </div>
      <div>
        <Paginetion
          page={page}
          totalPages={totalPages}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          setPage={setPage}
        />
      </div>
    </section>
  );
};

export default ManegProduct;
