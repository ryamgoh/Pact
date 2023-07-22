import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LargeLogo, LogoHeader, SmallLogo } from "../../../components/logos";

export default function Layout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Hello World",
          }}
        />
        <Stack.Screen
          name="details"
          options={{ headerTitle: "Detail Screen" }}
        />
        <Stack.Screen
          name="new-entry-modal"
          options={{
            // Set the presentation mode to modal for our modal route.
            presentation: "fullScreenModal",
          }}
        />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}
