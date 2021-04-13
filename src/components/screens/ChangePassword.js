import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Context as RecipeContext } from "../../providers/RecipeContext";
import ChangePasswordForm from "../Forms/ChamgePasswordForm";

const { width, height } = Dimensions.get("screen");

const ChangePassword = ({ navigation }) => {
  const { state: recipeState } = useContext(RecipeContext);

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
            recipeState.darkMode === "light"
              ? [styles.form, { backgroundColor: "#ffffff", borderRadius: 10 }]
              : [
                  styles.form,
                  { backgroundColor: "#00000070", borderRadius: 10 },
                ]
          }
        >
          <ChangePasswordForm navigation={navigation} />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

    //Sombra
    shadowColor: "black",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.32,
    shadowRadius: 3.9,
  },
});

export default ChangePassword;
