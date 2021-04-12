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
import { LinearGradient } from "expo-linear-gradient";
import { Context as RecipeContext } from "../../providers/RecipeContext";
import { Context as AuthContext } from "../../providers/AuthContext";

const { width, height } = Dimensions.get("window");

const CardList = ({ navigation, array, callbackDelete }) => {
  const { state, setCurrentRecipe } = useContext(RecipeContext);
  const { state: userState } = useContext(AuthContext);
  useEffect(() => {}, [userState.user.darkMode]);

  const emptyFlatList = (
    <View style={styles.emptyNotes}>
      <Text>You don't have any note yet...</Text>
    </View>
  );

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#245071", "#9921e8" /*'#e145e1', '#900cec'*/]} //'#f94e4e','#ea8e4f
      start={{ x: 0, y: 0.2 }}
      end={{ x: 1, y: 0.2 }}
      style={styles.background}
    >
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
                <View
                  style={
                    userState.user.darkMode === "light"
                      ? [styles.layouts, { backgroundColor: "#FFA96D" }]
                      : [styles.layouts, { backgroundColor: "green" }]
                  }
                >
                  <View>
                    <Image
                      style={styles.cardImage}
                      source={{ uri: item.getImage }}
                    />
                  </View>

                  <View style={styles.styleText}>
                    <Text
                      style={
                        userState.user.darkMode === "light"
                          ? [styles.h1, { color: "#ebecf2" }]
                          : [styles.h1, { color: "#ebecf2" }]
                      }
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={
                        userState.user.darkMode === "light"
                          ? [styles.h2, { color: "#ebecf2" }]
                          : [styles.h2, { color: "#ebecf2" }]
                      }
                    >
                      {item.description}
                    </Text>
                  </View>

                  <View style={styles.favoriteButton}>
                    <TouchableOpacity></TouchableOpacity>
                    <TouchableOpacity>
                      <Icon
                        name="trash"
                        type="font-awesome"
                        color={
                          userState.user.darkMode === "light"
                            ? "#7c3593"
                            : "#7c3593"
                        }
                        size={24}
                        onPress={() => {
                          callbackDelete(item.id);
                        }}
                      />
                      <Icon
                        name="edit"
                        type="font-awesome"
                        color={
                          userState.user.darkMode === "light"
                            ? "#7c3593"
                            : "#7c3593"
                        }
                        size={24}
                        onPress={() => {
                          setCurrentRecipe(item);
                          navigation.navigate("UpdateRecipes");
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height * 1,
  },

  container: {
    flex: 1,
    width: width,
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    marginLeft: width * 0.025,
  },
  layouts: {
    justifyContent: "center",
    flexDirection: "row",
    //backgroundColor: "#FFA96D", //"#ea8e4f",
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
    //color: "#ebecf2",
  },
  h2: {
    fontWeight: "bold",
    //color: "#ebecf2",
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
