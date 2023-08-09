import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
  title: {
    fontFamily: FONT.medium,
    fontWeight: "bold",
    fontSize: SIZES.xLarge,
    textAlign: "center",
    // color: COLORS.primary,
  },
  subtitle: {
    fontFamily: FONT.regular,
    fontWeight: "medium",
    fontSize: SIZES.large,
  },
});

export default styles;
