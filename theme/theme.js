import { createTheme, ThemeProvider } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4eac6d",
      contrastText: "#000000",
    },
    secondary: {
      main: "#1E1E1E",
      contrastText: "#ffffff",
    },
    accent: {
      main: "#262626",
      contrastText: "#ffffff",
    },
    default: {
      main: "#ffffff",
      contrastText: "#000000",
    },
    success: {
      main: "#0B964B",
      contrastText: "#ffffff",
    },
    background: {
      default: "#1E1E1E",
      paper: "#000000BE",
    },

    typography: {
      text: {
        primary: "#FFFFFF",
        secondary: "#050505",
        accent: "#F4E42C",
      },

      subtitle1: {
        fontSize: 12,
      },
      body1: {
        fontWeight: 500,
        fontSize: 14,
      },
      body2: {
        fontWeight: 400,
        color: "#F4E42C",
      },
    },
  },
  // shape: {
  //   borderRadius: 25,
  // },
});
