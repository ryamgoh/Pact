import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
  MainCanvas: {
    padding: 20,
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
  },
  MainScrollableCanvas: {
    padding: 20,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
});

export default styles;
