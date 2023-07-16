import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import ChatLayout from "@/src/Layouts/ChatLayout";
import MainLayout from "@/src/Layouts/MainLayout";
import Link from "next/link";
import AllProduct from "@/src/Components/Products/AllProduct/AllProduct";
import AllCategory from "@/src/Shared/AllCategory/AllCategory";
import TrandingProduct from "@/src/Components/Home/TrandingArriveProduct/TrandingProduct/TrandingProduct";
import BrandList from "@/src/Shared/BrandList/BrandList";

const Index = () => {
  return (
    <main>
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
                Product
              </Typography>
            </Breadcrumbs>
          </div>

          <section className="md:grid md:grid-cols-4 w-full mx-auto gap-4 py-[30px]">
            <section className="col-span-3">
              <AllProduct />
            </section>
            <section>
              <div>
                <AllCategory />
              </div>
              <div className="my-6">
              </div>
              <div>
                <TrandingProduct />
              </div>
            </section>
          </section>
        </ChatLayout>
      </MainLayout>
    </main>
  );
};

export default Index;
