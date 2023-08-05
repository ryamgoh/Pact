import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { icons } from "../../constants";
import HorizontalRule from "../General/HorizontalRule";

const MilestoneTab = ({
  milestoneNumber,
  description,
  detailedDescription,
  date,
  completed,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 110,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <View
          style={{
            width: 3,
            height: "100%",
            position: "absolute",
            backgroundColor: "white", // This can change color later!
          }}
        />
        <View
          style={{
            borderRadius: 1000,
            width: 70,
            height: 70,
            backgroundColor: !completed ? "#9F9A9A" : "#F96D5A",
            borderWidth: 3, // This links to the line
            borderColor: "white",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            {milestoneNumber}
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 8,
            }}
          >
            {date}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={toggleModal}
        style={{
          height: 90,
          width: 240,
          backgroundColor: "white",
          borderRadius: 10,
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#FF8D79" }}>
            {description}
          </Text>
          <Image
            source={icons.MoreInfoIcon}
            style={{ alignSelf: "flex-end" }}
          />
        </View>
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        animationType="fade" // Choose the animation type for the modal (slide, fade, none)
        // Required on Android, called when the user presses the back button
        transparent={true} // Set to true to make the modal transparent
      >
        <View style={styles.modalContainer}>
          {/* Modal content */}
          <View style={styles.modalContent}>
            <View>
              <Text style={styles.modalText}>{description}</Text>
              <Text style={styles.descriptionText}>{detailedDescription}</Text>
            </View>
            {/* Button to close the modal */}
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.buttonText}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MilestoneTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#FF8D79",
    marginVertical: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background for the modal
  },
  modalContent: {
    backgroundColor: "#F8EDEB",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
    height: 500,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#FF8D79",
  },
  descriptionText: {
    fontSize: 18,
    marginBottom: 20,
    color: "#FF8D72",
  },
});
