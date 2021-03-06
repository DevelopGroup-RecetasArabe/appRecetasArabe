import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { validate } from "email-validator";
import { firebase } from "../../Firebase";
import InputText from "../shared/InputText";
import SharedButton from "../shared/SharedButton";
import Enlace from "../shared/Enlace";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState("");

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
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => console.log(response))
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <View>
      <View style={styles.inputs}>
        <InputText
          title="Correo Electronico:"
          borderBottom={1}
          color={"#245071"}
          icon="envelope"
          value={email}
          set={setEmail}
          input={"email"}
          onChangeText={setEmail}
          callback={handleVerify}
          error={emailError}
          menssageError={"Por favor ingrese su correo"}
        />
        <InputText
          title="Contraseña: "
          borderBottom={1}
          color={"#245071"}
          icon="lock"
          value={password}
          set={setPassword}
          input={"password"}
          onChangeText={setPassword}
          callback={handleVerify}
          error={passwordError}
          menssageError={"Por favor ingrese su contraseña"}
          secureText={true}
        />
        <Enlace
          title="¿Olvidaste tu contraseña?"
          callback={() => navigation.navigate("ChangePassword")}
        />
      </View>
      <View style={styles.but}>
        <SharedButton
          title="Sign In"
          colors={"#7c3593"}
          size={0.5}
          callback={handleSignin}
        />
        <Enlace
          title="Registrate"
          callback={() => navigation.navigate("NewUser")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  but: {
    paddingTop: 20,
    marginBottom: 5,
    alignItems: "center",
  },
  inputs: {
    paddingTop: 15,
    justifyContent: "center",
  },
});

export default SignIn;
