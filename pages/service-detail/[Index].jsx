import { DataContextApi } from "@/src/Context/DataContext";
import ChatLayout from "@/src/Layouts/ChatLayout";
import MainLayout from "@/src/Layouts/MainLayout";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

const Index = () => {
  const { baseUrl } = useContext(DataContextApi);
  const router = useRouter();
  const { Index } = router.query;
  const searviceId = Index;
  const [serviceByIdData, setServiceByIdData] = React.useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/api/service/${searviceId}`)
      .then((res) => res.json())
      .then((data) => {
        setServiceByIdData(data.data);
      });
  }, [baseUrl, searviceId]);

  if (!searviceId) {
    return (
      <p className="flex justify-center items-center text-2xl ">Loading...</p>
    );
  }

  return (
    <MainLayout>
      <ChatLayout>
        <section className="my-4">
          {serviceByIdData &&
            serviceByIdData.map((service) => {
              return (
                <div
                  className="cardBody flex flex-col justify-center items-center"
                  key={service._id}
                >
                  <div>
                    <Image
                      src={service?.image}
                      alt={service?.services}
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="cardBody__details my-4">
                    <h2 className="cardBody__details__title font-semibold mb-2">
                      {service?.services}
                    </h2>
                    <p className="cardBody__details__description">
                      {service?.details}
                    </p>
                  </div>
                </div>
              );
            })}
        </section>
      </ChatLayout>
    </MainLayout>
  );
};

export default Index;
