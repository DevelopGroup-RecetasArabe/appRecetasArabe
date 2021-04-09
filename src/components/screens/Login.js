import React from "react";
import { ScrollView } from "react-native";
import { Dimensions, StyleSheet, View, Image, Text } from "react-native";
import SignIn from "../Forms/SignIn";
import Logo from "../../assets/logo.png";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("screen");

const Login = ({ navigation, route }) => {
  return (
    <LinearGradient
      colors={["#090979", "#bb00f7"]}
      style={styles.container}
      start={{ x: 0, y: 0.3 }}
      end={{ x: 1, y: 0.5 }}
    >
      <ScrollView>
        <View>
          <View style={styles.form}>
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
    borderRadius: 10,
    backgroundColor: "#ffffff",

    //Sombra
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.32,
    shadowRadius: 3.9,
  },
});
export default Login;
