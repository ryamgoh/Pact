import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
  MainCanvas: {
    padding: 10,
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
  },
  MainScrollableCanvas: {
    padding: 10,
    flex: 1,
    flexDirection: "column",
  },
});

export default styles;
