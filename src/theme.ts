"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "&": { background: "transparent" },
          "&:hover": { background: "transparent" },
          "&.Mui-focused": { background: "transparent" }
        }
      }
    }
  }
});

export default theme;