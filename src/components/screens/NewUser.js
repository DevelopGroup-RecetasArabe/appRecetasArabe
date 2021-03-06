import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import SignUp from "../Forms/SignUp";

const NewUser = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <SignUp navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebecf2",
    justifyContent: "center",
  },
  scrollView: {
    padding: 30,
  },
});

export default NewUser;
