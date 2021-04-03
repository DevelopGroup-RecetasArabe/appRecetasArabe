import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

const { width, height } = Dimensions.get("window");

const Recipes = ({ route }) => {
  const {
    arrayPreparations,
    arrayIngredients,
    description,
    title,
    image,
  } = route.params;

  console.log(arrayIngredients, arrayPreparations, image);

  return (
    <ScrollView>
      <View style={styles.recipeImage}>
        <Image source={{ uri: image }} style={styles.recipeImage} />
      </View>
      <View style={styles.formTitle}>
        <Text style={styles.h1}>{title}</Text>
        <Text style={styles.p}>Descripcion: {description}</Text>
      </View>

      <View style={styles.formIngredient}>
        <Text style={{ marginBottom: 16 }}>Ingredientes: </Text>
        {arrayIngredients.map((ing, i) => (
          <Text key={i} style={styles.list}>
            <View style={styles.circle}>
              <Text style={{ textAlign: "center" }}>{i + 1}</Text>
            </View>
            <Text style={{ fontSize: 18 }}>{ing}</Text>
          </Text>
        ))}
      </View>
      <View style={styles.formPreparation}>
        <Text style={{ marginBottom: 16 }}>Preparacion: </Text>
        {arrayPreparations.map((prepa, i) => (
          <Text key={i} style={styles.list}>
            <View style={styles.circle}>
              <Text style={{ textAlign: "center" }}>{i + 1}</Text>
            </View>
            <Text style={{ fontSize: 18 }}>{prepa}</Text>
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  recipeImage: {
    width: width,
    height: 280,
  },
  formTitle: {
    marginTop: 5,
    marginBottom: 5,

    borderBottomWidth: 0.01,
    borderColor: "#ccc",
  },
  h1: {
    fontSize: 30,
    marginLeft: width * 0.03,
    paddingBottom: 2,
  },
  p: {
    marginLeft: width * 0.03,
    paddingBottom: 20,
  },

  formIngredient: {
    marginBottom: 20,
    borderBottomWidth: 0.01,
    borderColor: "#ccc",
  },
  circle: {
    backgroundColor: "#7c3593",
    color: "#fff",
    padding: 10,
    width: 38,
    borderRadius: 55,
    marginRight: 3,
    marginLeft: width * 0.03,
  },
  list: {
    marginBottom: 15,
  },
  formPreparation: {
    marginBottom: 20,
    borderBottomWidth: 0.01,
    borderColor: "#ccc",
  },
});

export default Recipes;
