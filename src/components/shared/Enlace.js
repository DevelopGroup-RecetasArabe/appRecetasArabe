import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const Enlace = ({
  title,
  flexDirection,
  color,
  paddingTop,
  size,
  callback,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.enlace, { flexDirection: flexDirection }]}
        onPress={callback}
      >
        <Text
          style={[
            styles.txtEnlace,
            { color: color, paddingTop: paddingTop, fontSize: size },
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  enlace: {
    marginBottom: 10,
    paddingBottom: 10,
  },

  txtEnlace: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Enlace;
