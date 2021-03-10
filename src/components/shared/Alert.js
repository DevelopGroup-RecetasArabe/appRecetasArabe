import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Alert = ({ type, title }) => {
  let color = "";
  let background = "";
  let icon = "";

  if (type === "error") {
    background = "#FF8177";
    icon = "times-circle";
    color = "#FF0000";
  } else if (type === "warning") {
    background = "#fff4e5";
    icon = "warning";
    color = "D48C06";
  } else if (type === "info") {
    background = "#5F87FA";
    icon = "info-circle";
    color = "#0733B2";
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
    margin: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent:'center',
    borderRadius: 15,
  },
  icon: {
    marginRight: 5,
    fontSize: 20
  },
});

export default Alert;
