import { View, Text } from "react-native";
import { Stack, useLocalSearchParams, useSearchParams } from "expo-router";
import { COLORS } from "../../../constants";

const NewsDetailsPage = () => {
  const { id } = useSearchParams();
  const params = useLocalSearchParams();
  const { pactName } = params;

  return (
    <View>
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
      <Text>My News: {id}</Text>
    </View>
  );
};

export default NewsDetailsPage;
