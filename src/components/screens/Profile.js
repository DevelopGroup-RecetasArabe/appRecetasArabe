import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Button, Switch } from "react-native";
import SharedButton from "../shared/SharedButton";
import { firebase } from "../../Firebase";
import { Context as RecipeContext } from "../../providers/RecipeContext";
import { Context as AuthContext } from "../../providers/AuthContext";
import { State } from "react-native-gesture-handler";

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
    <View style={styles.container}>
      <View style={styles.but}>
        <SharedButton
          title="Cerrar Sesión"
          colors={"#7c3593"}
          size={0.5}
          callback={SignOut}
        />
        <Text>Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  but: {
    paddingTop: 20,
    marginBottom: 5,
    alignItems: "center",
  },
});

export default Profile;
