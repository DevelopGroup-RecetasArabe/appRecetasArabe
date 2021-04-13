import React, { useContext, useEffect, useState } from "react";
import { Context as RecipeContext } from "../../providers/RecipeContext";
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
  const { state: stateToster, setCurrentRecipe } = useContext(RecipeContext);

  return (
    <View style={styles.position}>
      <View
        style={
          stateToster.darkMode === "light"
            ? [styles.toast, { backgroundColor: "#7c3593" }]
            : [styles.toast, { backgroundColor: "#000" }]
        }
      >
        <Text
          style={
            stateToster.darkMode === "light"
              ? [styles.message, { color: "#fff" }]
              : [styles.message, { color: "#fff" }]
          }
        >
          {message}
        </Text>
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
    padding: 7,
    borderRadius: 10,
    textAlign: "center",
    width: width * 0.5,
    borderWidth: 2,
    borderColor: "red",
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
