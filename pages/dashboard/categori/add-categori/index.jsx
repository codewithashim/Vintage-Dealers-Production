import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../../src/theme/theme";
import FullLayout from "../../../../src/Layouts/DashboardLayout";
import AddCategory from "@/src/Components/Dashboard/Category/AddCategory/AddCategory";

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <FullLayout>
        <section>
          <h2 className="my-4 font-bold">Add Category</h2>
          <AddCategory />
        </section>
      </FullLayout>
    </ThemeProvider>
  );
};

export default Index;
