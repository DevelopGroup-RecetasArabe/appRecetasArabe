import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Button,
} from "react-native";
import CardList from "../shared/CardList";
import { Context as RecipeContext } from "../../providers/RecipeContext";
import { Context as AuthContext } from "../../providers/AuthContext";
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("window");

const MyRecipes = ({ navigation }) => {
  const { state: userState } = useContext(AuthContext);
  const { state, getRecipesByUserID, deleteRecipe, refreshRecipe } = useContext(
    RecipeContext
  );
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    getRecipesByUserID(userState.user.id);
  }, [refresh]);

  console.log(state.recipesByUserID);

  return (
    <LinearGradient
      //colors={["#245071", "#7c3593", "#245071"]}
      //colors={["#a4508b", "#7c3593", "#a4508b"]}
      //colors={["#5f72be","#9921e8"]}
      colors={["#245071", "#9921e8"]}
      start={{ x: 0, y: 0.2 }}
      end={{ x: 1, y: 0.2 }}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <View style={styles.den}>
          <CardList
            array={state.recipesByUserID}
            navigation={navigation}
            callbackDelete={deleteRecipe}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //width: width,
    //backgroundColor: "#ebecf2",
  },
    den: {
      paddingTop: 10,
      paddingBottom: 10,
    },
});

export default MyRecipes;
