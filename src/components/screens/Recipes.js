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
    <ScrollView style={styles.container}>
      <View style={styles.recipeImage}>
        <Image source={{ uri: image }} style={styles.recipeImage} />
      </View>
      <View style={styles.formTitle}>
        <Text style={styles.h1}>{title}</Text>
        <Text style={styles.p}>{description}</Text>
      </View>

      <View style={styles.formIngredient}>
        <View style={styles.FontingPre}><Text style={styles.ingPre}>Ingredientes</Text></View>
        {arrayIngredients.map((ing, i) => (
          <Text key={i} style={styles.list}>
            <View style={styles.circle}>
              <Text style={{ textAlign: "center" , color:"#fff", marginTop:5}}>{i + 1}</Text>
            </View>
            <Text style={styles.text}>{" " +ing}</Text>
          </Text>
        ))}
      </View>
      <View style={styles.formPreparation}>
        <View style={styles.FontingPre}><Text style={styles.ingPre}>Preparacion</Text></View>
        {arrayPreparations.map((prepa, i) => (
          <Text key={i} style={styles.list}>
            <View style={styles.circle}>
              <Text style={{textAlign: "center", color:"#fff", marginTop:5}}>{i + 1}</Text>
            </View >
            <Text style={styles.text}>{" " +prepa}</Text>
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    //backgroundColor: '#b580ba',
    //backgroundColor: '#b4b5c8',
    padding: 15
  },
  color: {
    backgroundColor: '#ea8e4f',
    height: 30,
  },
  recipeImage: {
    height: height *0.40,
    borderRadius: 40,
    justifyContent: 'space-between',
    //Sombra
    shadowColor: "black",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.32,
    shadowRadius: 3.9,
  },
  formTitle: {
    marginTop: 12,
    marginBottom: 5
  },
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#245071',
    marginLeft: width * 0.03,
    paddingBottom: 4,
  },
  p: {
    fontSize: 18,
    marginLeft: width * 0.03,
    paddingBottom: 20,
  },
  ingPre:{  
    fontWeight: 'bold', 
    fontSize: 18,
    textAlign: "center",
  },
  FontingPre: {
    flex:1,
    backgroundColor: '#24507198',
    borderRadius: 10,
    paddingBottom:5,
    paddingTop:5,
    marginLeft: width * 0.05,
    marginRight:width * 0.05,
    marginTop: 9, 
    marginBottom: 16,
    //Sombra
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
  circle: {
    backgroundColor: "#7c3593",
    alignItems: "center",
    padding: 2,
    width: 30,
    height: 30,
    borderRadius: 40,
    marginLeft: width * 0.03
    //textAlignVertical: "center"
  },
  text: { 
    fontSize: 18,
    textAlignVertical: "center",
    //marginLeft: 12
  },
  list: {
    marginBottom: 15,
  },
  formIngredient: {
    borderTopWidth: 0.8,
    borderColor: "#7c3593",
  },
  formPreparation: {
    borderTopWidth: 0.8,
    borderColor: "#7c3593",
    paddingBottom: 20
  },
});

export default Recipes;
