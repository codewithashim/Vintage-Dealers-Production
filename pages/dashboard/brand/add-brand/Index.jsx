import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../../src/theme/theme";
import FullLayout from "../../../../src/Layouts/DashboardLayout";
import AddBrand from "@/src/Components/Dashboard/Brand/AddBrand/AddBrand";

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <FullLayout>
        <section>
          <h2>Add Brand</h2>
          <AddBrand />
        </section>
      </FullLayout>
    </ThemeProvider>
  );
};

export default Index;
