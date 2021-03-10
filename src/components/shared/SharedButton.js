import React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { color } from "react-native-reanimated";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

//Recibe un titulo, el tamaño del boton, el color del boton y una funcion callback

const SharedButton = ({ title, size, colors, callback }) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.boton, { width: width * size, backgroundColor: colors }]}
        onPress={callback}
      >
        <Text style={styles.txtBoton}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  boton: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    color: "#fff",
    borderRadius: 5,
    padding: 15,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
  txtBoton: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
});

export default SharedButton;
