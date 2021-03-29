import React from "react";
import { Dimensions, StyleSheet, View, ImageBackground, Image} from "react-native";
import SignIn from "../Forms/SignIn";

const { width, height } = Dimensions.get('window')

const LoginAnimated = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: require('../../assets/fondo.jpg') }} style={styles.image}>
        <View style={styles.item}>
          <View style={styles.mini}>
            <Image
              style={styles.logo}
              source={{ uri: String(require("../../assets/logo.png")) }}
            />
            <SignIn navigation={navigation} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b580ba",
    justifyContent: "center",
    flexDirection: "column"
  },
  item: {
    flex: 1,
    alignItems: "center"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  mini: {
    flex: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#FFFFFF98',
    padding: 10,
    width: width * 0.85,
    marginTop: height * 0.1,
    marginBottom: height * 0.1,
  },
  logo: {
    borderRadius: 20,
    width: width * 0.35,
    height: height * 0.2,
  },
});
export default LoginAnimated;
