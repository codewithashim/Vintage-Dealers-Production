import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../../src/theme/theme";
import FullLayout from "../../../../src/Layouts/DashboardLayout";
import AddBlog from "@/src/Components/Dashboard/Blogs/AddBlog/AddBlog";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from 'next/link';
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
                href="/dashboard/blog/maneg-blog"
              >
                <Typography
                  color="text.primary"
                  className="hover:bg-black-700  rounded flex gap-2 justify-center items-center"
                >
                  <FaCartPlus></FaCartPlus> Maneg Blog
                </Typography>
              </Link>

              <Typography
                sx={{ display: "flex", alignItems: "center" }}
                color="text.primary"
              >
                <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Add Blog
              </Typography>
            </Breadcrumbs>
          </div>

          <AddBlog />
        </section>
      </FullLayout>
    </ThemeProvider>
  );
};

export default Index;
