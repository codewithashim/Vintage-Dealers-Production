import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../../src/theme/theme";
import FullLayout from "../../../../src/Layouts/DashboardLayout";
import AddService from "@/src/Components/Dashboard/Services/AddService/AddService";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <FullLayout>
        <section>
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
                href="/dashboard/searvices/maneg-searvices"
              >
                <Typography
                  color="text.primary"
                  className="hover:bg-black-700  rounded flex gap-2 justify-center items-center"
                >
                  <FaCartPlus></FaCartPlus> Manage Services
                </Typography>
              </Link>

              <Typography
                sx={{ display: "flex", alignItems: "center" }}
                color="text.primary"
              >
                <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Add Service
              </Typography>
            </Breadcrumbs>
          </div>

          <div className="titleSection my-4">
            <h2 className="font-bold text-2xl ">Add Service</h2>
          </div>

          <AddService />
        </section>
      </FullLayout>
    </ThemeProvider>
  );
};

export default Index;
