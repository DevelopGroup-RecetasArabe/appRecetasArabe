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
    <ScrollView style={styles.container}>
      <View>
        <CardList
          array={state.recipesByUserID}
          navigation={navigation}
          callbackDelete={deleteRecipe}
        />
      </View>
      {/* <Button
        title={"hola"}
        onPress={() => {
          setRefresh(!refresh);
        }}
      /> */}
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

export default MyRecipes;
