import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import InputText from "../shared/InputText";
import SharedButton from "../shared/SharedButton";
import { validate } from "email-validator";
import Enlace from "../shared/Enlace";
import { Context as AuthContext } from "../../providers/AuthContext";
import { Context as RecipeContext } from "../../providers/RecipeContext";

const { width } = Dimensions.get("window");

const ChangePasswordForm = ({ navigation }) => {
  const { changePassword } = useContext(AuthContext);
  const { state: recipeState } = useContext(RecipeContext);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  //const [error, setError] = useState("");

  /*Función para verificar si hay campos vacios*/
  const handleVerify = (input) => {
    if (input === "email") {
      if (!email) setEmailError(true);
      else if (!validate(email)) setEmailError(true);
      else setEmailError(false);
    }
  };

  /*Función para cambiar la contraseña por medio firebase*/
  const handleChangePassword = () => {
    if (email) changePassword(email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={
            recipeState.darkMode === "light"
              ? [styles.h1, { color: "#245071" }]
              : [styles.h1, { color: "#fff" }]
          }
        >
          Recuperar Contraseña
        </Text>
        <Text
          style={
            recipeState.darkMode === "light"
              ? [styles.h2, { color: "#245071" }]
              : [styles.h2, { color: "#fff" }]
          }
        >
          ¡Hey! te hace falta el ingrediente mas importante, ingresa tu correo
          para recuperarlo
        </Text>
      </View>
      <View style={styles.form}>
        <InputText
          placeholder="Correo Electronico"
          icon="envelope"
          value={email}
          set={setEmail}
          input={"email"}
          onChangeText={setEmail}
          callback={handleVerify}
          error={emailError}
          menssageError={"Por favor ingrese su correo"}
        />
        <SharedButton
          title="Restablecer Contraseña"
          callback={handleChangePassword}
        />
        <View style={styles.enlace}>
          <Enlace
            title="Volver al inicio de sesión"
            paddingTop={50}
            size={20}
            color={recipeState.darkMode === "light" ? "#245071" : "#fff"}
            callback={() => navigation.navigate("Login")}
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
    paddingBottom: 10,
  },
  h2: {
    fontSize: 15,
    marginBottom: 45,
  },
  form: {
    width: width * 0.75,
    paddingTop: 80,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
});

export default ChangePasswordForm;
