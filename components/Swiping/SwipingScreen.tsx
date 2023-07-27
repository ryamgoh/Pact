import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import Swiper from "react-native-deck-swiper";
import { useRef } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo, AntDesign } from "@expo/vector-icons";
import SwipeCard, { cardDataInterface } from "./SwipeCard";
import SwipeCardBack from "./SwipeCardBack";
import FlipCard from "react-native-flip-card";

import {
  doc,
  DocumentSnapshot,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { database, auth } from "../../FirebaseConfig";
import generateId from "../../lib/generateId";
import { useRouter } from "expo-router";
interface SwipingScreenProps {
  candidateData: cardDataInterface[];
}

const SwipingScreen = ({ candidateData }: SwipingScreenProps) => {
  //Create router for navigating to match screen
  const router = useRouter();
  const swipeRef = useRef(null);

  const swipeLeft = async (cardIndex) => {
    if (!candidateData[cardIndex]) return;
    const userSwiped = candidateData[cardIndex];
    console.log(`You PASS on ${userSwiped.firstName}`);
    setDoc(
      doc(database, "users", auth.currentUser.uid, "passes", userSwiped.id),
      userSwiped
    );
  };

  const swipeRight = async (cardIndex) => {
    if (!candidateData[cardIndex]) return;
    const userSwiped = candidateData[cardIndex];

    const loggedInProfile = await (
      await getDoc(doc(database, "users", auth.currentUser.uid))
    ).data();
    //check if the user swiped on you
    getDoc(
      doc(database, "users", userSwiped.id, "swipes", auth.currentUser.uid)
    ).then((DocumentSnapshot) => {
      if (DocumentSnapshot.exists()) {
        //user has matched with you before you matched with them
        //create a match
        console.log(`Hooray you MATCHED with ${userSwiped.firstName}
        `);

        setDoc(
          doc(database, "users", auth.currentUser.uid, "swipes", userSwiped.id),
          userSwiped
        );

        //Create a match
        setDoc(
          doc(
            database,
            "matches",
            generateId(auth.currentUser.uid, userSwiped.id)
          ),
          {
            users: {
              [auth.currentUser.uid]: loggedInProfile,
              [userSwiped.id]: userSwiped,
            },
            usersMatched: [auth.currentUser.uid, userSwiped.id],
            timestamp: serverTimestamp(),
          }
        );

        //Redirect to matching screen
        router.replace({
          pathname: "/match",
        });
      } else {
        //user has swiped as first interaction between the two or didnt get swiped on
        console.log("fdsfsd");

        setDoc(
          doc(database, "users", auth.currentUser.uid, "swipes", userSwiped.id),
          userSwiped
        );
      }
    });
  };
  return (
    <>
      <View style={{ flex: 1, width: "100%" }}>
        <Swiper
          ref={swipeRef}
          containerStyle={{ backgroundColor: "transparent" }}
          cards={candidateData}
          stackSize={5}
          cardIndex={0}
          verticalSwipe={false}
          onSwipedLeft={swipeLeft}
          onSwipedRight={swipeRight}
          backgroundColor={"#4FD0E9"}
          animateCardOpacity
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right",
                  color: "red",
                },
              },
            },
            right: {
              title: "MATCH",
              style: {
                label: {
                  textAlign: "left",
                  color: "#4DED30",
                },
              },
            },
          }}
          renderCard={(card) => {
            return card ? (
              <FlipCard
                friction={10}
                perspective={1000}
                flipHorizontal={true}
                flipVertical={false}
                flip={false}
                clickable={true}
              >
                <SwipeCard card={card} />
                <SwipeCardBack />
              </FlipCard>
            ) : (
              <View style={[styles.cardLayout, styles.cardShadow]}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: 20,
                  }}
                >
                  No more profiles
                </Text>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
          marginBottom: 15,
        }}
      >
        <TouchableOpacity
          onPress={() => swipeRef.current.swipeLeft()}
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 40,
            width: 60,
            height: 60,
            backgroundColor: "#fecaca",
          }}
        >
          <Entypo name="cross" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => swipeRef.current.swipeRight()}
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 40,
            width: 60,
            height: 60,
            backgroundColor: "#bbf7d0",
          }}
        >
          <AntDesign name="heart" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SwipingScreen;
const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardLayout: {
    backgroundColor: "white",
    height: 600,
    borderRadius: 20,
    position: "relative",
  },
  bottomBar: {
    backgroundColor: "white",
    width: "100%",
    height: 130,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textStyle: { fontSize: 20, fontWeight: "bold" },
});
