import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import SignUp from "../Forms/SignUp";
import { LinearGradient } from "expo-linear-gradient";
import { Context as RecipeContext } from "../../providers/RecipeContext";

const { width, height } = Dimensions.get("screen");

const NewUser = ({ navigation }) => {
  const { state } = useContext(RecipeContext);
  useEffect(() => {}, [state.darkMode]);
  return (
    <LinearGradient
      colors={["#090979", "#bb00f7"]}
      style={styles.container}
      start={{ x: 0, y: 0.3 }}
      end={{ x: 1, y: 0.5 }}
    >
      <ScrollView style={styles.container}>
        <View
          style={
            state.darkMode === "light"
              ? [styles.form, { backgroundColor: "#ffffff", borderRadius: 10 }]
              : [styles.form, { backgroundColor: "#00000070", borderRadius: 10 }]
          }
        >
          <SignUp navigation={navigation} />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    marginTop: height * 0.05,
    marginBottom: height * 0.05,
    width: width * 0.9,
    height: height * 0.9,
    //borderRadius: 5,
    //backgroundColor: "#ffffff",
    //Sombra
    shadowColor: "black",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.32,
    shadowRadius: 3.9,
  },
});

export default NewUser;
