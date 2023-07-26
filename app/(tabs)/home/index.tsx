import { SafeAreaView } from "react-native";
import SwipingScreen from "../../../components/Swiping/SwipingScreen";

import data from "./data.json";

const DUMMY_DATA = data;

const HomePage = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <SwipingScreen candidateData={DUMMY_DATA} />
    </SafeAreaView>
  );
};
export default HomePage;
