import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "react-native-elements";

const { width, height } = Dimensions.get("window");

const Card = ({ image, title, description, icon, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate("Recipes")}>
          <Text style={styles.title}>{title}</Text>
          <Image source={{ uri: String(image) }} style={styles.cardImage} />
          <Text style={styles.description}>{description}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    borderBottomColor: "#b4b5c8",
    borderBottomWidth: 0.3,
    marginBottom: 10,
    padding: 5,
    textAlign: "center",
    color: "#ffffff", //"#a5a4a4"
  },
  card: {
    backgroundColor: "#7f71a0",
    marginTop: 15,
    width: width * 0.9,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    marginBottom: 10,
    padding: 15,
    borderRadius: 7,
  },
  cardImage: {
    width: width,
    height: height * 0.3,
  },
  description: {
    fontSize: 18,
    padding: 10,
    color: "#fff",
    textAlign: "center",
  },
});

export default Card;
