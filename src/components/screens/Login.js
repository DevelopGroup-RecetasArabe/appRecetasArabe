import React, { useContext, useEffect } from "react";
import { Dimensions, StyleSheet, View, ScrollView } from "react-native";
import SignIn from "../Forms/SignIn";
import { LinearGradient } from "expo-linear-gradient";
import { Context as RecipeContext } from "../../providers/RecipeContext";

const { width, height } = Dimensions.get("screen");

const Login = ({ navigation }) => {
  const { state: recipeState } = useContext(RecipeContext);

  return (
    <LinearGradient
      colors={["#090979", "#bb00f7"]}
      style={styles.container}
      start={{ x: 0, y: 0.3 }}
      end={{ x: 1, y: 0.5 }}
    >
      <ScrollView>
        <View>
          <View
            style={
              recipeState.darkMode === "light"
                ? [
                    styles.form,
                    { backgroundColor: "#ffffff", borderRadius: 10 },
                  ]
                : [
                    styles.form,
                    { backgroundColor: "#00000070", borderRadius: 10 },
                  ]
            }
          >
            <SignIn navigation={navigation} />
          </View>
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

    //Sombra
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.32,
    shadowRadius: 3.9,
  },
});
export default Login;
