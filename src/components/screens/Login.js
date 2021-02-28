import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Input, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import SharedButton from '../shared/SharedButton';

const { width, height } = Dimensions.get("screen");

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image 
            style={styles.logo}
            source={{ uri: require('../../assets/logo.png') }}
      />
      <View style={styles.inputs}>
        <Input placeholder="Usuario" leftIcon={<Icon name="user" />} />
        <Input placeholder="Contraseña" leftIcon={<Icon name="lock" />} />
        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
      </View>
      
      <View style={styles.but}>
      <SharedButton title="Inciar Sesion" size={0.5} colors={"#7c3593"}/>
        <TouchableOpacity onPress={() => navigation.navigate("Load")}>
          <Text>Registrate</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebcf2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  but:{
    paddingTop: 20,
    alignItems: 'center',
  },
  inputs:{
    paddingTop: 20,
    justifyContent: 'center',
  },
  logo: {
    borderRadius: 20,
    width: width * 0.35,
    height: height * 0.20,
},
});
export default Login;
