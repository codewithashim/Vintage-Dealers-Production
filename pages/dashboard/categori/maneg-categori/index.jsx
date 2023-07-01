import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../../src/theme/theme";
import FullLayout from "../../../../src/Layouts/DashboardLayout";

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <FullLayout>
        <section>
          <h2> Manage categories</h2>
        </section>
      </FullLayout>
    </ThemeProvider>
  );
};

export default Index;
