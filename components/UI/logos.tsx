import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";
import { images } from "../../constants";

const LargeLogo = () => {
  // return <Image source={images.logo} style={styles.logo} />;
  return <images.logo height={120} width={120} />;
};

const SmallLogo = () => {
  // return <Image source={images.logo} style={styles.tinyLogo} />;
  return <images.logo height={20} width={20} />;
};

const LogoHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={images.logoHeader}
        style={{ height: 40, width: 100, resizeMode: "contain" }}
      />
    </View>
  );
};

export { LargeLogo, SmallLogo, LogoHeader };

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  // tinyLogo: {
  //   width: 50,
  //   height: 50,
  // },
  // logo: {
  //   width: 100,
  //   height: 100,
  // },
});
