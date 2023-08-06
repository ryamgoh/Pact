import { View } from "react-native";
import { Stack, useLocalSearchParams, useSearchParams } from "expo-router";
import { COLORS } from "../../../constants";
import React from "react";
import SwipeCardBack from "../../../components/Swiping/SwipeCardBack";
import FlipCard from "react-native-flip-card";

export const NewsDetailsPage = () => {
  const { id } = useSearchParams();
  const params = useLocalSearchParams();
  const { pactName } = params;

  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 40 }}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: `View Your Card with ${pactName}`,
          headerStyle: {
            backgroundColor: COLORS.bgColor,
          },
          headerTintColor: `#F96D5A`,
        }}
      />
      <View>
        <FlipCard
          friction={10}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          clickable={true}
        >
          <SwipeCardBack id="" />
          <SwipeCardBack id="" />
        </FlipCard>
      </View>
    </View>
  );
};
