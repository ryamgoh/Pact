import { Redirect, Stack, useRouter } from "expo-router";
import {
  Alert,
  Button,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
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
    <ScrollView
      style={Styled.MainScrollableCanvas}
      contentContainerStyle={{ alignItems: "flex-start" }}
    >
      <ProfileCard
        profilePhoto={
          "https://images.unsplash.com/photo-1689888154384-00e7f1e191f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
        }
      />
      <HorizontalRule width={"100%"} height={"1"} position={"auto"} />
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
