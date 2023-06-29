import React from "react";
import ChatLayout from "@/src/Layouts/ChatLayout";
import MainLayout from "@/src/Layouts/MainLayout";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import Link from "next/link";
import Image from "next/image";
import useCommonApiData from "@/src/Hooks/useCommonApiData/useCommonApiData";

const Index = () => {
  const { serviceData, serviceLoaded } = useCommonApiData();

  if (serviceLoaded) {
    return <h1>Loading ...</h1>;
  }

  return (
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
              Services
            </Typography>
          </Breadcrumbs>
        </div>

        <section className="py-4">
          <div className="title my-6">
            <h2 className="text-center md:text-left text-[1rem] md:text-[1.5rem] lg:text-3xl uppercase xxs:text-2xl  text-black font-bold">
              Services We Provide
            </h2>
          </div>

          <div className="container grid md:grid-cols-3 justify-around items-center sm:my-4 gap-4">
            {serviceData &&
              serviceData?.length &&
              serviceData?.map((info, Index) => {
                return (
                  <div
                    className="cardBody mt-4 md:m-0  bg-white px-6 border py-20  hover:border-red-500 color-b rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-red-500 "
                    key={Index}
                  >
                    <div className="h-2/3">
                      <Image
                        src={info?.image}
                        alt={info?.services}
                        width={500}
                        height={500}
                        className="object-cover "
                      />
                    </div>
                    <div className="py-4">
                      <Link
                        className="font-bold text-[1.2rem]"
                        href={`/service-detail/${info?._id}`}
                      >
                        {info.services}
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      </ChatLayout>
    </MainLayout>
  );
};

export default Index;
