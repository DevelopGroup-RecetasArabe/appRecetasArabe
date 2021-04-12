import React, { useState, useEffect, useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { Context as RecipeContext } from "../../providers/RecipeContext";
import { Context as AuthContext } from "../../providers/AuthContext";

const { width, height } = Dimensions.get("window");

const Recipes = ({ route }) => {
  const { state } = useContext(RecipeContext);
  const { state: userState } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [arrayIngredients] = useState([]);
  const [arrayPreparations, setArrayPreparations] = useState([]);

  useEffect(() => {
    if (state.currentRecipe.id) {
      setImage(state.currentRecipe.getImage);
      setTitle(state.currentRecipe.title);
      setDescription(state.currentRecipe.description);

      for (let i = 0; i < state.currentRecipe.arrayIngredients.length; i++) {
        arrayIngredients[i] = state.currentRecipe.arrayIngredients[i];
      }

      for (let i = 0; i < state.currentRecipe.arrayPreparations.length; i++) {
        arrayPreparations[i] = state.currentRecipe.arrayPreparations[i];
      }
    }
  }, [state.currentRecipe]);

  console.log(arrayIngredients);

  return (
    <ScrollView
      style={
        userState.user.darkMode === "light"
          ? [styles.container, { backgroundColor: "#fff" }]
          : [styles.container, { backgroundColor: "black" }]
      }
    >
      <View style={styles.recipeImage}>
        <Image source={{ uri: image }} style={styles.recipeImage} />
      </View>
      <View style={styles.formTitle}>
        <Text
          style={
            userState.user.darkMode === "light"
              ? [styles.h1, { color: "black" }]
              : [styles.h1, { color: "#fff" }]
          }
        >
          {title}
        </Text>
        <Text
          style={
            userState.user.darkMode === "light"
              ? [styles.p, { color: "black" }]
              : [styles.p, { color: "#fff" }]
          }
        >
          {description}
        </Text>
      </View>

      <View style={styles.formIngredient}>
        <View>
          <LinearGradient
            colors={["#245071", "#9921e8"]}
            start={{ x: 0, y: 0.2 }}
            end={{ x: 1, y: 0.2 }}
            style={styles.FontingPre}
          >
            <Text style={styles.ingPre}>Ingredientes</Text>
          </LinearGradient>
        </View>

        {arrayIngredients.map((ing, i) => (
          <Text key={i} style={styles.list}>
            <View style={styles.circle}>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#fff",
                  marginTop: 5,
                }}
              >
                {i + 1}
              </Text>
            </View>
            <Text
              style={
                userState.user.darkMode === "light"
                  ? [styles.text, { color: "black" }]
                  : [styles.text, { color: "#fff" }]
              }
            >
              {" " + ing}
            </Text>
          </Text>
        ))}
      </View>
      <View style={styles.formPreparation}>
        <View>
          <LinearGradient
            colors={["#245071", "#9921e8"]}
            start={{ x: 0, y: 0.2 }}
            end={{ x: 1, y: 0.2 }}
            style={styles.FontingPre}
          >
            <Text style={styles.ingPre}>Preparación</Text>
          </LinearGradient>
        </View>
        {arrayPreparations.map((prepa, i) => (
          <Text key={i} style={styles.list}>
            <View style={styles.circle}>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#fff",
                  marginTop: 5,
                }}
              >
                {i + 1}
              </Text>
            </View>
            <Text
              style={
                userState.user.darkMode === "light"
                  ? [styles.text, { color: "black" }]
                  : [styles.text, { color: "#fff" }]
              }
            >
              {" " + prepa}
            </Text>
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    //backgroundColor: "#ebecf2",
    //backgroundColor: '#b580ba',
    //backgroundColor: '#b4b5c8',
    padding: 15,
  },
  color: {
    backgroundColor: "#ea8e4f",
    height: 30,
  },
  recipeImage: {
    height: height * 0.4,
    borderRadius: 40,
    justifyContent: "space-between",
    //Sombra
    shadowColor: "black",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.32,
    shadowRadius: 3.9,
  },
  formTitle: {
    marginTop: 12,
    marginBottom: 5,
    //fontFamily:'SansitaSwashed-Light'
  },
  h1: {
    fontSize: 33,
    fontWeight: "bold",
    //color: "#245071",
    marginLeft: width * 0.03,
    paddingBottom: 4,
    //fontFamily:'Roboto'
  },
  p: {
    fontSize: 19,
    fontStyle: "italic",
    marginLeft: width * 0.03,
    paddingBottom: 20,
  },
  ingPre: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#ebecf2",
  },
  FontingPre: {
    flex: 1,
    //backgroundColor: '#7c3593',
    borderRadius: 10,
    paddingBottom: 5,
    paddingTop: 5,
    marginLeft: width * 0.12,
    marginRight: width * 0.12,
    marginTop: 9,
    marginBottom: 16,
    //Sombra
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
  circle: {
    //backgroundColor: "#7c3593",
    backgroundColor: "#ea8e4f",
    alignItems: "center",
    padding: 2,
    width: 20,
    height: 30,
    borderRadius: 50,
    marginLeft: width * 0.03,
  },
  text: {
    fontSize: 20,
    textAlignVertical: "center",
  },
  list: {
    marginBottom: 15,
  },
  formIngredient: {
    borderTopWidth: 1.2,
    borderColor: "#245071",
    marginBottom: 15,
  },
  formPreparation: {
    borderTopWidth: 1.2,
    borderColor: "#245071",
    paddingBottom: 40,
  },
});

export default Recipes;
