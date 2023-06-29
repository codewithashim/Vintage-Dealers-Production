import ChatLayout from "@/src/Layouts/ChatLayout";
import MainLayout from "@/src/Layouts/MainLayout";
import React, { useContext, useState, useEffect } from "react";
import { DataContextApi } from "@/src/Context/DataContext";
import { useRouter } from "next/router";
import CheckoutForm from "@/src/Components/CheckoutForm/CheckoutForm";

const Index = () => {
  const { baseUrl } = useContext(DataContextApi);
  const router = useRouter();
  const { index } = router.query;
  const productId = index;
  const [productByIdData, setProductByIdData] = useState([]);

  useEffect(() => {
    if (productId) {
      fetch(`${baseUrl}/api/product/${productId}`)
        .then((res) => res.json())
        .then((data) => {
          setProductByIdData(data?.data);
        });
    }
  }, [baseUrl, productId]);

  const productName = productByIdData?.map((item) => item?.productName);

  if (!productId) {
    return (
      <p className="flex justify-center items-center text-2xl">Loading...</p>
    );
  }

  return (
    <MainLayout>
      <ChatLayout>
        <div>
          <h1 className="font-bold text-2xl">Payment for {productName}</h1>
          <div className="divider"></div>
        </div>
        <div className="border p-4 m-4 w-96 shadow-lg rounded">
          <CheckoutForm productByIdData={productByIdData} />
        </div>
      </ChatLayout>
    </MainLayout>
  );
};

export default Index;
