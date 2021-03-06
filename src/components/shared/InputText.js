import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Input, Icon } from "react-native-elements";
import { Context as RecipeContext } from "../../providers/RecipeContext";
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

  return (
    <View style={styles.container}>
      <Input
        key={id}
        leftIcon={
          <Icon
            name={icon}
            type="font-awesome"
            size={28}
            color={recipeState.darkMode === "light" ? "#090979" : "#B4975A"}
          />
        }
        placeholder={placeholder}
        color={recipeState.darkMode === "light" ? "#245071" : "#fff"}
        style={(styles.input, { borderRadius: 3 })}
        inputContainerStyle={
          recipeState.darkMode === "light"
            ? {
                borderBottomWidth: 1,
                borderColor: "#090979",
              }
            : {
                borderBottomWidth: 1,
                borderColor: "#B4975A",
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
