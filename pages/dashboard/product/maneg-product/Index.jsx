import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../../src/theme/theme";
import FullLayout from "../../../../src/Layouts/DashboardLayout";
import ManegProduct from "@/src/Components/Dashboard/Shop/ManegProduct/ManegProduct";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <FullLayout>
        <section className="mx-6">
          <div role="presentation" className="py-4 px-2 bg-neutral-100">
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/"
              >
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Dashboard
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/dashboard/product/add-product"
              >
                <Typography
                  sx={{ display: "flex", alignItems: "center" }}
                  color="text.primary"
                >
                  <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                  Add Product
                </Typography>
              </Link>

              <Typography
                sx={{ display: "flex", alignItems: "center" }}
                color="text.primary"
              >
                <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Manage Product
              </Typography>
            </Breadcrumbs>
          </div>

          <section className="my-4">
            <ManegProduct />
          </section>
        </section>
      </FullLayout>
    </ThemeProvider>
  );
};

export default Index;
