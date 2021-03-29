import React, { useState, useContext } from "react";
import { StyleSheet, View, Button } from "react-native";
import { validate } from "email-validator";
import { firebase } from "../../Firebase";
import InputText from "../shared/InputText";
import SharedButton from "../shared/SharedButton";
import Enlace from "../shared/Enlace";
import Alert from "../shared/Alert";
import { Context as AuthContext } from "../../providers/AuthContext";

const SignIn = ({ navigation }) => {
  const { state, signin, signInWithFacebook } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState("");
  const [alert, setAlert] = useState(false);
  const [confirmar, setConfit] = useState(false);

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

  return (
    <View>
      {alert ? <Alert type="error" title="Datos Incorrectos" /> : null}
      {confirmar ? <Alert type="success" title="Bienvenido" /> : null}
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
          title="Contraseña:"
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
          title="Iniciar Sesión"
          colors={"#7c3593"}
          size={0.5}
          callback={handleSignin}
        />
        <Enlace
          title="Registrate"
          callback={() => navigation.navigate("NewUser")}
        />
      </View>
      <Button
        title={"Facebook"}
        onPress={() => {
          signInWithFacebook();
        }}
      />
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
