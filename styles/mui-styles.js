import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
  typography: {
    fontFamily: "Vazirmatn, sans-serif",
    h6: {
      fontSize: "16px",
    },

    p: {
      fontSize: "14px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#E94560",
          "&:hover": {
            backgroundColor: "#9a2c42",
          },
        },
      },
    },
  },

  // TODO: add gradient
  palette: {
    mode: "dark",
    primary: {
      main: "#8254ce",
      light: "#b085f5",
      dark: "#6a3b9a",
    },
    secondary: {
      main: "#E94560",
      light: "#ff7b93",
      dark: "#b61827",
    },

    background: {
      default: "#16213E",
      paper: "#081d3a",
    },
    text: {
      primary: "#d3d3d3",
      secondary: "#b4b4b4",
    },
    common: {
      primary: {
        main: "#8254ce",
      },
    },
  },
});
