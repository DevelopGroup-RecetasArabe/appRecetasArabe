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

const Card = ({ navigation, array }) => {
  const { setCurrentRecipe } = useContext(RecipeContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={array}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item, i }) => (
          <>
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                setCurrentRecipe(item);
                navigation.navigate("Recipes");
              }}
            >
              <View>
                <Image
                  style={styles.cardImage}
                  source={{ uri: item.getImage }}
                />
              </View>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
              <View style={styles.favoriteButton}>
                <Text>
                  <Icon
                    name={"user-circle"}
                    type={"font-awesome"}
                    size={18}
                    color={"#ccc"}
                  />
                  {" " + item.fullname}
                </Text>
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
    width: width * 95,
  },
  title: {
    fontSize: 18,
    borderBottomColor: "#b4b5c8",
    borderBottomWidth: 0.3,
    marginBottom: 10,
    textAlign: "center",
    color: "red",
  },
  card: {
    backgroundColor: "#fff",
    padding: 5,
    marginTop: 10,
    width: width * 0.46,
    height: height * 0.4,
    marginLeft: 10,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    marginBottom: 10,
    borderRadius: 7,
  },
  cardImage: {
    width: width,
    height: height * 0.2,
    borderRadius: 5,
  },
  description: {
    padding: -2,
    fontSize: 18,
    padding: 10,
    color: "black",
    textAlign: "center",
  },
  favoriteButton: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "row",
  },
});

export default Card;
