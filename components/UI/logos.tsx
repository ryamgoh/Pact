import { StyleSheet, View, Text, Image, ImageResizeMode } from "react-native";
import React from "react";
import { images } from "../../constants";

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
    <Image
      source={images.logoHeader}
      style={{ height: 40, width: 100, resizeMode: "contain" }}
    />
  );
};

export { LargeLogo, SmallLogo, LogoHeader, Logo };
