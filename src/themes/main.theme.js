import { createTheme } from "@material-ui/core";

const mainTheme = createTheme({
  fontSource:
    "https://fonts.googleapis.com/css2?family=Manrope:wght@200&display=swap",
  fontFamily: "Manrope",
  fontStyle: "normal",
  color: {
    gray: "#999999",
    blue: "#2E1AAD",
    white: "#FFFFFF",
    grayWhite: "#EBEBEB",
    blueWhite: "#F5F7FA",
    redWhite: "#DDDDDD",
    black: "#000000",
    blackBlue: "#0B0D17",
    moreBlueWhite: "#D9DBE1",
    redBlack: "#231F20",
    grayRed: "#C4C4C4",
    redGray: "#D6D6D6",
    grayBlue: "#B1B3B6",
  },
});

export default mainTheme;
