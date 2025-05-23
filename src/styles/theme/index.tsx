import { createTheme, type ThemeOptions } from "@mui/material";

const generateTheme = (
  mode: NonNullable<ThemeOptions["palette"]>["mode"] = "light"
) => {
  const isDarkMode = mode === "dark";
  return createTheme({
    palette: {
      mode,
      primary: {
        main: isDarkMode ? "#90caf9" : "#1976d2",
        contrastText: isDarkMode ? "#0d1117" : "#fff",
      },
      secondary: {
        main: isDarkMode ? "#f48fb1" : "#9c27b0",
      },
      background: {
        default: isDarkMode ? "#181a20" : "#f4f6fb",
        paper: isDarkMode ? "#23272f" : "#fff",
      },
      text: {
        primary: isDarkMode ? "#e3e3e3" : "#1a1a1a",
        secondary: isDarkMode ? "#b0b8c1" : "#4f5b62",
      },
      divider: isDarkMode ? "#31363f" : "#e0e0e0",
      error: {
        main: isDarkMode ? "#ff6659" : "#d32f2f",
      },
      success: {
        main: isDarkMode ? "#66bb6a" : "#388e3c",
      },
      warning: {
        main: isDarkMode ? "#ffa726" : "#fbc02d",
      },
      info: {
        main: isDarkMode ? "#29b6f6" : "#0288d1",
      },
    },
    typography: {
      fontFamily: 'Inter, Roboto, "Helvetica Neue", Arial, sans-serif',
      h1: { fontWeight: 700, fontSize: "2.2rem" },
      h2: { fontWeight: 600, fontSize: "1.7rem" },
      h3: { fontWeight: 600, fontSize: "1.3rem" },
      body1: { fontSize: "1rem" },
      body2: { fontSize: "0.95rem" },
      button: { textTransform: "none", fontWeight: 600 },
    },
    shape: { borderRadius: 12 },
    components: {},
  });
};

export default generateTheme;
