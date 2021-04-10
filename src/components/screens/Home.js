import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import Card from "../shared/Card";
import { Context as RecipeContext } from "../../providers/RecipeContext";
import { LinearGradient } from "expo-linear-gradient";
import Toaster from "../shared/Toaster";

const { width, height } = Dimensions.get("window");

const Home = ({ navigation }) => {
  const [refresh, setRefresh] = useState(false);
  const { state, getRecipes, refreshHome, clearMessage } = useContext(
    RecipeContext
  );

  useEffect(() => {
    getRecipes();
  }, [refresh]);

  console.log(state.darkMode);

  const handleRefresh = () => {
    setRefresh(!refresh);
    refreshHome();
  };

  return (
    <LinearGradient
      //colors={["#245071", "#7c3593", "#245071"]}
      //colors={["#a4508b", "#7c3593", "#a4508b"]}
      //colors={["#5f72be","#9921e8"]}

      colors={
        state.darkMode === "light" ? ["#245071", "#9921e8"] : ["red", "green"]
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
    //width: width,
    //backgroundColor: "#ebecf2",
  },
  den: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default Home;
