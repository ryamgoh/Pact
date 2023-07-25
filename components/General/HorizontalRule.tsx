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
        height: 1,
        backgroundColor: "#DDDDDD",
        marginVertical: 10,
        width,
        height,
        alignSelf: position,
        marginTop,
      }}
    />
  );
};

export default HorizontalRule;
