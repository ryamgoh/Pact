import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React, { useRef, useState } from "react";
import { COLORS, FONT, SIZES, icons } from "../../constants";
import { set } from "react-native-reanimated";

const ChatsSearchBar = ({ filterText, setFilterText }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={icons.searchIcon} style={{ width: 20, height: 20 }} />
      <TextInput
        style={{
          flex: 1,
          fontFamily: FONT.regular,
          fontSize: SIZES.small,
        }}
        placeholder="Search"
        placeholderTextColor={COLORS.gray}
        onChangeText={(text) => {
          setFilterText(text);
        }}
      />
      <Image source={icons.filterIcon} style={{ width: 20, height: 20 }} />
    </View>
  );
};

export default ChatsSearchBar;

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 40,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 100,
    borderWidth: 1,
    gap: 10,
  },
});
