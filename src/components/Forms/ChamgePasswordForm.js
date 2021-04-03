import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import InputText from "../shared/InputText";
import SharedButton from "../shared/SharedButton";
import { validate } from "email-validator";
import { firebase } from "../../Firebase";
import Enlace from "../shared/Enlace";

const { width, height } = Dimensions.get("window");

const ChangePasswordForm = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = (input) => {
    if (input === "email") {
      if (!email) setEmailError(true);
      else if (!validate(email)) setEmailError(true);
      else setEmailError(false);
    }
  };
  const handleChangePassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => navigation.navigate("Login"))
      .catch((error) => console.log(error.message));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}>Recuperar Contraseña</Text>
        <Text style={styles.h2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
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
            color={"#ccc"}
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
    color: "#090979",
    paddingBottom: 10,
  },
  h2: {
    fontSize: 15,
    color: "#ccc",
    marginBottom: 60,
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
