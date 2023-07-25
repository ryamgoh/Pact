import React from "react";
import { View } from "react-native";

interface HorizontalRuleInterface {
  width: string;
  height: string | number;
  position?: string;
  marginTop: number;
  backgroundColor?: string;
}

const HorizontalRule = ({
  width,
  height,
  position,
  marginTop,
  backgroundColor,
}: HorizontalRuleInterface) => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor,
        marginVertical: 10,
        width: width,
        alignSelf: position,
        marginTop,
        zIndex: 0,
      }}
    />
  );
};

export default HorizontalRule;
