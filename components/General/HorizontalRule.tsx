import React from "react";
import { View } from "react-native";

interface HorizontalRuleInterface {
  width: string;
  height: string | number;
  position: string;
  marginTop: number;
}

const HorizontalRule = ({
  width,
  height,
  position,
  marginTop,
}: HorizontalRuleInterface) => {
  return (
    <View
      style={{
        height: height,
        backgroundColor: "#DDDDDD",
        marginVertical: 10,
        width: width,
        alignSelf: position,
        marginTop,
      }}
    />
  );
};

export default HorizontalRule;
