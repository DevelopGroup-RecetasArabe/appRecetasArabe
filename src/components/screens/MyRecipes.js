import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Button, View, Dimensions, ScrollView } from "react-native";
import CardList from "../shared/CardList";
import { Context as RecipeContext } from "../../providers/RecipeContext";
import { Context as AuthContext } from "../../providers/AuthContext";

const { width, height } = Dimensions.get("window");

const MyRecipes = ({ navigation }) => {
  const { state: userState } = useContext(AuthContext);
  const { state, getRecipesByUserID, deleteRecipe } = useContext(RecipeContext);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (state.recipesByUserID) {
      getRecipesByUserID(userState.user.id);
    }
  }, [refresh]);

  return (
    <ScrollView style={styles.container}>
      <View>
        <CardList
          array={state.recipesByUserID}
          navigation={navigation}
          callbackDelete={deleteRecipe}
        />
      </View>
      <Button
        title={"Refresh"}
        onPress={() => {
          setRefresh(!refresh);
        }}
      />
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
