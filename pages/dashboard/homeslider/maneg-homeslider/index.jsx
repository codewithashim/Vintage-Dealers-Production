import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../../src/theme/theme";
import FullLayout from "../../../../src/Layouts/DashboardLayout";
import ManageHomeSlider from "@/src/Components/Dashboard/HomeSlider/ManageHomeSlider/ManageHomeSlider";

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <FullLayout>
        <section>
          <ManageHomeSlider />
        </section>
      </FullLayout>
    </ThemeProvider>
  );
};

export default Index;
