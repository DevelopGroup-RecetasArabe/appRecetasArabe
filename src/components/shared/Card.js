import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { Context as RecipeContext } from "../../providers/RecipeContext";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { Image } from "react-native-elements";
import { Icon } from "react-native-elements";

const { width, height } = Dimensions.get("window");

const Card = ({ navigation, array, recipeID, callbackDelete }) => {
  const { state, setCurrentRecipe } = useContext(RecipeContext);
  useEffect(() => {}, [state.darkMode]);

  const emptyFlatList = (
    <View style={styles.emptyNotes}>
      <Text>You don't have any note yet...</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={array}
        numColumns={2}
        emptyFlatList={emptyFlatList}
        renderItem={({ item, i }) => (
          <>
            <TouchableOpacity
              key={item.id}
              style={
                state.darkMode === "light"
                  ? [styles.card, { backgroundColor: "#b580ba" }]
                  : [styles.card, { backgroundColor: "#b580ba" }]
              }
              onPress={() => {
                setCurrentRecipe(item);
                navigation.navigate("Recipes");
              }}
            >
              <View style={styles.ContImage}>
                <Image
                  style={styles.cardImage}
                  source={{ uri: item.getImage }}
                />
              </View>
              <View
                style={
                  state.darkMode === "light"
                    ? [styles.ContTitle, { backgroundColor: "#24507198" }]
                    : [styles.ContTitle, { backgroundColor: "black" }]
                }
              >
                <Text
                  style={
                    state.darkMode === "light"
                      ? [styles.title, { color: "#ebecf2" }]
                      : [styles.title, { color: "white" }]
                  }
                >
                  {item.title}
                </Text>
              </View>
              <View style={styles.ContDescrip}>
                <Text
                  style={
                    state.darkMode === "light"
                      ? [styles.description, { color: "#ebecf2" }]
                      : [styles.description, { color: "#ebecf2" }]
                  }
                >
                  {item.description}
                </Text>
              </View>
              <View style={styles.favoriteButton}>
                <Icon
                  name={"user-circle"}
                  type={"font-awesome"}
                  size={17}
                  color={state.darkMode === "light" ? "#ebecf2" : "black"}
                  backgroundColor={
                    state.darkMode === "light" ? "#7f71a0" : "#7f71a0"
                  }
                  borderRadius={80}
                />
                <Text style={styles.User}>{" " + item.fullname}</Text>
              </View>
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 95,
  },
  ContTitle: {
    //backgroundColor: "#24507198",
    //backgroundColor: '#FFFFFF98',
    marginTop: 18,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 10,
    //Sombra
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    //color: "#7f71a0",
    //color: "#ebecf2", //"#a5a4a4"
  },
  ContDescrip: {
    flex: 3,
  },
  description: {
    fontSize: 16,
    marginTop: 4.5,
    //color: "#ebecf2",
    textAlign: "left",
    flex: 3,
    paddingBottom: 3,
  },
  card: {
    //backgroundColor: "#b580ba",
    padding: 8,
    marginTop: 10,
    width: width * 0.46,
    height: height * 0.4,
    marginLeft: 10,
    borderRadius: 20, //7
    //Sombra
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    marginBottom: 10,
  },
  ContImage: {
    //Sombra
    shadowColor: "#7c3593",
    shadowOffset: { width: 3, height: 12 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  cardImage: {
    width: width * 0.42,
    height: height * 0.2,
    borderRadius: 20,
    paddingRight: 8,
  },
  favoriteButton: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  User: {
    color: "#ebecf2",
  },
  emptyNotes: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default Card;
