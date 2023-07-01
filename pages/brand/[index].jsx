import ChatLayout from "@/src/Layouts/ChatLayout";
import MainLayout from "@/src/Layouts/MainLayout";
import React from "react";
import { useRouter } from "next/router";
import useShopHooks from "@/src/Hooks/useShopHooks/useShopHooks";
import Brands from "@/src/Components/Brands/Brands";
import useProduct from "@/src/Hooks/useProduct/useProduct";

const Index = () => {
  const { productLoaded } = useShopHooks();
  const { allProductData } = useProduct();
  const router = useRouter();
  const { index } = router.query;
  const bradnName = index;

  const filterProductData = allProductData?.filter((data) => {
    return data.productBrand === bradnName;
  });

  return (
    <MainLayout>
      <ChatLayout>
        <section className="my-4">
          <Brands
            filterProductData={filterProductData}
            productLoaded={productLoaded}
          />
        </section>
      </ChatLayout>
    </MainLayout>
  );
};

export default Index;
