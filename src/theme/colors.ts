import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#66FCF1",
  primaryBright: "#66FCF1",
  primaryDark: "#66FCF1",
  secondary: "#66FCF1",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#1F2833",
  backgroundDisabled: "#E9EAEB",
  contrast: "#0B0C10",
  invertedContrast: "#FFFFFF",
  input: "#FFFFFF",
  tertiary: "#EFF4F5",
  text: "#FFFFFF",
  textDisabled: "#BDC2C4",
  textSubtle: "#FFFFFF",
  borderColor: "#E9EAEB",
  card: "#0B0C10",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#66FCF1",
  background: "#1F2833",
  backgroundDisabled: "#E9EAEB",
  contrast: "#0B0C10",
  invertedContrast: "#FFFFFF",
  input: "#66FCF1",
  primaryDark: "#136B49",
  tertiary: "#EFF4F5",
  text: "#FFFFFF",
  textDisabled: "#BDC2C4",
  textSubtle: "#66FCF1",
  borderColor: "#E9EAEB",
  card: "#0B0C10",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
