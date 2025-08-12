import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#004d40" }, // Dark Teal
    secondary: { main: "#ff9800" }, // Orange
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h6: { fontWeight: 600 },
    body1: { fontSize: "1rem" },
  },
});

export default theme;
