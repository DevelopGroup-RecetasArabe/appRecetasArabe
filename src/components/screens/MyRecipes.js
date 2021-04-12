import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View, Dimensions, ScrollView, Button } from "react-native";
import CardList from "../shared/CardList";
import { Context as RecipeContext } from "../../providers/RecipeContext";
import { Context as AuthContext } from "../../providers/AuthContext";
import { LinearGradient } from "expo-linear-gradient";
import Toaster from "../shared/Toaster";

const { width, height } = Dimensions.get("window");

const MyRecipes = ({ navigation }) => {
  const { state: userState } = useContext(AuthContext);
  const {
    state,
    getRecipesByUserID,
    deleteRecipe,
    refreshMyRecipe,
  } = useContext(RecipeContext);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getRecipesByUserID(userState.user.id);
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh(!refresh);
    refreshMyRecipe();
  };

  return (
    <LinearGradient
      colors={state.darkMode === "light" ? ["#245071", "#9921e8"] : ["#090979", "#bb00f7"]}
      start={{ x: 0, y: 0.2 }}
      end={{ x: 1, y: 0.2 }}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <View style={styles.den}>
          {state.updated ? (
            <Toaster message={state.message} callback={handleRefresh} />
          ) : null}
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
  },
    den: {
      paddingTop: 10,
      paddingBottom: 10,
    },
});

export default MyRecipes;
