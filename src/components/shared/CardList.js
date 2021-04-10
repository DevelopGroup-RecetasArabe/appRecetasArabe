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

  const emptyFlatList = (
    <View style={styles.emptyNotes}>
      <Text>You don't have any note yet...</Text>
    </View>
  );

  return (
      <View style={styles.container}>
        <FlatList
          data={array}
          emptyFlatList={emptyFlatList}
          numColumns={1}
          renderItem={({ item, i }) => (
            <View>
              <TouchableOpacity
                key={item.id}
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
                    <TouchableOpacity>
                      <View style={styles.top}>
                      <Icon
                        name="trash"
                        type="font-awesome"
                        color="#7c3593"
                        size={30}
                        onPress={() => {
                          callbackDelete(item.id);
                        }}
                      />
                      </View>
                      <View style={styles.med} /> 
                      <View style={styles.Bottom}>
                      <Icon
                        name="edit"
                        type="font-awesome"
                        color="#7c3593"
                        size={30}
                        onPress={() => {
                          setCurrentRecipe(item);
                          navigation.navigate("UpdateRecipes");
                        }}
                      />
                      </View>
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
    width: width * 95,
    paddingLeft:5,
    paddingRight:5
  },
  med:{
    height: height * 0.05
  },
  layouts: {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#FFA96D", //"#ea8e4f",
    borderRadius: 8,
    width: width * 0.95,
  },

  styleText: {
    padding: 7.5,
    margin: 10,
    width: width * 0.35,
  },
  h1: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ebecf2",
  },
  h2: {
    fontWeight: "bold",
    color: "#ebecf2",
  },
  card: {
    marginTop: 1,
    marginBottom: 1,
    padding: 5,
  },
  cardImage: {
    width: width * 0.45,
    height: height * 0.2,
    borderRadius: 8,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },

  favoriteButton: {
    flex: 1,
    justifyContent: "center",
    marginTop: 10,
  },
  emptyNotes: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default CardList;
