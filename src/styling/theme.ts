import { createTheme } from "@mui/material";

import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Components {
    MuiTimelineDot?: {
      styleOverrides?: {
        root?: React.CSSProperties;
      };
    };
  }
}

export default createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          backgroundColor: "white", // Sets the background color of TimelineDot to white
        },
      },
    },
  },
  typography: {
    fontFamily: "Source Code Pro, monospace",
    h6: {
      color: "#FFC107",
    },
    // body2:{fontSize:'1rem'},
  },
});
