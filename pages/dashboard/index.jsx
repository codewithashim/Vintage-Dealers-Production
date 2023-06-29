import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/Layouts/DashboardLayout";
import AdminAccessRoute from "@/src/Components/PrivetRoute/AdminAccessRoute";
import TestDriveRequest from "@/src/Components/Dashboard/TestDriveRequest/TestDriveRequest";

export default function Index() {
  return (
    <AdminAccessRoute>
      <ThemeProvider theme={theme}>
        <FullLayout>
          <TestDriveRequest />
        </FullLayout>
      </ThemeProvider>
    </AdminAccessRoute>
  );
}
