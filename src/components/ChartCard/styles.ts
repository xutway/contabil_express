import { StyleSheet } from "react-native";

import { getTheme } from "../../tokens/theme";

const { shadows, text } = getTheme();

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexShrink: 1,
    minWidth: 150,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "white",
    alignItems: "center",
    ...shadows,
  },
  text: {
    color: text.primary,
    fontFamily: "Inter_300Light",
    fontSize: 14,
  },
  pieText: {
    textAlign: "center",
    fontSize: 20,
  },
  chartContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  pieChart: {
    marginVertical: 20,
  },
  absoluteCenter: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
