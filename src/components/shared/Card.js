import React, { useContext, useEffect, useState } from "react";
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

const Card = ({ navigation, array }) => {
  const { state, setCurrentRecipe } = useContext(RecipeContext);

  useEffect(() => {}, [state.darkMode]);

  const emptyFlatList = (
    <View style={styles.emptyNotes}>
      <Text>No hay Recetas Agregadas</Text>
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
                  ? [
                      styles.card,
                      { backgroundColor: "#b580ba", shadowColor: "black" },
                    ]
                  : [
                      styles.card,
                      { backgroundColor: "#00000099", shadowColor: "black" },
                    ]
              }
              onPress={() => {
                setCurrentRecipe(item);
                navigation.navigate("Recipes");
              }}
            >
              <View
                style={
                  state.darkMode === "light"
                    ? [styles.ContImage, { shadowColor: "#7c3593" }]
                    : [styles.ContImage, { shadowColor: "#ffffff50" }]
                }
              >
                <Image
                  style={styles.cardImage}
                  source={{ uri: item.getImage }}
                />
              </View>
              <View
                style={
                  state.darkMode === "light"
                    ? [
                        styles.ContTitle,
                        { backgroundColor: "#24507198", shadowColor: "black" },
                      ]
                    : [
                        styles.ContTitle,
                        { backgroundColor: "#B4975A", shadowColor: "#B4975A" },
                      ]
                }
              >
                <Text
                  style={
                    state.darkMode === "light"
                      ? [styles.title, { color: "#ebecf2" }]
                      : [styles.title, { color: "#000000" }]
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
                  color={state.darkMode === "light" ? "#ebecf2" : "#fff"}
                  backgroundColor={
                    state.darkMode === "light" ? "#7f71a0" : "#B4975A"
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
    marginTop: 18,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 10,
    //Sombra
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  ContDescrip: {
    flex: 3,
  },
  description: {
    fontSize: 16,
    marginTop: 4.5,
    textAlign: "left",
    flex: 3,
    paddingBottom: 3,
  },
  card: {
    padding: 8,
    marginTop: 10,
    width: width * 0.46,
    height: height * 0.4,
    marginLeft: 10,
    borderRadius: 10, //7
    //Sombra
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    marginBottom: 10,
  },
  ContImage: {
    //Sombra
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
