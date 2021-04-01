import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
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
  return (
    <View style={styles.container}>
      <FlatList
        data={array}
        numColumns={2}
        renderItem={({ item, i }) => (
          <>
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() => {
                navigation.navigate("Recipes", {
                  arrayPreparations: item.arrayPreparations,
                  description: item.description,
                  title: item.title,
                  arrayIngredients: item.arrayIngredients,
                  image: item.getImage,
                });
              }}
            >
              <View style={styles.ContImage}>
                <Image
                  style={styles.cardImage}
                  source={{ uri: item.getImage }}
                />
              </View>
              <View style={styles.ContTitle}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <View style={styles.ContDescrip}>
                <Text style={styles.description}>{item.description}</Text>
              </View>
              <View style={styles.favoriteButton}>
              <Icon
                    name={"user-circle"}
                    type={"font-awesome"}
                    size={17}
                    color={"#ebecf2"}
                    backgroundColor={"#7f71a0"}
                    borderRadius={80}
                  />
                <Text style={styles.User}>
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
    flex: 1,
    width: width * 95
  },
  ContTitle: {
    backgroundColor: '#24507198',
    //backgroundColor: '#FFFFFF98',
    marginTop: 18,
    paddingTop: 4,
    paddingBottom:4,
    borderRadius: 10,
    //Sombra
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomColor: "#b4b5c8",
    borderBottomWidth: 0.3,
    textAlign: "center",
    //color: "#7f71a0",
    color: "#ebecf2", //"#a5a4a4"
  },
  ContDescrip: {
    flex: 3,
  },
  description: {
    fontSize: 16,
    marginTop: 7,
    color: "#ebecf2",
    textAlign: "left",
  },
  card: {
    backgroundColor: "#b580ba",
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
    marginBottom: 10
  },
  ContImage: {
    //Sombra
    shadowColor: "#7c3593",
    shadowOffset: { width: 3, height: 12},
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  cardImage: {
    width: width * 0.42,
    height: height * 0.2,
    borderRadius: 20,
    paddingRight: 8
  },
  favoriteButton: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: "row",
  },
  User: {
    color: "#ebecf2",
  }
});

export default Card;
