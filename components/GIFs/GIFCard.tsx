import { COLORS, FONT } from "../../constants";
import { Image, Modal, Text, View } from "react-native";

import { StyleSheet } from "react-native";
import Toast from "react-native-toast-message";
import { TouchableOpacity } from "react-native-gesture-handler";
import { invalidGIF } from "../UI/toast";
import { setupGIF } from "../../store";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function GIFCard({data, id, src, title}) {

  const router = useRouter();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }
  
  const updateGIFDB = async () => {
    try {
      const resp = await setupGIF(id);
      if (resp) {
        router.replace("/home");
      } else {
        invalidGIF();
      }
    } catch (err) {
      invalidGIF();
    }
  }

  return (
    <View >
      <TouchableOpacity onPress={toggleModal}>
        <Image source={{ uri: src }} style={styles.iframe} />
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        animationType="fade" 
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>{title}</Text>
              <Image source={{ uri: src }} style={styles.iframe} />
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={toggleModal}>
                  <Text style={{ margin: "10"}}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={updateGIFDB}>
                  <Text style={styles.select}>Select this GIF</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Toast />
    </View>
  )
}

const styles = StyleSheet.create({
  iframe: {
    width: 150,
    height: 120,
    borderRadius: 10,
    border: "1px solid black",
    padding: 5,
    margin: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#F8EDEB",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: 340,
    height: 300,
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    fontFamily: FONT.medium,
    fontWeight: "bold",
    color: COLORS.black,
  },
  close: {
    
  },
  select: {
    color: "#FF8D79",
  }
});