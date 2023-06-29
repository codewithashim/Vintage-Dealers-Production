import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../../src/theme/theme";
import FullLayout from "../../../../src/Layouts/DashboardLayout";
import ManegBrand from "@/src/Components/Dashboard/Brand/ManegBrand/ManegBrand";

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <FullLayout>
        <section>
          <h2>Maneg Brand</h2>
          <ManegBrand />
        </section>
      </FullLayout>
    </ThemeProvider>
  );
};

export default Index;
