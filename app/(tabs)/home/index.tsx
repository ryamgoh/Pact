import { Link, Redirect, Stack } from "expo-router";
import { View, SafeAreaView } from "react-native";
import { LargeLogo, SmallLogo } from "../../../components/logos";

const HomePage = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <LargeLogo />
      <SmallLogo />
      <Link href="/home/details">Go to Details</Link>
      <Link href="/home/new-entry-modal">Present modal</Link>
    </SafeAreaView>
  );
};
export default HomePage;
