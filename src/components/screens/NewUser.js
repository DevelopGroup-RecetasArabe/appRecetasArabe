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
              ? [styles.form, { backgroundColor: "#ffffff", borderRadius: 5 }]
              : [styles.form, { backgroundColor: "black", borderRadius: 5 }]
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
    marginTop: 65,
    width: width * 0.9,
    height: height * 0.85,
    //borderRadius: 5,
    //backgroundColor: "#ffffff",
  },
});

export default NewUser;
