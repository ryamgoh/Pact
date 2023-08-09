import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../../../constants";

const StoryModal = () => {
  const storyData = [
    "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=449&q=80",
    "https://images.unsplash.com/photo-1489352472630-7ad0b011c3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1492447216082-4726bf04d1d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  ];

  const [storyIndex, setStoryIndex] = useState(0);

  // <Image
  //   key={storyIndex}
  //   source={{
  //     uri: story,
  //   }}
  //   style={{ width: 100, height: 100 }} // Adjust dimensions as needed
  // />

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{ uri: storyData[storyIndex] }}
        style={{ flex: 1, resizeMode: "cover", backgroundColor: COLORS.gray }}
      />
      <Header data={storyData} currentIndex={storyIndex} />
      {/* <Text>{storyIndex}</Text> */}
      <Pressable
        style={{
          width: "30%",
          height: "100%",
          position: "absolute",
          zIndex: 100,
          left: 0,
        }}
        onPress={() =>
          setStoryIndex((storyIndex) => (storyIndex === 0 ? 0 : storyIndex - 1))
        }
      />
      <Pressable
        style={{
          width: "70%",
          height: "100%",
          position: "absolute",
          zIndex: 100,
          right: 0,
        }}
        onPress={() =>
          setStoryIndex((storyIndex) =>
            storyIndex === storyData.length - 1 ? storyIndex : storyIndex + 1
          )
        }
      />
    </View>
  );
};

export default StoryModal;

const Header = ({ data, currentIndex }) => {
  const [barWidth, setBarWidth] = useState(
    Dimensions.get("window").width / data.length
  );

  const updateBarWidth = () => {
    const screenWidth = Dimensions.get("window").width;
    setBarWidth(screenWidth / data.length);
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    const subscription = Dimensions.addEventListener("change", updateBarWidth);

    // Clean up the event listener when the component unmounts
    return () => subscription.remove();
  }, [data]);

  return (
    <View style={{ width: "100%", position: "absolute" }}>
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        {data.map((item, index) => {
          return (
            <View
              style={{
                width: barWidth,
                height: 10,
                paddingVertical: 2,
                paddingHorizontal: 5,
              }}
            >
              <View
                style={{
                  backgroundColor: index === currentIndex ? "black" : "gray",
                  flex: 1,
                  borderRadius: 100,
                }}
              />
            </View>
          );
        })}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Image
          source={{ uri: data[0] }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 1000,
            marginHorizontal: 5,
          }}
        />
        <Text style={{ color: COLORS.lightWhite }}>Ryann</Text>
        <Text style={{ color: COLORS.gray, fontSize: 10 }}>24h</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
