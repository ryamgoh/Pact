import { SplashScreen, Stack } from "expo-router";

import { useFonts } from "expo-font";
import { LogoHeader } from "../components/UI/logos";
import { COLORS } from "../constants/theme";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Medium.ttf"),
    "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!fontsLoaded) {
    // The native splash screen will stay visible for as long as there
    // are `<SplashScreen />` components mounted. This component can be nested.
    return <SplashScreen />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: (props) => <LogoHeader />,
        headerStyle: { backgroundColor: COLORS.bgColor },
      }}
    />
  );
}
