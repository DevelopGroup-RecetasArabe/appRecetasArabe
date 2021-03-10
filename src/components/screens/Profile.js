import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SharedButton from "../shared/SharedButton";
import { firebase } from "../../Firebase";

const Profile = ({ navigation }) => {
  const SignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Cerrar Sesion");
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error);
      });
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
