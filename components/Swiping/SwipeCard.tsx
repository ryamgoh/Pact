import { View, Image, Text, StyleSheet } from "react-native";

export interface cardDataInterface {
  id: number;
  firstName: string;
  lastName: string;
  photoUrl: string;
  age: number;
  interest: string;
  description: string;
}
const SwipeCard = ({ card }: { card: cardDataInterface }) => {
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
      <Image source={{ uri: card.photoUrl }} style={styles.cardLayout} />
      <View style={[styles.bottomBar, styles.cardShadow]}>
        <View>
          <Text style={styles.textStyle}>
            {card.firstName} {card.lastName}
          </Text>

          <Text
            style={{
              marginTop: 4,
              fontWeight: "500",
              fontSize: 16,
            }}
          >
            Interested in:{" "}
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {card.interest}
            </Text>
          </Text>
          <Text style={{ marginTop: 6 }}>{card.description}</Text>
        </View>
        <Text style={styles.textStyle}>{card.age}</Text>
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
