import { StyleSheet } from "react-native";

import { getTheme } from "../../tokens/theme";

const { tokens, shadows, text } = getTheme();

export const styles = StyleSheet.create({
  container: {
    height: 90,
    display: "flex",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    ...shadows,
  },
  buttom: {
    alignItems: "center",
    backgroundColor: tokens.primary200,
    borderColor: "rgba(5, 5, 5, 0.432)",
    borderLeftWidth: 1,
    borderRadius: 50,
    borderRightWidth: 1,
    borderTopWidth: 5,
    display: "flex",
    height: 62,
    justifyContent: "center",
    marginBottom: 4,
    width: 62,
  },
  buttonContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    color: text.primary,
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    color: text.primary,
    fontFamily: "Inter_500Medium",
    fontSize: 13,
  },
  textBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    width: "60%",
  },
});
