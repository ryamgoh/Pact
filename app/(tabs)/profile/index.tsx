import { Redirect, Stack, useRouter } from "expo-router";
import {
  Alert,
  Button,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from "react-native";
import { AuthStore, appSignOut } from "../../../store";
import { FONT } from "../../../constants";
import Styled from "../../../styles/container";
import ProfileCard from "../../../components/Profile/ProfileCard";
import HorizontalRule from "../../../components/General/HorizontalRule";
import ProfileStoryCards from "../../../components/Profile/ProfileStoryCards";

const ProfilePage = () => {
  const router = useRouter();
  return (
    // <ScrollView
    //   contentContainerStyle={[
    //     Styled.MainScrollableCanvas,
    //     { alignItems: "flex-start" },
    //   ]}
    // >
    <ScrollView
      style={Styled.MainScrollableCanvas}
      contentContainerStyle={{ alignItems: "flex-start", gap: 5 }}
    >
      <ProfileCard profilePhoto={AuthStore.getRawState().user?.photoURL} />
      <Text
        style={{
          fontFamily: FONT.bold,
          fontSize: 20,
          fontWeight: "800",
        }}
      >
        Past Achievements
      </Text>
      <ProfileStoryCards />
      <Text style={{ fontFamily: FONT.bold }}>
        {AuthStore.getRawState().user?.email}
      </Text>
      <Text style={{ fontFamily: FONT.bold }}>
        {AuthStore.getRawState().user?.displayName}
      </Text>
      <Text style={{ fontFamily: FONT.bold }}>
        {AuthStore.getRawState().user?.uid}
      </Text>
      <Button
        onPress={async () => {
          const resp = await appSignOut();
          if (!resp?.error) {
            router.replace("/(auth)/login");
          } else {
            console.log(resp.error);
            Alert.alert("Logout Error", resp.error?.message);
          }
        }}
        title="LOGOUT"
      />

      <Pressable
        onPress={() => {
          alert("pressed");
        }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#920" : "#818" },
          {
            borderColor: "#920",
            borderWidth: 1,
            borderStyle: "solid",
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 6,
          },
        ]}
      >
        <Text
          style={{
            fontFamily: FONT.bold,
            color: "white",
          }}
        >
          Button
        </Text>
      </Pressable>
    </ScrollView>
  );
};
export default ProfilePage;
