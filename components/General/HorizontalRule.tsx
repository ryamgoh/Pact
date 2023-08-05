import React from "react";
import { ColorValue, FlexAlignType, View } from "react-native";

interface HorizontalRuleInterface {
  width: number | string | undefined;
  height: number | string | undefined;
  position: "auto" | FlexAlignType | undefined;
  marginTop?: number | string | undefined;
  marginBottom?: number | string | undefined;
  marginHorizontal?: number | string | undefined;
  marginVertical?: number | string | undefined;
  backgroundColor?: ColorValue | undefined;
}

const HorizontalRule = ({
  width,
  height,
  position,
  marginHorizontal,
  marginVertical,
  marginTop,
  marginBottom,
  backgroundColor = "white",
}: HorizontalRuleInterface) => {
  return (
    <View
      style={{
        height: height,
        backgroundColor: backgroundColor,
        width: width,
        alignSelf: position,
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginHorizontal: marginHorizontal,
        marginVertical: marginVertical,
      }}
    />
  );
};

export default HorizontalRule;
