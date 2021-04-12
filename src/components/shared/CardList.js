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
import { LinearGradient } from 'expo-linear-gradient';
import {useFonts} from "@expo-google-fonts/inter"

const {width, height} = Dimensions.get("window");

const CardList = ({ navigation, array, callbackDelete }) => {
  const [Fonts] = useFonts({Ubuntu: require("../../assets/fonts/Ubuntu-Light.ttf")});
  return (
    <LinearGradient
    
    // Background Linear Gradient
    colors={["#245071","#9921e8"/*'#e145e1', '#900cec'*/]}//'#f94e4e','#ea8e4f
    start={{ x: 0, y: 0.2 }}
    end={{ x: 1, y: 0.2 }}
    style={styles.background}
  
    >
    <View style={styles.container}>
      <FlatList
        data={array}
        numColumns={1}
        renderItem={({ item, i }) => (
          <View>
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
              
              <View style={styles.layouts}>
                <View>
                  <Image
                    style={styles.cardImage}
                    source={{ uri: item.getImage }}
                  />
                </View>

                <View style={styles.styleText}>
                  <Text style={[styles.h1, {fontFamily: "Ubuntu"}]}>{item.title}</Text>
                  <Text style={[styles.h2, {fontFamily: "Ubuntu"}]}>{item.description}</Text>
                </View>

                <View style={styles.favoriteButton}>
                  <TouchableOpacity></TouchableOpacity>
                  <TouchableOpacity>
                    <Icon
                      name="trash"
                      type="font-awesome"
                      color="#7c3593"
                      size={24}
                      onPress={() => {
                        callbackDelete(item.id);
                      }}
                    />
                    <Icon
                      name="edit"
                      type="font-awesome"
                      color="#7c3593"
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height*1,
  },
  
  container: {
    flex: 1,
    width: width,
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    marginLeft: width*0.025
  },
  layouts: {

    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#FFA96D",//"#ea8e4f",
    borderRadius: 8,
    width: width*0.95,

  },

  styleText: {
    padding: 7.5,
    margin: 10,
    width: width*0.35,
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
});

export default CardList;
