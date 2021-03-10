import React from "react";
import { Dimensions, StyleSheet, View, Image} from "react-native";
import SignIn from "../Forms/SignIn";

const { width, height } = Dimensions.get("screen");

const Login = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mini}>
        <Image
          style={styles.logo}
          source={{ uri: String(require("../../assets/logo.png")) }}
        />
        <SignIn navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#ebcf2',
    backgroundColor: "#b580ba",
    alignItems: "center",
    justifyContent: "center",
  },
  mini: {
    flex: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 15,
    width: width * 0.8,
    marginTop: height * 0.1,
    marginBottom: height * 0.1,
  },
  logo: {
    borderRadius: 20,
    width: width * 0.35,
    height: height * 0.2,
  },
});
export default Login;
