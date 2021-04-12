import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import Card from "../shared/Card";
import { Context as RecipeContext } from "../../providers/RecipeContext";
import { Context as AuthContext, Context } from "../../providers/AuthContext";
import { LinearGradient } from "expo-linear-gradient";
import Toaster from "../shared/Toaster";

const Home = ({ navigation }) => {
  const [refresh, setRefresh] = useState(false);
  const { state: userState } = useContext(Context);
  const { state, getRecipes, refreshHome, clearMessage } = useContext(
    RecipeContext
  );

  useEffect(() => {
    getRecipes();
  }, [refresh]);

  useEffect(() => {}, [userState.user.darkMode]);

  console.log(userState.user.darkMode);

  const handleRefresh = () => {
    setRefresh(!refresh);
    refreshHome();
  };

  return (
    <LinearGradient
      colors={
        state.darkMode === "light"
          ? ["#245071", "#9921e8"]
          : ["#090979", "#bb00f7"]
      }
      start={{ x: 0, y: 0.2 }}
      end={{ x: 1, y: 0.2 }}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <View style={styles.den}>
          {state.created ? (
            <Toaster message={state.message} callback={handleRefresh} />
          ) : null}
          <Card array={state.recipes} navigation={navigation} />
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

export default Home;
