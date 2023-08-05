import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { COLORS, FONT, SIZES } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";
import { icons } from "../../constants";
import { AuthStore } from "../../store";
import { getDoc, collection, doc } from "firebase/firestore";
import { database } from "../../FirebaseConfig";

const ProfileCard = ({ profilePhoto }) => {
  const [profileData, setProfileData] = React.useState(null);

  console.log(AuthStore.getRawState().user?.uid);

  // const docRef = doc(database, "userdetails", AuthStore.getRawState().user?.uid);
  const docRef = doc(database, "users", AuthStore.getRawState().user?.uid);

  useEffect(() => {
    const fetchProfileData = async () => {
      await getDoc(docRef).then((doc) => {
        if (doc.exists()) {
          // console.log("Document data:", doc.data());
          setProfileData(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      });
    };

    fetchProfileData();
  }, []);

  return (
    <LinearGradient
      colors={["#FDC89B", "#FF8D79"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.cardContainer}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          gap: SIZES.xSmall,
          height: "100%",
          width: 160,
        }}
      >
        <Image
          source={{
            uri: profilePhoto,
          }}
          style={{
            height: 160,
            width: 160,
            borderRadius: 1000,
          }}
        />
        <View>
          <ScrollView horizontal>
            <Text
              style={{
                fontFamily: FONT.medium,
                fontSize: SIZES.medium,
              }}
            >
              @{profileData?.username}
            </Text>
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 5,
        }}
      >
        <ScrollView>
          <Text
            style={{
              fontFamily: FONT.medium,
              fontSize: SIZES.medium,
            }}
          >
            {AuthStore.getRawState().user?.displayName}
          </Text>
          <Text
            style={{
              fontFamily: FONT.medium,
              fontSize: SIZES.medium,
            }}
          >
            {profileData?.age} y/o
          </Text>
          <Text>{profileData?.bio}</Text>
        </ScrollView>
        <Image
          source={icons.editButton}
          style={{ width: 35, height: 35, alignSelf: "flex-end" }}
        />
      </View>
    </LinearGradient>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 300,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    gap: 10,
  },
});
