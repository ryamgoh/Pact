import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LargeLogo, LogoHeader, SmallLogo } from "../../../components/logos";

export default function Layout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            // headerTitle: "Welcome Home",
            headerTitle: (props) => <LogoHeader />,
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
