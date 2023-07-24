import { View, SafeAreaView, Image, Text, StyleSheet } from "react-native";
import { useState } from "react";
import Swiper from "react-native-deck-swiper";
import { useRef } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo, AntDesign } from "@expo/vector-icons";
import SwipeCard, { cardDataInterface } from "./SwipeCard";
import SwipeCardBack from "./SwipeCardBack";
import FlipCard from "react-native-flip-card";
interface SwipingScreenProps {
  candidateData: cardDataInterface[];
}

const SwipingScreen: React.FC<SwipingScreenProps> = ({ candidateData }) => {
  const swipeRef = useRef(null);
  const [flip, setFlip] = useState(false);
  const rotateCard = () => {
    setFlip(!flip);
  };
  const rotate = { transform: "rotateY(180deg)" };

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
          onSwipedLeft={() => {
            console.log("Swipe PASS");
          }}
          onSwipedRight={() => {
            console.log("Swipe Match");
          }}
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
          renderCard={(cardData) => {
            return (
              <FlipCard
                friction={10}
                perspective={1000}
                flipHorizontal={true}
                flipVertical={false}
                flip={false}
                clickable={true}
              >
                <SwipeCard card={cardData} />
                <SwipeCardBack />
              </FlipCard>
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
          onPress={() => swipeRef.current.swipeRight()}
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
          onPress={() => swipeRef.current.swipeLeft()}
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
