import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native";
import { Context as AuthContext } from "../../providers/AuthContext";
import { Context as RecipeContext } from "../../providers/RecipeContext";
import { validate } from "email-validator";
import InputText from "../shared/InputText";
import SharedButton from "../shared/SharedButton";
import Enlace from "../shared/Enlace";

const { width, height } = Dimensions.get("screen");

const SignUp = ({ navigation }) => {
  const { state: recipeState } = useContext(RecipeContext);

  useEffect(() => {}, [recipeState.darkMode]);

  const { signup } = useContext(AuthContext);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullnameError, setFullnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [error, setError] = useState("");

  // Verifica que los datos ingresados sean correctos
  const handleVerify = (input) => {
    if (input === "fullname") {
      // Verificar el nombre del usuario
      if (!fullname) setFullnameError(true);
      else setFullnameError(false);
    } else if (input === "email") {
      // Verificar el correo electrónico
      if (!email) setEmailError(true);
      else if (!validate(email)) setEmailError(true);
      else setEmailError(false);
    } else if (input === "password") {
      // Verificar la contraseña
      if (!password) setPasswordError(true);
      else if (password.length < 6) setPasswordError(true);
      else setPasswordError(false);
    } else if (input === "confirmPassword") {
      // Verificar la confirmación de la contraseña
      if (!confirmPassword) setConfirmPasswordError(true);
      else if (confirmPassword !== password) setConfirmPasswordError(true);
      else setConfirmPasswordError(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={
            recipeState.darkMode === "light"
              ? [styles.h1, { color: "black" }]
              : [styles.h1, { color: "#fff" }]
          }
        >
          Registrate
        </Text>
        <Text
          style={
            recipeState.darkMode === "light"
              ? [styles.h2, { color: "black" }]
              : [styles.h2, { color: "#fff" }]
          }
        >
          ¿Conoces algunas recetas arabes?, unete a nosotros, muestra tus recetas y conoce nuevas
        </Text>
      </View>
      <View style={styles.form}>
        <InputText
          placeholder="Nombre Completo"
          icon="user"
          value={fullname}
          set={setFullname}
          input={"fullname"}
          callback={handleVerify}
          error={fullnameError}
          menssageError={"Por favor ingrese su nombre"}
        />
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
          icon="lock"
          value={password}
          set={setPassword}
          input={"password"}
          callback={handleVerify}
          error={passwordError}
          menssageError={"Por favor ingrese su contraseña"}
          secureText={true}
        />
        <InputText
          placeholder="Confirmar Contraseña"
          icon="lock"
          value={confirmPassword}
          set={setConfirmPassword}
          input={"confirmPassword"}
          callback={handleVerify}
          error={confirmPasswordError}
          menssageError={"Por favor ingrese su contraseña"}
          secureText={true}
        />
        <SharedButton
          title="Registrarse"
          callback={() => {
            signup(fullname, email, password, navigation);
          }}
        />

        <Enlace
          title="Volver al inicio de sesión"
          paddingTop={30}
          size={20}
          color={recipeState.darkMode === "light" ? "#ccc" : "#fff"}
          callback={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  header: {
    marginTop: 10
  },
  h1: {
    fontSize: 25,
    //color: "#090979",
    paddingBottom: 10,
  },
  h2: {
    fontSize: 15,
    //color: "#ccc",
    marginBottom: 60,
  },
  form: {
    width: width * 0.75,
  },
});

export default SignUp;
