import { ThemeProvider } from "@mui/material";
import { AppRoutes } from "./pages/AppRoutes";
import { MUI_THEME } from "./config/theme.config";

function App() {
  return (
    <ThemeProvider theme={MUI_THEME}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
