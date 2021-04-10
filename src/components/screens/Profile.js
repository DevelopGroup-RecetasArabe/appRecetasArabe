import React from "react";
import { StyleSheet, Text, View, Switch, Dimensions } from "react-native";
import SharedButton from "../shared/SharedButton";
import { firebase } from "../../Firebase";
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from "react-native-elements";
import Logo from "../../assets/logo.png"

const { width, height } = Dimensions.get("window");

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
    <LinearGradient
      //colors={["#245071", "#7c3593", "#245071"]}
      //colors={["#a4508b", "#7c3593", "#a4508b"]}
      //colors={["#5f72be","#9921e8"]}
      colors={["#245071","#9921e8"]}
      start={{ x: 0, y: 0.2 }}
      end={{ x: 1, y: 0.2 }}
      style={styles.container}
    >
      
      <View style={styles.subContainer}>
        
        <View style={styles.header}>
          <View style={styles.logo}>
          <Image 
            style={styles.logoimg}
            source={Logo}
          />
        </View>
          <Text style={styles.h1}>Perfil</Text>
          
          <Text style={styles.h2}>
            Esperamos que tu estadia en esta app sea de tu agrado.
            Recuerda que no cualquiera puede cocinar pero si de 
            cualquier lugar puede surgir un gran chef.
          </Text>
        </View>
        <View style={styles.but}>
          <View style={styles.darks}>
            <View style={styles.darktext}>
              <Text style={styles.h3}>Modo Oscuro</Text>
            </View>
            <View>
              <Switch
              thumbColor='#424242'
              trackColor='#292929'
            />
            </View>
            
          </View>
          <SharedButton
            title="Cerrar Sesión"
            colors={"#7c3593"}
            size={0.5}
            callback={SignOut}
          />
          
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
  subContainer: {
    flex: 1,
    backgroundColor: '#b580ba',
    
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    margin: width*0.17
  },
  logo: {
    flex: 1,
    borderRadius: "300%",
    width: width * 0.40,
    height: height * 0.20,
    alignSelf: "center",
    justifyContent: "center",
      
  },
  logoimg: {
    
    borderRadius: "300%",
    width: width * 0.40,
    height: height * 0.20,
      
  },
  header:{
    flex: 1,
    textAlign: "justify",
    padding: 10,
    paddingTop: 5,
    alignSelf: "center",
  },
  
  h1: {
    fontSize: 25,
    textAlign: "center",
    color: "#ebecf2",
  },
  h2: {
    fontSize: 15,
    color: "#ebecf2",
  },
  but: {
    marginBottom: 5,
    alignItems: "center",
  },
  darks: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    marginBottom: 10,
    

  },
  darktext: {
    marginRight: 10,
  },
  h3: {
    fontSize: 15,
    color: "#ebecf2",
  },
});

export default Profile;
