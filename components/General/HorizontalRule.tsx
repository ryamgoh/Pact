import React from "react";
import { ColorValue, FlexAlignType, View } from "react-native";

interface HorizontalRuleInterface {
<<<<<<< HEAD
  width: string;
  height: string | number;
  position?: string;
  marginTop: number;
  backgroundColor?: string;
=======
  width: number | string | undefined;
  height: number | string | undefined;
  position: "auto" | FlexAlignType | undefined;
  marginTop?: number | string | undefined;
>>>>>>> 7f186822421b3051f42e92af4606f1ac9b37723e
  marginBottom?: number | string | undefined;
  backgroundColor?: ColorValue | undefined;
}

const HorizontalRule = ({
  width,
  height,
  position,
  marginTop,
  backgroundColor,
  marginBottom,
  backgroundColor = "#DDDDDD",
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
      }}
    />
  );
};

export default HorizontalRule;
