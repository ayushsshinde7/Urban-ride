import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#009688", // Teal
    },
    secondary: {
      main: "#004d40", // Dark teal
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h6: { fontWeight: 600 },
    body1: { fontSize: "0.95rem" },
  },
  shape: {
    borderRadius: 20,
  },
});

export default theme;
