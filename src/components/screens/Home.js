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
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("window");

const Home = ({ navigation }) => {
  const { state, getRecipes, resetCreated } = useContext(RecipeContext);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    getRecipes();
  }, [refresh]);

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
          <Card array={state.recipes} navigation={navigation} />
        </View>
        {/* {state.created ? (
        <Button
          title={"Refresh"}
          onPress={() => {
            setRefresh(!refresh);
            resetCreated();
          }}
        />
      ) : null} */}
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
