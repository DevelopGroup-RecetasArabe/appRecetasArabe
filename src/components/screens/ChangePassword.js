import React from "react";
import { StyleSheet, View } from "react-native";
import ChangePasswordForm from "../Forms/ChamgePasswordForm";

const ChangePassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <ChangePasswordForm navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebecf2",
    justifyContent: "center",
  },
  inputs: {
    paddingTop: 20,
    justifyContent: "center",
    padding: 30,
  },
  but: {
    paddingTop: 20,
    alignItems: "center",
  },
});

export default ChangePassword;
