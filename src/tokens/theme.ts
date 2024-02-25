import { StyleSheet } from "react-native";

const envoirment = process.env.EXPO_PUBLIC_ENVOIRMENT;

const theme = envoirment === "dev" ? "main" : process.env.EXPO_PUBLIC_THEME;

export const themeShadow = StyleSheet.create({
  shadow: {
    shadowColor: theme === "main" ? "#F229BD" : "#8097A6",
    shadowOffset: {
      width: -10,
      height: 16,
    },
    shadowOpacity: 1.25,
    shadowRadius: 18.46,
    elevation: 10,
  },
});

export const mainTheme = {
  tokens: {
    primary0: "#F229BD",
    primary50: "#F257C9",
    primary100: "#D99CAC",
    primary200: "#F2D0D9",
    primary300: "#F2D0D9",
    // primary400: "#fb7185",
    // primary500: "#f43f5e",
    // primary600: "#e11d48",
    // primary700: "#be123c",
    // primary800: "#9f1239",
    // primary900: "#881337",
    error: "#FF0000",
    success: "#00FF00",
    info: "#0000FF",
  },
  text: {
    primary: "#000000",
    secondary: "#FFFFFF",
    tertiary: "#F0F0F0",
  },
  images: {
    login: "",
    background: "",
  },
  shadows: themeShadow.shadow,
};
export const blueTheme = {
  tokens: {
    primary0: "#8097A6",
    primary50: "#A3C4D9",
    primary100: "#A4C4DB",
    primary200: "#C0D6E6",
    primary300: "#DEDEDE",
    // primary400: "#1A91FF",
    // primary500: "#0077E6",
    // primary600: "#005DB4",
    // primary700: "#004282",
    // primary800: "#002851",
    // primary900: "#011838",
    // primary950: "#000711",
    error: "#FF0000",
    success: "#00FF00",
    info: "#0000FF",
  },
  text: {
    primary: "#000000",
    secondary: "#FFFFFF",
    tertiary: "#F0F0F0",
  },
  images: {
    login: "",
    background: "",
  },
  shadows: themeShadow.shadow,
};

export type themeProps = typeof mainTheme;
export type themeType = "main" | "blue" | "remote";

export const handleTheme = (theme: themeType) => {
  return theme === "main" ? mainTheme : blueTheme;
};
export const getTheme = () => {
  return handleTheme(theme as themeType);
};
