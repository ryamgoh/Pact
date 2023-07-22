import { View, Text } from "react-native";
import { Stack, useSearchParams } from "expo-router";

const NewsDetailsPage = () => {
  const { id } = useSearchParams();

  return (
    <View>
      <Stack.Screen options={{ headerTitle: `News #${id}` }} />
      <Text>My News: {id}</Text>
    </View>
  );
};

export default NewsDetailsPage;
