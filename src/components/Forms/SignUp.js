import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { firebase } from "../../Firebase";
import { validate } from "email-validator";
import InputText from "../shared/InputText";
import SharedButton from "../shared/SharedButton";
import { Context as AuthContext } from "../../providers/AuthContext";
import Alert from "../shared/Alert";

const SignUp = ({ navigation }) => {
  const { signup } = useContext(AuthContext);
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullnameError, setFullnameError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [error, setError] = useState("");
  const [alert, setAlert] = useState(false);
  const [confirmar, setConfit] = useState(false);

  /*Verifica todos los campos dependiendo de la variable de input */
  const handleVerify = (input) => {
    if (input === "fullname") {
      if (!fullname) setFullnameError(true);
      else setFullnameError(false);
    } else if (input === "username") {
      if (!username) setUsernameError(true);
      else setUsernameError(false);
    } else if (input === "email") {
      if (!email) setEmailError(true);
      else if (!validate(email)) setEmailError(true);
      else setEmailError(false);
    } else if (input === "password") {
      if (!password) setPasswordError(true);
      else if (password.length < 6) setPasswordError(true);
      else setPasswordError(false);
    } else if (input === "confirmPassword") {
      if (!confirmPassword) setConfirmPasswordError(true);
      else if (confirmPassword !== password) setConfirmPasswordError(true);
      else setConfirmPasswordError(false);
    }
  };

  const handleSignup = () => {
    signup(fullname, email, password, navigation);
  };

  return (
    <View>
      {alert ? <Alert type="error" title="Datos Incorrectos" /> : null}
      {confirmar ? <Alert type="success" title="Usuario Creado" /> : null}
      <View style={styles.inputs}>
        <InputText
          title="Nombre Completo:"
          border={1}
          borderBottom={0}
          color={"#245071"}
          value={fullname}
          set={setFullname}
          input={"fullname"}
          onChangeText={setFullname}
          callback={handleVerify}
          error={fullnameError}
          menssageError={"Por favor ingrese su nombre"}
        />
        <InputText
          title="Usuario:"
          border={1}
          borderBottom={0}
          color={"#245071"}
          value={username}
          set={setUsername}
          input={"username"}
          onChangeText={setUsername}
          callback={handleVerify}
          error={usernameError}
          menssageError={"Por favor ingrese su nombre"}
        />
        <InputText
          title="Correo Electronico:"
          border={1}
          borderBottom={0}
          color={"#245071"}
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
          border={1}
          borderBottom={0}
          color={"#245071"}
          value={password}
          set={setPassword}
          input={"password"}
          onChangeText={setPassword}
          callback={handleVerify}
          error={passwordError}
          menssageError={"Por favor ingrese su contraseña"}
          secureText={true}
        />
        <InputText
          title="Confirmar Contraseña: "
          border={1}
          borderBottom={0}
          color={"#245071"}
          value={confirmPassword}
          set={setConfirmPassword}
          input={"confirmPassword"}
          onChangeText={setConfirmPassword}
          callback={handleVerify}
          error={confirmPasswordError}
          menssageError={"Por favor ingrese su contraseña"}
          secureText={true}
        />
      </View>
      <View style={styles.but}>
        <SharedButton
          title="Registrarse"
          colors={"#7c3593"}
          size={0.5}
          callback={handleSignup}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputs: {
    paddingTop: 15,
    justifyContent: "center",
  },
  but: {
    paddingTop: 20,
    alignItems: "center",
  },
});

export default SignUp;
