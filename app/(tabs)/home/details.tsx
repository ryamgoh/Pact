import { SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

const Details = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text
        onPress={() => {
          // Go back to the previous screen using the imperative API.
          router.back();
        }}
      >
        GO BACK
      </Text>
    </SafeAreaView>
  );
};

export default Details;
