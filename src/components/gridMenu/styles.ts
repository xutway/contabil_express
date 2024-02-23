import { StyleSheet } from "react-native";

import { getTheme } from "../../tokens/theme";

const { tokens, shadows, text } = getTheme();
export const styles = StyleSheet.create({
  buttom: {
    alignItems: "center",
    backgroundColor: tokens.primary200,
    borderColor: "rgba(5, 5, 5, 0.432)",
    borderLeftWidth: 1,
    borderRadius: 50,
    borderRightWidth: 1,
    borderTopWidth: 5,
    display: "flex",
    height: 180 / 2.5,
    justifyContent: "center",
    marginBottom: 4,
    width: 180 / 2.5,
  },
  buttonContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  buttonText: {
    color: text.primary,
    fontFamily: "Inter_300Light",
    fontSize: 14,
  },
  container: {
    alignContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    height: 180,
    justifyContent: "space-around",
    padding: 20,
    width: "100%",
    ...shadows,
  },
  notification: {
    alignItems: "center",
    backgroundColor: tokens.primary300,
    borderRadius: 50,
    bottom: -4,
    display: "flex",
    elevation: 9,
    height: 30,
    justifyContent: "center",
    position: "absolute",
    right: -3,
    shadowColor: "#000000",
    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    width: 30,
    zIndex: 10,
  },
  notificationText: {
    color: "white",
    fontSize: 12,
  },
});
