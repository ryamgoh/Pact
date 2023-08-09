import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, headerTitle: "Tracker" }}
      />
      <Stack.Screen
        name="createGoal"
        options={{ headerShown: true, headerTitle: "" }}
      />
    </Stack>
  );
}
