import React from "react";
import { StyleSheet, Text, View, Dimensions, Image} from "react-native";
const { width, height } = Dimensions.get("screen");
const Recipes = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.img]}>
      <Image source={{ uri: require('../../assets/Kibbe.jpeg') }} style={styles.image}></Image>
      </View>
      <View style={[styles.box, styles. contents]}>
        <View style={styles.section}>
          <Text style={styles.title}>Kibbe</Text>
        </View>
        <View style={styles.section}>
          <Text>Lista de Ingredientes</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ebecf2'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 45
  },
  section: {
    justifyContent: 'flex-start',
    marginLeft: width * 0.1
  },
  box: {
    height: height / 2
  },
  img: {
    flex: 5,
    borderBottomRightRadius: 45,
    justifyContent: 'space-between',
    //Sombra
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    borderBottomRightRadius: 45
  },
  contents: {
    flex: 10,
    backgroundColor: '#ebecf2',
    marginTop: 5
  }
});

export default Recipes;
