import React from "react";
import { FlexAlignType, View } from "react-native";

interface HorizontalRuleInterface {
  width: number | string | undefined;
  height: number | string | undefined;
  position: "auto" | FlexAlignType | undefined;
  marginTop?: number | string | undefined;
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
