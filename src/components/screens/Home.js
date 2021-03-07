import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Card from "../shared/Card";

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card
          title="Kibbe"
          image={require("../../assets/Kibbe.jpeg")}
          description="Pastelito de carne picada con cebolla"
          navigation={navigation}
        />
        <Card
          title="Kibbe"
          image={require("../../assets/Kibbe.jpeg")}
          description="Pastelito de carne picada con cebolla"
          navigation={navigation}
        />
        <Card
          title="Kibbe"
          image={require("../../assets/Kibbe.jpeg")}
          description="Pastelito de carne picada con cebolla"
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default Home;
