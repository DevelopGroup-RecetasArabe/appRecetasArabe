import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Icon } from "react-native-elements";

const { width, height } = Dimensions.get("window");

const Toaster = ({ message, callback }) => {
  return (
    <View style={styles.position}>
      <View style={styles.toast}>
        <Text style={styles.message}>{message}</Text>
        <View style={styles.positonX}>
          <Icon
            name="refresh"
            type="font-awesome"
            color="#ccc"
            size={30}
            onPress={() => callback()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  position: {
    alignSelf: "center",
    paddingTop: 10,
  },
  toast: {
    flexDirection: "row",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#7c3593",
    textAlign: "center",

    width: width * 0.5,
  },
  message: {
    flex: 1,
    alignSelf: "center",

    color: "#fff",
    textAlign: "center",
  },
  positonX: {
    flex: 1,
    alignItems: "flex-end",
  },
});

export default Toaster;
