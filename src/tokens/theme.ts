export const blueTheme = {
  tokens: {
    primary0: "#E5F1FB",
    primary50: "#CCE9FF",
    primary100: "#ADDBFF",
    primary200: "#7CC2FF",
    primary300: "#4AA9FF",
    primary400: "#1A91FF",
    primary500: "#0077E6",
    primary600: "#005DB4",
    primary700: "#004282",
    primary800: "#002851",
    primary900: "#011838",
    primary950: "#000711",
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
};
export const mainTheme = {
  tokens: {
    primary0: "#E5F1FB",
    primary50: "#CCE9FF",
    primary100: "#ADDBFF",
    primary200: "#7CC2FF",
    primary300: "#4AA9FF",
    primary400: "#1A91FF",
    primary500: "#0077E6",
    primary600: "#005DB4",
    primary700: "#004282",
    primary800: "#002851",
    primary900: "#011838",
    primary950: "#000711",
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
};

export type themeProps = typeof mainTheme;
export type themeType = "main" | "blue" | "remote";

export const handleTheme = (theme: themeType) => {
  return theme === "main" ? mainTheme : blueTheme;
};
