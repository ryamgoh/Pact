import React from "react";
import { FlexAlignType, View } from "react-native";

interface HorizontalRuleInterface {
  width: number | string | undefined;
  height: number | string | undefined;
  position: "auto" | FlexAlignType | undefined;
  marginTop?: number | string | undefined;
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
        width: width,
        alignSelf: position,
        marginTop: marginTop,
      }}
    />
  );
};

export default HorizontalRule;
