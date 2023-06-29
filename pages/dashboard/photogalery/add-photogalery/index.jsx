import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../../src/theme/theme";
import FullLayout from "../../../../src/Layouts/DashboardLayout";
import AddPhotoGelary from "@/src/Components/Dashboard/PhotoGelary/AddPhotoGelary/AddPhotoGelary";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <FullLayout>
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
              href="/dashboard/photogalery/maneg-photogalery"
            >
              <Typography
                sx={{ display: "flex", alignItems: "center" }}
                color="text.primary"
              >
                <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Manege Photo Galary
              </Typography>
            </Link>

            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Add Photo Galary
            </Typography>
          </Breadcrumbs>
        </div>
        <section>
          <AddPhotoGelary />
        </section>
      </FullLayout>
    </ThemeProvider>
  );
};

export default Index;
