import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const GrayDot = () => {
  return <View style={styles.dot} />;
};

const styles = StyleSheet.create({
  dot: {
    width: 4,
    height: 4,
    borderRadius: 5,
    backgroundColor: COLORS.gray2, // Replace this with the desired gray color
  },
});

export default GrayDot;
