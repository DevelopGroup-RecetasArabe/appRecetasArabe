import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import CardList from "../shared/CardList";
import { Context as RecipeContext } from "../../providers/RecipeContext";
import { Context as AuthContext } from "../../providers/AuthContext";
import Toast from "react-native-toast-message";

const { width, height } = Dimensions.get("window");

const MyRecipes = ({ navigation }) => {
  const { state: userState } = useContext(AuthContext);
  const { state, getRecipesByUserID, deleteRecipe, updateRecipe, toastMessage} = useContext(RecipeContext);

  useEffect(() => {
    if (state.recipesByUserID) {
      getRecipesByUserID(userState.user.id);
    }
  }, []);

  /*useEffect(() =>{
    if(state.getRecipesByUserID){
      Toast.show(
        {
          type: 'success',
          text1: state.toastMessage,
        }
      )
    }
  },[state.toastMessage]);*/

  useEffect(() =>{
    if(state.toastMessage){
      Toast.show(
        {
          text1: state.toastMessage,
        }
      )
    }
  },[state.toastMessage]);

  /*useEffect(() =>{
    if(state.deleteRecipe){
      Toast.show(
        {
          
          text1: state.toastMessage,
        }
      )
    }
  },[state.toastMessage]);*/
  return (
    <ScrollView style={styles.container}>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <View>
        <CardList
          array={state.recipesByUserID}
          navigation={navigation}
          callbackDelete={deleteRecipe}
        />
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

export default MyRecipes;
