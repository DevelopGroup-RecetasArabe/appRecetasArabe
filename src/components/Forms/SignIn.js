import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import { validate } from "email-validator";
import InputText from "../shared/InputText";
import Enlace from "../shared/Enlace";
import SharedButton from "../shared/SharedButton";
import { Context as AuthContext } from "../../providers/AuthContext";
import Logo from "../../assets/logo.png";
import LogoDark from "../../assets/LogoDark2.png";
import { Context as RecipeContext } from "../../providers/RecipeContext";

const { width, height } = Dimensions.get("screen");

const SignIn = ({ navigation }) => {
  const { state: recipeState } = useContext(RecipeContext);

  const { state, signin, signInWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState("");
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    setError(state.errorMessage);
  }, [state.errorMessage]);

  useEffect(() => {
    console.log(state.user);
  }, [state.user]);

  // Verifica que se ingresan los datos del email y el password
  const handleVerify = (input) => {
    if (input === "email") {
      if (!email) setEmailError(true);
      else if (!validate(email)) setEmailError(true);
      else setEmailError(false);
    } else if (input === "password") {
      if (!password) setPasswordError(true);
      else setPasswordError(false);
    }
  };

  /*Función para ingresar por medio de firebase */
  const handleSignin = () => {
    signin(email, password);
  };

  /*Función para ingresar por medio de firebase con Google */
  const handleSignGoogle = () => {
    signInWithGoogle();
  };
  return (
    <View style={styles.container}>
      <View
        style={
          recipeState.darkMode === "light"
            ? [styles.header, { shadowColor: "black" }]
            : [styles.header, { shadowColor: "#B4975A" }]
        }
      >
        <Text
          style={
            recipeState.darkMode === "light"
              ? [styles.h1, { color: "black" }]
              : [styles.h1, { color: "#fff" }]
          }
        ></Text>
        <View style={styles.logo}>
          <Image
            style={styles.logo}
            source={recipeState.darkMode === "light" ? Logo : LogoDark}
          />
        </View>
      </View>
      <View style={styles.formLogin}>
        {alert ? <Text>Error!</Text> : null}
        <InputText
          placeholder="Correo Electronico"
          icon="envelope"
          value={email}
          set={setEmail}
          input={"email"}
          callback={handleVerify}
          error={emailError}
          menssageError={"Por favor ingrese su correo"}
        />
        <InputText
          placeholder="Contraseña"
          borderBottom={1}
          color={"#245071"}
          icon="lock"
          value={password}
          set={setPassword}
          input={"password"}
          callback={handleVerify}
          error={passwordError}
          menssageError={"Por favor ingrese su contraseña"}
          secureText={true}
        />

        <View>
          <Enlace
            title="¿Olvidaste la contraseña?"
            flexDirection="row-reverse"
            color={recipeState.darkMode === "light" ? "#245071" : "#fff"}
            callback={() => navigation.navigate("ChangePassword")}
          />
        </View>
        <SharedButton title="Iniciar Sesión" callback={handleSignin} />
        <View style={{ marginTop: 12 }}>
          <SharedButton title="Google" callback={handleSignGoogle} />
        </View>
        <View style={styles.postionEnlace}>
          <Enlace
            title="Registrate"
            paddingTop={12}
            size={20}
            color={recipeState.darkMode === "light" ? "#245071" : "#fff"}
            callback={() => navigation.navigate("NewUser")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  h1: {
    color: "#7c3593",
    textAlign: "center",
  },
  formLogin: {
    padding: 30,
    paddingTop: 25,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    backgroundColor: "#7c3593",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderColor: "#B4975A",
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    paddingBottom: 15,

    //Sombra
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.32,
    shadowRadius: 3.9,
  },
  logo: {
    borderRadius: 30,
    width: width * 0.37,
    height: height * 0.25,
  },
  postionEnlace: {},
});

export default SignIn;

// background: rgb(9,9,121);
// background: linear-gradient(90deg, rgba(9,9,121,1) 5%, rgba(187,0,247,1) 100%, rgba(187,0,247,1) 135%);
