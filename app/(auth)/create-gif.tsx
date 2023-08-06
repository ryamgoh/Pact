import { COLORS, FONT } from "../../constants";
import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { featured, searchGIF } from "../../components/GIFs/GIF";

import GIFCard from "../../components/GIFs/GIFCard";
import { LargerHeader } from "../../components/UI/logos";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useEffect } from "react";
import { useState } from "react";

export default function createGIF() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [gif, setGIF] = useState(null);
  const [current, setCurrent] = useState(null);
  const [trending, setTrending] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    console.log("hello");
    setModalVisible(!isModalVisible);
  }

  const getFeatured = async () => setTrending(await featured());

  const getSearched = async (text) => {
    setSearch(text);
    setGIF(await searchGIF(text));
  }

  useEffect(() => {
    getFeatured();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ headerShown: false }} />
      <LargerHeader />
      <Text style={styles.header}>You're Almost Done!</Text>
      <Text style={styles.subheader}>Select a GIF which you most relate to!</Text>
      <View style={styles.search}>
        <TextInput
          placeholder=""
          autoCapitalize="none"
          nativeID="gif"
          onChangeText={getSearched}
          style={styles.textInput}
          autoComplete="off"
        />
      </View>
      { search === "" 
        ? trending === null 
          ? <Text>Loading....</Text>
          : <View style={styles.trending}>{trending?.map(gif => <GIFCard data={gif} title={gif.content_description} id={gif.id} src={gif.media_formats.nanogif.url} key={gif.id}/>)}</View>
        : <View style={styles.trending}>{gif?.map(gif => <GIFCard data={gif} title={gif.content_description} id={gif.id} src={gif.media_formats.nanogif.url} key={gif.id}/>)}</View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    color: COLORS.black,
    fontFamily: FONT.medium,
    fontSize: 30,
    marginTop: 30,
    marginBottom: 15,
    textAlign: "center",
  },
  subheader: {
    color: COLORS.gray,
    fontFamily: FONT.regular,
    fontSize: 15,
    marginBottom: 15,
    textAlign: "center",
  },
  search: {
    flexDirection: "row",
  },
  searchButton: {
    width: 100,
    height: 40,
    backgroundColor: COLORS.orange,
    borderRadius: 5,
    textAlign: "center",
    padding: 10,
    marginLeft: 10,
    color: COLORS.white,
    fontFamily: FONT.medium,
  },
  button: {
    color: COLORS.white,
    fontFamily: FONT.medium,
    fontSize: 20,
    backgroundColor: COLORS.orange,
    padding: 10,
    borderRadius: 5,
    width: 350,
    textAlign: "center",
    marginTop: 30,
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 30,
  },
  textInput: {
    width: 350,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.gray,
    paddingHorizontal: 8,
    paddingVertical: 4,
    height: 40,
    marginBottom: 20,
    backgroundColor: COLORS.white,
  },
  iframe: {
    width: 150,
    height: 120,
    borderRadius: 10,
    // backgroundColor: COLORS.white,
    border: "1px solid black",
    padding: 5,
    margin: 5,
  },
  trending: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  }
});