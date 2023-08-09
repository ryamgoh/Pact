import { Stack } from "expo-router";
import { COLORS, FONT } from "../../../constants";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerTitle: "Profile" }} />
      <Stack.Screen
        name="storymodal"
        options={{
          presentation: "modal",
          headerStyle: {
            backgroundColor: COLORS.white,
          },
        }}
      />
    </Stack>
  );
}
