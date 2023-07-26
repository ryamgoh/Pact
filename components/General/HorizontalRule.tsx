import React from "react";
import { FlexAlignType, View } from "react-native";

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
