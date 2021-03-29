import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions, Image} from "react-native";
import InputText from "../shared/InputText";
import SharedButton from "../shared/SharedButton";

const { width, height } = Dimensions.get("screen");
const Recipes = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.img}>
      <Image source={{ uri: require('../../assets/Kibbe.jpeg') }} style={styles.image}></Image>
      </View>
      <View style={styles. contents}>
        <View style={styles.section}>
        <Text style={styles.title}>Nombre y Descripción</Text>
          <InputText
            title="Nombre de la Receta:"
            border={1}
            borderBottom={0}
            color={"#245071"}
            //value={NameRecipes}
            //set={setNameRecipes}
            input={"namerecipes"}
            //onChangeText={setNameRecipes}
            //callback={handleVerify}
            //error={NameRecipesError}
            //menssageError={"Por favor ingrese el nombre de la receta"}
          />
          <InputText
            title="Descripción de la Receta:"
            border={1}
            borderBottom={0}
            color={"#245071"}
            //value={DescriptionRecipes}
            //set={setDescriptionRecipes}
            input={"descriptionrecipes"}
            //onChangeText={setDescriptionRecipes}
            //callback={handleVerify}
            //error={DescriptionRecipesError}
            //menssageError={"Por favor ingrese la descripción de la receta"}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Ingredientes</Text>
          <Text style={styles.text}>Ingrediente 1</Text>
          <Text style={styles.text}>Ingrediente 2</Text>
          <Text style={styles.text}>Ingrediente 3</Text>
          <Text style={styles.text}>Ingrediente 4</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Preparacion</Text>
          <Text style={styles.text}>Paso 1</Text>
          <Text style={styles.text}>Paso 2</Text>
          <Text style={styles.text}>Paso 3</Text>
        </View>
        <View style={[styles.section, styles.but]}>
        <SharedButton
          title="Guardar"
          colors={"#7c3593"}
          size={0.5}
          //callback={handleSignup}
        />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: '#b580ba'
    backgroundColor: '#b4b5c8'
  },
  title: {
    fontWeight: 'bold',
    color: '#245071',
    fontSize: 16,
    paddingBottom: 5
  },
  text: {
    fontSize: 15
  },
  section: {
    justifyContent: 'flex-start',
    borderRadius: 15,
    backgroundColor: '#ebecf2',
    marginRight: width * 0.03,
    marginLeft: width * 0.03,
    marginBottom: height * 0.04,
    padding: 10
  },
  contents: {
    flex: 10,
    //backgroundColor: '#b580ba',
    backgroundColor: '#b4b5c8',
    marginTop: height * 0.04,
    //Sombra
    shadowColor: "#245071",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  but: {
    alignItems: "center"
  },
  img: {
    flex: 5,
    height: height / 3,
    borderBottomRightRadius: 45,
    borderBottomLeftRadius: 45,
    justifyContent: 'space-between',
    //Sombra
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.3,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    borderBottomRightRadius: 45,
    borderBottomLeftRadius: 45
  }
});

export default Recipes;
