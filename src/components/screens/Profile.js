import React, { useContext, useState } from "react";
import { Dimensions, StyleSheet, Text, View, Button, Switch } from "react-native";
import SharedButton from "../shared/SharedButton";
import { firebase } from "../../Firebase";
import { Context as RecipeContext } from "../../providers/RecipeContext";
import { Context as AuthContext } from "../../providers/AuthContext";
import { State } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("screen");

const Profile = ({ navigation }) => {
  const { state: userState, signout, changeModeLight } = useContext(
    AuthContext
  );
  const { state: recipeState, darkMode } = useContext(RecipeContext);

  const [isEnabled, setIsEnabled] = useState(recipeState.darkMode === "dark");

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    if (!isEnabled) {
      darkMode("dark");
    } else {
      darkMode("light");
    }
  };

  const SignOut = () => {
    signout();
  };

  return (
    <LinearGradient
      colors={
        recipeState.darkMode === "light"
          ? ["#245071", "#9921e8"]
          : ["#090979", "#bb00f7"]
      }
      start={{ x: 0, y: 0.2 }}
      end={{ x: 1, y: 0.2 }}
      style={styles.container}
    >
      <View style={styles.container}>
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
          }>
          <View style={styles.header}>
            <Text 
              style={
                recipeState.darkMode === "light"
                  ? [styles.h1, { color: "#000" }]
                  : [styles.h1, { color: "#ebecf2" }]
              }>Cerrar Sesion</Text>
            <Text 
              style={
                recipeState.darkMode === "light"
                  ? [styles.h2, { color: "#000" }]
                  : [styles.h2, { color: "#ebecf2" }]
              }>
              Esperamos que tu estadia en esta app sea de tu agrado.
              Recuerda que no cualquiera puede cocinar pero si de 
              cualquier lugar puede surgir un gran chef.
            </Text>
            <View style={styles.but}>
            <SharedButton
              title="Cerrar Sesión"
              colors={"#7c3593"}
              size={0.5}
              callback={SignOut}
            />
            <View style={styles.box} />
            <Text 
              style={
                recipeState.darkMode === "light"
                  ? [styles.h3, { color: "#000" }]
                  : [styles.h3, { color: "#ebecf2" }]
              }>Dark Mode</Text>
            <Switch
              trackColor={{ false: "#b580ba", true: "#B4975A" }}
              thumbColor={isEnabled ? "#000" : "#000"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    height:10,
  },
  header:{
    flex: 1,
    padding: 10,
    alignSelf: "center",
  }, 
  h1: {
    paddingTop: 20, 
    fontSize: 25,
    textAlign: "center",
    marginBottom: 7
  },
  h2: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 15,
    marginLeft: width * 0.08,
    marginRight: width * 0.08
  },
  h3: {
    paddingTop: 30, 
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 3
  },
  but: {
    paddingTop: 60,
    marginBottom: 5,
    alignItems: "center",
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

export default Profile;
