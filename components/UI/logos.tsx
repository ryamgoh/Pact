import { StyleSheet, View, Text, Image, ImageResizeMode } from "react-native";
import React from "react";
import { images } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";

interface LogoProps {
  height: string | number | undefined;
  width: string | number | undefined;
  resizeMode?: ImageResizeMode | undefined;
}

const Logo = (props: LogoProps) => {
  return (
    <Image
      source={images.logo}
      style={{
        height: props.height,
        width: props.width,
        resizeMode: props.resizeMode,
      }}
    />
  );
};

const LargeLogo = () => {
  return (
    <Image
      source={images.logo}
      style={{ height: 100, width: 100, resizeMode: "contain" }}
    />
  );
};

const SmallLogo = () => {
  return (
    <Image
      source={images.logo}
      style={{ height: 40, width: 40, resizeMode: "contain" }}
    />
  );
};

const LogoHeader = () => {
  return (
    <>
      <LinearGradient
        colors={["#FED5CC", "#FEE2DC", "#FFF1EF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}
      >
        <Image
          source={images.logoHeader}
          style={{ height: 40, width: 100, resizeMode: "contain" }}
        />
      </LinearGradient>
    </>
  );
};

export { LargeLogo, SmallLogo, LogoHeader, Logo };

// Later on in your styles..
const styles = StyleSheet.create({
  linearGradient: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
});
