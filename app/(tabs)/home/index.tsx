import { Link, Redirect, Stack } from "expo-router";
import { View, SafeAreaView, Image, Text, StyleSheet } from "react-native";
import { Logo } from "../../../components/UI/logos";
import Swiper from "react-native-deck-swiper";
import { useRef } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo, AntDesign } from "@expo/vector-icons";
const DUMMY_DATA = [
  {
    id: 1,
    firstName: "Sonny",
    lastName: "Sangha",
    job: "Software Developer",
    photoUrl:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    age: 27,
  },
  {
    id: 2,
    firstName: "Elon",
    lastName: "Musk",
    job: "Entrepreneuer",
    photoUrl:
      "https://plus.unsplash.com/premium_photo-1675129256093-a2a7705112e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    age: 27,
  },
  {
    id: 3,
    firstName: "Mark",
    lastName: "Zuckerberg",
    job: "Jiu jitsu",
    photoUrl:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    age: 27,
  },
];

const HomePage = () => {
  const swipeRef = useRef(null);
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View style={{ flex: 1, width: "100%" }}>
        <Swiper
          ref={swipeRef}
          containerStyle={{ backgroundColor: "transparent" }}
          cards={DUMMY_DATA}
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
          renderCard={(card) => {
            return (
              <View
                key={card.id}
                style={{
                  backgroundColor: "white",
                  height: 600,
                  borderRadius: 50,
                  position: "relative",
                }}
              >
                <Image
                  source={{ uri: card.photoUrl }}
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 20,
                    position: "absolute",
                    top: 0,
                  }}
                />
                <View
                  style={[
                    {
                      backgroundColor: "white",
                      width: "100%",
                      height: 80,
                      position: "absolute",
                      bottom: 0,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingHorizontal: 20,
                      paddingTop: 10,
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    },
                    styles.cardShadow,
                  ]}
                >
                  <View>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      {card.firstName} {card.lastName}
                    </Text>
                    <Text>{card.job}</Text>
                  </View>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    {card.age}
                  </Text>
                </View>
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
    </SafeAreaView>
  );
};
export default HomePage;

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
});
