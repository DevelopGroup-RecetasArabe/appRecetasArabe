import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, Dimensions } from "react-native";
import { validate } from "email-validator";
import InputText from "../shared/InputText";
import Enlace from "../shared/Enlace";
import SharedButton from "../shared/SharedButton";
import { Context as AuthContext } from "../../providers/AuthContext";

const { width, height } = Dimensions.get("screen");

const SignIn = ({ navigation }) => {
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

  const handleSignin = () => {
    signin(email, password);
  };

  const handleSignGoogle = () => {
    signInWithGoogle();
  };
  return (
    <View style={styles.container}>
      {alert ? <Text>Error!</Text> : null}
      <View style={styles.header}>
        <Text style={styles.h1}>Inicio de Sesión</Text>
        <Text style={styles.h2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </Text>
      </View>
      <View style={styles.formLogin}>
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
            title="¿Olvidas la contraseña?"
            flexDirection="row-reverse"
            color={"#ccc"}
            callback={() => navigation.navigate("ChangePassword")}
          />
        </View>
        <SharedButton title="Iniciar Sesión" callback={handleSignin} />
        <View style={{ marginTop: 15 }}>
          <SharedButton title="Google" callback={handleSignGoogle} />
        </View>
        <View style={styles.postionEnlace}>
          <Enlace
            title="Registrate"
            paddingTop={30}
            size={20}
            color={"#090979"}
            callback={() => navigation.navigate("NewUser")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  h1: {
    fontSize: 25,
    color: "#090979",
    paddingBottom: 10,
  },
  h2: {
    fontSize: 15,
    color: "#ccc",
  },
  formLogin: {
    width: width * 0.75,
    paddingTop: 80,
  },
});

export default SignIn;

// background: rgb(9,9,121);
// background: linear-gradient(90deg, rgba(9,9,121,1) 5%, rgba(187,0,247,1) 100%, rgba(187,0,247,1) 135%);
