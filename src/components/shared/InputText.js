import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Input, Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { Context as RecipeContext } from "../../providers/RecipeContext";
import { Context as AuthContext } from "../../providers/AuthContext";
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
  const { state: recipeState } = useContext(RecipeContext);
  const { state: userState } = useContext(AuthContext);

  useEffect(() => {}, [userState.user.darkMode]);
  return (
    <View style={styles.container}>
      <Input
        key={id}
        leftIcon={
          <Icon
            name={icon}
            type="font-awesome"
            size={28}
            color={userState.user.darkMode === "light" ? "#090979" : "#fff"}
          />
        }
        placeholder={placeholder}
        color={userState.user.darkMode === "light" ? "#245071" : "#fff"}
        style={(styles.input, { borderRadius: 3 })}
        inputContainerStyle={
          userState.user.darkMode === "light"
            ? {
                borderBottomWidth: 1,
                borderColor: "#090979",
              }
            : {
                borderBottomWidth: 1,
                borderColor: "#fff",
              }
        }
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
