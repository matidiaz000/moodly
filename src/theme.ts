"use client";
import { createTheme } from "@mui/material/styles";
import { esES as coreEsES } from '@mui/material/locale';
import { esES } from '@mui/x-date-pickers/locales';

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
  },
},
esES, // x-date-pickers translations
coreEsES, // core translations
);

export default theme;