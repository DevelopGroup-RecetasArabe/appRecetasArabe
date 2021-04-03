import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Button,
} from "react-native";
import Card from "../shared/Card";
import { Context as RecipeContext } from "../../providers/RecipeContext";

const { width, height } = Dimensions.get("window");

const Home = ({ navigation }) => {
  const { state, getRecipes } = useContext(RecipeContext);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    getRecipes();
  }, [refresh]);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Card array={state.recipes} navigation={navigation} />
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

export default Home;
