import React from "react";
import { StyleSheet, View, Text } from "react-native";
import InputText from "../shared/InputText";

const ChangePasswordForm = () => {
  return (
    <View>
      <InputText title="Usuario" border={1} color="#245071" />
      <InputText title="Contraseña" border={1} color="#245071" />
      <InputText title="Confirmar Contraseña" border={1} color="#245071" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChangePasswordForm;
