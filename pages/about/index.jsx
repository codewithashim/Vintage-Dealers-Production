import React, { useContext } from "react";
import ChatLayout from "@/src/Layouts/ChatLayout";
import MainLayout from "@/src/Layouts/MainLayout";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import Link from "next/link";
import Image from "next/image";
import AboutUsBuilding from "../../src/Assets/About/AboutUsBanner.png";
import "react-image-gallery/styles/css/image-gallery.css";
import { DataContextApi } from "@/src/Context/DataContext";

const Index = () => {
  const { baseUrl } = useContext(DataContextApi);

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
              About Us
            </Typography>
          </Breadcrumbs>
        </div>

        <section className="py-4">
          <div>
            <div className="topHeadImage">
              <Image
                src={AboutUsBuilding}
                alt="Red Rose Auto"
                width={"100%"}
                height={"100%"}
                className=" w-full"
              />
            </div>
            <div className="container mx-auto">
              <div className="title my-6">
                <h2 className="text-center md:text-left text-[1rem] md:text-[1.5rem] lg:text-3xl uppercase xxs:text-2xl  text-black font-bold">
                  Vintage Dealers
                </h2>
              </div>

              <div className="mb-4">
                <p className="text-center md:text-left text-[1.3rem] text-black">
                  Vintage Dealers is a platform that connects vintage car
                  enthusiasts with vintage car dealers. It is a one-stop
                  solution for all your vintage car needs. We are a team of
                  vintage car enthusiasts who are passionate about vintage cars
                  and want to make it easier for people to buy and sell vintage
                  cars. We are here to help you find the perfect vintage car for
                  your needs. We have a wide range of vintage cars available for
                  sale, from classic cars to modern classics. We also offer a
                  range of services to help you with your vintage car needs,
                  including insurance, finance, and restoration. If you are
                  looking for a vintage car, we can help you find the perfect
                  one for your needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ChatLayout>
    </MainLayout>
  );
};

export default Index;
