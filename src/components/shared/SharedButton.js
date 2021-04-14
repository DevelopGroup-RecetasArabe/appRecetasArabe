import React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SharedButton = ({ title, size, colors, callback }) => {
  return (
    <View>
      <LinearGradient
        colors={["#090979", "#bb00f7"]}
        style={styles.button}
        start={{ x: 0, y: 0.3 }}
        end={{ x: 1, y: 0.5 }}
      >
        <TouchableOpacity onPress={callback}>
          <Text style={styles.txtBoton}>{title}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    color: "#fff",
    paddingTop: 10,
<<<<<<< HEAD
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
=======
    paddingRight:15,
    paddingLeft:15,
    paddingBottom:10,
>>>>>>> f1438f09942ef4537ff2141edb404598205cc69b
  },

  txtBoton: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
  },
});

export default SharedButton;
