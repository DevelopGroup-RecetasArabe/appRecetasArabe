import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import Card from "../shared/Card";
import { Context as RecipeContext } from "../../providers/RecipeContext";

const { width, height } = Dimensions.get("window");

const Home = ({ navigation }) => {
  const { state, getRecipes } = useContext(RecipeContext);

  useEffect(() => {
    if (state.recipes) {
      getRecipes(state.recipes);
    }
  }, [state.recipes]);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Card array={state.recipes} navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: "#ebecf2",
  },
});

export default Home;
