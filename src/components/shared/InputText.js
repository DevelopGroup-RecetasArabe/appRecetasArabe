import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Input } from "react-native-elements";

const width = Dimensions.get("window").width;

/*El motivo de este componente es para que todos los inputs tenga el mismo estilo y
se pueda modificar el texto, el icono, los border, tambien si se quiere tener el border bottom, se quiera
modificar el color y otras funciones que nos permitan un mejor control de estilo.
*/
const InputText = ({
  title,
  icon,
  border,
  borderBottom,
  color,
  value,
  set,
  input,
  error,
  menssageError,
  secureText,
  callback,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.inputText}>{title}</Text>

      <Input
        
        color={"#245071"}
        style={
          (styles.input,
          { borderWidth: border, borderColor: color, borderRadius: 8 })
        }
        inputContainerStyle={{
          borderBottomWidth: borderBottom,
          borderColor: "#245071",
        }}
        leftIcon={{ type: "font-awesome", name: icon }}
        value={value}
        onChangeText={set}
        secureTextEntry={secureText}
        onBlur={() => {
          callback(input);
        }}
        errorMessage={error ? menssageError : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 22,
  },
  input: {
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  inputText: {
    marginLeft: width * 0.025,
    marginBottom: 10,
    fontSize: 16,
    color: "#245071",
  },
});

export default InputText;
