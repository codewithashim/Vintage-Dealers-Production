import ChatLayout from "@/src/Layouts/ChatLayout";
import MainLayout from "@/src/Layouts/MainLayout";
import React from "react";
import { useRouter } from "next/router";
import useShopHooks from "@/src/Hooks/useShopHooks/useShopHooks";
import CategoryProduct from "@/src/Components/CategoryProduct/CategoryProduct";
import useProduct from "@/src/Hooks/useProduct/useProduct";

const Index = () => {
  const { productLoaded } = useShopHooks();
  const { allProductData } = useProduct();
  const router = useRouter();
  const { Index } = router.query;
  const CategoryName = Index;

  const filterProductData = allProductData?.filter((data) => {
    return data.productCategory === CategoryName;
  });

  return (
    <MainLayout>
      <ChatLayout>
        <section className="my-4">
          <CategoryProduct
            filterProductData={filterProductData}
            productLoaded={productLoaded}
          />
        </section>
      </ChatLayout>
    </MainLayout>
  );
};

export default Index;
