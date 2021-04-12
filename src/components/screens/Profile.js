import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Button, Switch } from "react-native";
import SharedButton from "../shared/SharedButton";
import { Context as AuthContext } from "../../providers/AuthContext";

const Profile = ({ navigation }) => {
  const { state: userState, signout, changeModeLight } = useContext(
    AuthContext
  );

  const [isEnabled, setIsEnabled] = useState(
    userState.user.darkMode === "dark"
  );

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    if (!isEnabled) {
      changeModeLight(
        userState.user.id,
        userState.user.email,
        userState.user.fullname,
        "dark"
      );
      setIsEnabled(true);
    } else {
      changeModeLight(
        userState.user.id,
        userState.user.email,
        userState.user.fullname,
        "light"
      );
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
