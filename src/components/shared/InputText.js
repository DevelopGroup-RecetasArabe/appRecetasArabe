import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Input, Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

const width = Dimensions.get("window").width;

const InputText = ({
  icon,
  value,
  set,
  input,
  placeholder,
  id,
  error,
  menssageError,
  secureText,
  callback,
}) => {
  return (
    <View style={styles.container}>
      <Input
        key={id}
        leftIcon={
          <Icon name={icon} type="font-awesome" size={28} color="#090979" />
        }
        placeholder={placeholder}
        color={"#245071"}
        style={(styles.input, { borderRadius: 3 })}
        inputContainerStyle={{
          borderBottomWidth: 1,
          borderColor: "#090979",
        }}
        inputStyle={{ padding: 15, borderColor: "#7c3593" }}
        value={value}
        onChangeText={set}
        secureTextEntry={secureText}
        onBlur={() => {
          callback(input, id);
        }}
        errorMessage={error ? menssageError : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {},
  inputText: {
    marginLeft: width * 0.03,
    fontSize: 16,
    paddingBottom: 5,
    color: "#7f7f7f",
  },
});

export default InputText;
