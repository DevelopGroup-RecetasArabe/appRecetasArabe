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

const { width, height } = Dimensions.get("window");

const Recipes = () => {
  const { state } = useContext(RecipeContext);

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

  return (
    <ScrollView
      style={
        state.darkMode === "light"
          ? [styles.container, { backgroundColor: "#fff" }]
          : [styles.container, { backgroundColor: "black" }]
      }
    >
      <View
        style={
          state.darkMode === "light"
            ? [styles.recipeImage, { shadowColor: "black" }]
            : [styles.recipeImage, { shadowColor: "#B4975A" }]
        }
      >
        <Image
          source={{ uri: image }}
          style={
            state.darkMode === "light"
              ? [styles.recipeImage, { shadowColor: "black" }]
              : [styles.recipeImage, { shadowColor: "#B4975A" }]
          }
        />
      </View>
      <View style={styles.formTitle}>
        <Text
          style={
            state.darkMode === "light"
              ? [styles.h1, { color: "black" }]
              : [styles.h1, { color: "#fff" }]
          }
        >
          {title}
        </Text>
        <Text
          style={
            state.darkMode === "light"
              ? [styles.p, { color: "black" }]
              : [styles.p, { color: "#fff" }]
          }
        >
          {description}
        </Text>
      </View>

      <View
        style={
          state.darkMode === "light"
            ? [styles.formIngredient, { borderColor: "#245071" }]
            : [styles.formIngredient, { borderColor: "#B4975A" }]
        }
      >
        <View>
          <LinearGradient
            //colors={["#245071", "#9921e8"]}
            colors={
              state.darkMode === "light"
                ? ["#245071", "#9921e8"] //revisar
                : ["#090979", "#bb00f7"]
            }
            start={{ x: 0, y: 0.2 }}
            end={{ x: 1, y: 0.2 }}
            style={styles.FontingPre}
          >
            <Text style={styles.ingPre}>Ingredientes</Text>
          </LinearGradient>
        </View>

        {arrayIngredients.map((ing, i) => (
          <Text key={i} style={styles.list}>
            <View
              style={
                state.darkMode === "light"
                  ? [styles.circle, { backgroundColor: "#ea8e4f" }]
                  : [styles.circle, { backgroundColor: "#B4975A" }]
              }
            >
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
                state.darkMode === "light"
                  ? [styles.text, { color: "black" }]
                  : [styles.text, { color: "#fff" }]
              }
            >
              {" " + ing}
            </Text>
          </Text>
        ))}
      </View>
      <View
        style={
          state.darkMode === "light"
            ? [styles.formPreparation, { borderColor: "#245071" }]
            : [styles.formPreparation, { borderColor: "#B4975A" }]
        }
      >
        <View>
          <LinearGradient
            colors={
              state.darkMode === "light"
                ? ["#245071", "#9921e8"]
                : ["#090979", "#bb00f7"]
            }
            start={{ x: 0, y: 0.2 }}
            end={{ x: 1, y: 0.2 }}
            style={styles.FontingPre}
          >
            <Text style={styles.ingPre}>Preparación</Text>
          </LinearGradient>
        </View>
        {arrayPreparations.map((prepa, i) => (
          <Text key={i} style={styles.list}>
            <View
              style={
                state.darkMode === "light"
                  ? [styles.circle, { backgroundColor: "#ea8e4f" }]
                  : [styles.circle, { backgroundColor: "#B4975A" }]
              }
            >
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
                state.darkMode === "light"
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
    shadowOffset: { width: 5, height: 10 },
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
    marginBottom: 15,
  },
  formPreparation: {
    borderTopWidth: 1.2,
    borderColor: "#245071",
    paddingBottom: 40,
  },
});

export default Recipes;
