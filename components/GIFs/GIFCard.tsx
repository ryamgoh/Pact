import { Image, Modal, Text, View } from "react-native";

import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";

export default function GIFCard({id, src}) {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }

  return (
    <View >
      <Image source={{ uri: src }} style={styles.iframe} />
      <TouchableOpacity onPress={toggleModal}>
        <Text>Select</Text>
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        // animationType="fade" // Choose the animation type for the modal (slide, fade, none)
        // // Required on Android, called when the user presses the back button
        // transparent={true} // Set to true to make the modal transparent
      >
        <View>
          <View>
            <View>
              <Text >hello!</Text>
              <Text>wassup nigga</Text>
            </View>
            <TouchableOpacity onPress={toggleModal}>
              <Text>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
});