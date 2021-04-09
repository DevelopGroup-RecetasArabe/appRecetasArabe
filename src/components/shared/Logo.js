import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Image } from "react-native-elements";

const { width, height } = Dimensions.get("screen");

const Logo = () => {
  return (
    <View style={styles.logo}>
      <Image
        style={styles.logo}
        source={{ uri: String(require("../../assets/logo.png")) }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    flex:1,
    borderRadius: 20,
    width: width * 0.3,
    height: height * 0.3,
  },
});

export default Logo;
