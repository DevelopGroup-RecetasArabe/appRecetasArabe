import React, { useContext, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import InputText from "../shared/InputText";
import SharedButton from "../shared/SharedButton";
import { validate } from "email-validator";
import { firebase } from "../../Firebase";
import { Context as AuthContext } from "../../providers/AuthContext";

const ChangePasswordForm = ({ navigation }) => {
  const { changePassword } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [error, setError] = useState("");

  //Verifica el correo electronico
  const handleVerify = (input) => {
    if (input === "email") {
      if (!email) setEmailError(true);
      else if (!validate(email)) setEmailError(true);
      else setEmailError(false);
    }
  };

  //Manda la opcion de reset password por medio del correo
  const handleChangePassword = () => {
    if (email) {
      changePassword(email, navigation);
    }
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
      </View>

      <View style={styles.but}>
        <SharedButton
          title="Restablecer Contraseña"
          colors={"#7c3593"}
          size={0.5}
          callback={handleChangePassword}
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

export default ChangePasswordForm;
