import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Favorites = () => {
  return (
    <ScrollView>
      <View>
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

const styles = StyleSheet.create({});

export default Favorites;
