import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import ChangePasswordForm from "../Forms/ChamgePasswordForm";

const { width, height } = Dimensions.get("screen");

const ChangePassword = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#090979", "#bb00f7"]}
      style={styles.container}
      start={{ x: 0, y: 0.3 }}
      end={{ x: 1, y: 0.5 }}
    >
      <ScrollView style={styles.container}>
        <View style={styles.form}>
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
    marginTop: 65,
    width: width * 0.9,
    height: height * 0.85,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    //Sombra
    shadowColor: "black",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.32,
    shadowRadius: 3.9,
  },
});

export default ChangePassword;
