import { View, Text, Image } from "react-native";
import React from "react";
import { icons } from "../../constants";

interface TimelinePinInterface {
  number: number;
  date: string;
}

const TimelinePins = ({ number, date }: TimelinePinInterface) => {
  return (
    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <Image
        source={icons.pinIcon}
        style={{
          position: "absolute",
          zIndex: 1,
          height: 24,
          width: 20,
        }}
      />
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        {number}
      </Text>
      <View style={{ width: 2, height: 20, backgroundColor: "white" }} />
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 12,
        }}
      >
        {date}
      </Text>
    </View>
  );
};

export default TimelinePins;
