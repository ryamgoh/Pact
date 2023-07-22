import { Link, Redirect, Stack } from "expo-router";
import { View, SafeAreaView } from "react-native";
import { Logo } from "../../../components/UI/logos";

const HomePage = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Logo height={40} width={40} />
      <Logo height={80} width={80} resizeMode="contain" />
      <Logo height={120} width={120} />
      <Link href="/home/details">Go to Details</Link>
      <Link href="/home/new-entry-modal">Present modal</Link>
    </SafeAreaView>
  );
};
export default HomePage;
