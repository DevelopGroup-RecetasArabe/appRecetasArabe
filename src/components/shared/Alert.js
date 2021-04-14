import React from "react";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const { width } = Dimensions.get("window");
const Alert = ({ type, title }) => {
  let color = "";
  let background = "";
  let icon = "";

  if (type === "error") {
    background = "#FF8177";
    icon = "times-circle";
    color = "#FF0000";
  } else if (type === "success") {
    background = "#7AFF7A";
    icon = "check-circle";
    color = "#03A603";
  }

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <Icon name={icon} style={[styles.icon, {color: color}]} />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: width * 0.12,
    marginRight: width * 0.12,
    padding: 3,
    flexDirection: "row",
    justifyContent:'center',
    borderRadius: 15,
  },
  icon: {
    marginRight: 5,
    fontSize: 20,
  },
});

export default Alert;
