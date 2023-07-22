import { SplashScreen, Stack } from "expo-router";

import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import { LogoHeader } from "../components/logos";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_300Light,
    Poppins_100Thin,
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
      }}
    />
  );
}
