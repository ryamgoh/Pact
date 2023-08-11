import { Image, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import { getGIFByID } from "../GIFs/GIF";
import { getRecentGoal } from "../../store";

export interface cardDataInterface {
  id: number;
  name: string;
  gif: string; // This is the gif url for Swipe Screen!
  age: number;
  interest: string;
  bio: string;
  category: string;
  username: string;
  profilePic: string;
}

const SwipeCard = ({ card }: { card: cardDataInterface }) => {

  const [gif, setGIF] = useState([]);
  const [goal, setGoal] = useState(undefined);

  useEffect(() => {
    getLink();
    getGoal();
  }, []);

  const getLink = async () => {
    setGIF(await getGIFByID(card.gif));
  }

  const getGoal = async () => {
    setGoal(await getRecentGoal(card.id));
  }

  if (goal === undefined) {
    return <View><Text>Loading....</Text></View>
  }

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
      <Image source={{ uri: gif.length === 0 ? "" : gif[0].media_formats.tinygif.url }} style={styles.cardLayout} />
      <View style={[styles.bottomBar, styles.cardShadow]}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.textStyle}>{card.name}</Text>
          <Text style={styles.textStyle}>{card.age}</Text>
        </View>
        <Text
          style={{
            fontWeight: "500",
            fontSize: 14,
          }}
        >
          Interested in:{" "}
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            {goal.category} | {goal.subcategory}
          </Text>
        </Text>
        <Text
          style={{
            fontSize: 12,
          }}
        >
          {card.bio}
        </Text>
      </View>
    </View>
  );
};
export default SwipeCard;
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
    height: 200,
    borderRadius: 20,
    marginTop: 100,
  },
  bottomBar: {
    backgroundColor: "white",
    width: "100%",
    height: 130,
    position: "absolute",
    bottom: 0,
    flexDirection: "column",
    gap: 3,
    paddingHorizontal: 20,
    paddingTop: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textStyle: { fontSize: 20, fontWeight: "bold" },
});
