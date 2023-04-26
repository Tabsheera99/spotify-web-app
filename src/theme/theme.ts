import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
  },
  palette: {
    success: {
      main: "#1ED760",
    },
    secondary: {
      main: "#CBB2B25E",
      dark: "#0F0E0E",
      light: "#221A1A",
    },
    info: {
      main: "#FFFFFF",
      light: "#D8C4C4",
    },
  },
});

export default theme;
