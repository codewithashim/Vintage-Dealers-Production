import React, { useContext, useEffect, useState } from "react";
import ChatLayout from "@/src/Layouts/ChatLayout";
import MainLayout from "@/src/Layouts/MainLayout";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import Link from "next/link";
import Image from "next/image";
import AboutUsBuilding from "../../src/Assets/About/AboutUsBanner.png";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { DataContextApi } from "@/src/Context/DataContext";

const Index = () => {
  const { baseUrl } = useContext(DataContextApi);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/api/photo-gelary`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data?.length !== 0) {
          const processedData = data?.data?.map((item) => ({
            original: item?.photoGelaryImage,
            thumbnail: item?.photoGelaryImage,
          }));
          setImages(processedData);
        }
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, [baseUrl]);

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
                  About Red Rose Auto Trading W.L.L
                </h2>
              </div>

              <div className="mb-4">
                <p className="text-center md:text-left text-[1.3rem] text-black">
                  Red Rose Auto Trading W.L.L is a renowned auto spare parts
                  company & supplier, based in Doha-Qatar. We provide Automotive
                  services especially for your Offroad Vehicles. such as Shock
                  Absorbers, Bushings, Control Arms , Mounts, Manifold &
                  Exhausts, Electrical items as your preference. <br />
                  We started our journey as a service center, but now we have
                  made our identity as a well-known spare parts company &
                  supplier in all over the country by the customer satisfaction
                  & by providing world-class vehicle spare parts. Red Rose Auto
                  has more then 10+ service centers as well in different
                  locations in Qatar. In our service center, We have experienced
                  technician & Mechanics who can install our own products
                  professionally & can help you by proper consultant. Visit our
                  warehouses & service centers for more information & a proper
                  consultancy to convert your daily driven car into a giant
                  offroad car.
                </p>
              </div>
            </div>

            <div className="container mx-auto">
              <div className="title my-6">
                <h2 className="text-center md:text-left text-[1rem] md:text-[1.5rem] lg:text-3xl uppercase xxs:text-2xl  text-black font-bold">
                  View Our Gallery
                </h2>
              </div>
              <ImageGallery
                items={images}
                alt="Red Rose Auto"
                className="w-full"
              />
            </div>
          </div>
        </section>
      </ChatLayout>
    </MainLayout>
  );
};

export default Index;
