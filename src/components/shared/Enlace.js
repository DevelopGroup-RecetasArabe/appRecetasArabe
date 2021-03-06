import React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { colors } from "react-native-elements";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Enlace = ({ title, callback }) => {
  return (
    <View>
      <TouchableOpacity style={styles.enlace} onPress={callback}>
        <Text style={styles.txtEnlace}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  enlace: {
    marginBottom: 0,
  },

  txtEnlace: {
    textAlign: "center",
    fontSize: 15,
    textDecorationLine: "underline",
    color: "#245071",
  },
});

export default Enlace;
