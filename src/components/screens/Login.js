import React from 'react';
import { Dimensions, StyleSheet, View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SharedButton from '../shared/SharedButton';
import InputText from '../shared/InputText';
import Enlace from '../shared/Enlace';

const { width, height } = Dimensions.get("screen");

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.mini}>
        <Image 
              style={styles.logo}
              source={{ uri: require('../../assets/logo.png') }}
        />
        <View style={styles.inputs}>
          <InputText title="Usuario" border={1} color='#245071' />
          <InputText title="Contraseña" border={1} color='#245071'/>
          <Enlace title="¿Olvidaste tu contraseña?" callback={ () => navigation.navigate("ChangePassword")} />
        </View>
        
        <View style={styles.but}>
        <SharedButton 
          title="Inciar Sesion" 
          size={0.5} 
          colors={"#7c3593"} 
          callback={ () => navigation.navigate("Load")}
        />
        </View>
        <Enlace 
          title="Registrate" 
          callback={ () => navigation.navigate("NewUser")}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#ebcf2',
    backgroundColor: '#b580ba',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mini:{
    flex: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 15,
    width: width * 0.8,
    marginTop: height * 0.10,
    marginBottom: height * 0.10,
  },
  but:{
    paddingTop: 20,
    marginBottom: 5,
    alignItems: 'center',
  },
  inputs:{
    paddingTop: 15,
    justifyContent: 'center',
  },
  logo: {
    borderRadius: 20,
    width: width * 0.35,
    height: height * 0.20,
},
});
export default Login;
