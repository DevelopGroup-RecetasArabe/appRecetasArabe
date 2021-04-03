import React, { useContext, useEffect, useState } from "react";
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
import { Context as RecipeContext } from "../../providers/RecipeContext";

const { width, height } = Dimensions.get("window");

const CardList = ({ navigation, array, callbackDelete }) => {
  const { state, setCurrentRecipe } = useContext(RecipeContext);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={array}
        numColumns={1}
        renderItem={({ item, i }) => (
          <View>
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                setCurrentRecipe(item);
                navigation.navigate("Recipes");
              }}
            >
              <View style={styles.layouts}>
                <View>
                  <Image
                    style={styles.cardImage}
                    source={{ uri: item.getImage }}
                  />
                </View>

                <View style={styles.styleText}>
                  <Text style={styles.h1}>{item.title}</Text>
                  <Text style={styles.h2}>{item.description}</Text>
                </View>

                <View style={styles.favoriteButton}>
                  <TouchableOpacity></TouchableOpacity>
                  <TouchableOpacity>
                    <Icon
                      name="trash"
                      type="font-awesome"
                      color="black"
                      size={24}
                      onPress={() => {
                        callbackDelete(item.id);
                      }}
                    />
                    <Icon
                      name="refresh"
                      type="font-awesome"
                      color="black"
                      size={24}
                      onPress={() => {
                        navigation.navigate("UpdateRecipes", {
                          arrayRecipes: item,
                        });
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
  layouts: {
    justifyContent: "flex-start",
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },

  styleText: {
    padding: 15,
    margin: 20,
  },
  h1: {
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    marginTop: 1,
    marginBottom: 1,
    padding: 5,
  },
  cardImage: {
    width: width * 0.35,
    height: height * 0.2,
    borderRadius: 5,
  },

  favoriteButton: {
    flex: 1,
    alignContent: "flex-end",
    justifyContent: "center",
  },
});

export default CardList;
