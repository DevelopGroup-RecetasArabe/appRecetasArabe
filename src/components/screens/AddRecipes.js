import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Text,
  View,
  Platform,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import ImageButton from "../shared/ImageButton";
import { Input, Icon } from "react-native-elements";
import { Context as AuthContext } from "../../providers/AuthContext";
import { Context as RecipeContext } from "../../providers/RecipeContext";

const { width, height } = Dimensions.get("window");

const AddRecipes = ({ navigation }) => {
  /*Funcion de crear la receta  */
  const { createRecipe } = useContext(RecipeContext);
  const { state } = useContext(AuthContext);

  /*Variable para almacenar la imagen */
  const [image, setImage] = useState(null);

  /*Variables controlar el agregar y destruit los text inputs*/
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [deleteIngredient, setDeleteIngredient] = useState(false);
  const [deletePreparation, setDeletePreparation] = useState(false);

  /*Variables para el formulario*/
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState(false);

  /*Objeto de ingrediente y de preparaciones*/
  const [arrayIngredients] = useState([]);
  const [ingredientError] = useState([]);
  const [arrayPreparations] = useState([]);

  /*Permiso para la acceder a la carpeta*/
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    /*Guarda la imagen */
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  /*Eliminar un paso del ingrediente */
  useEffect(() => {}, [deleteIngredient]);
  useEffect(() => {}, [deletePreparation]);

  /*Agregar inputs de los ingredientes por medio de un boton */
  const handleAddInputIngredient = () => {
    arrayIngredients[count] = "";
    ingredientError[count] = false;
    const increment = count + 1;
    setCount(increment);
  };
  /*Eliminar el inputs de los ingredientes por medio de un boton*/
  const handleDeleteInputIngredient = () => {
    if (count < 0) {
      setCount(0);
    } else {
      const decrement = count - 1;
      setCount(decrement);
      setDeleteIngredient(!deleteIngredient);
      arrayIngredients.pop();
    }
  };

  /*Agregar inputs por medio de la preparacion de un boton */
  const handleAddInputPreparation = () => {
    arrayPreparations[count2] = "";
    const increment = count2 + 1;
    setCount2(increment);
  };

  /*Eliminar el inputs por medio de un boton*/
  const handleDeleteInputPreparation = () => {
    if (count2 < 0) {
      setCount2(0);
    } else {
      const decrement = count2 - 1;
      setCount2(decrement);
      setDeletePreparation(!deletePreparation);
      arrayPreparations.pop();
    }
  };

  const handleVerify = (input) => {
    if (input === "title") {
      if (!title) setTitleError(true);
      else setTitleError(false);
    } else if (input === "description") {
      if (!description) setDescriptionError(true);
      else setDescriptionError(false);
    }
  };
  return (
    <LinearGradient
      //colors={["#245071", "#7c3593", "#245071"]}
      //colors={["#a4508b", "#7c3593", "#a4508b"]}
      //colors={["#5f72be","#9921e8"]}
      colors={["#245071", "#9921e8"]}
      start={{ x: 0, y: 0.2 }}
      end={{ x: 1, y: 0.2 }}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        {/*Image Picker*/}
        <View style={styles.recipeImage}>
          <ImageButton image={image} callback={pickImage} />
        </View>

        {/*Formulario de recetas*/}

        <View style={styles.formRecipes}>
          <View style={styles.styleForm}>
            <Text style={styles.titles}>Nombre de la receta</Text>
            <Input
              placeholder={"Ejemplo: Kibbe"}
              value={title}
              onChangeText={setTitle}
              onBlur={() => {
                handleVerify("title");
              }}
              errorMessage={
                titleError ? "Por favor ingrese el nombre de la receta" : null
              }
            />
            <Text style={styles.titles}>Descripcion de la receta</Text>
            <Input
              placeholder={"Ejemplo: Rico platillos arabes en tu cocina"}
              value={description}
              onChangeText={setDescription}
              onBlur={() => {
                handleVerify("description");
              }}
              errorMessage={
                descriptionError
                  ? "Por favor ingrese la descripcion de la receta"
                  : null
              }
            />
          </View>
          {/*Generar un textInput por medio de un boton para ingresar
        ingredientes*/}
          <View style={styles.styleForm}>
            <Text style={styles.titles}>Ingredientes</Text>
            <>
              {arrayIngredients.map((arr, i) => (
                <Input
                  key={`ingredients${i}`}
                  placeholder={"Ej: 1 kilo de harina"}
                  color={"black"}
                  onChangeText={(val) => {
                    arrayIngredients[i] = val;
                    console.log(arrayIngredients);
                  }}
                />
              ))}
            </>
            <View style={styles.styleIngredients}>
              <TouchableOpacity onPress={handleAddInputIngredient}>
                <Text style={styles.textIngredients}>
                  <Icon name="plus" type="font-awesome" size={15} /> Agregar
                  Ingrediente
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDeleteInputIngredient}>
                <Text style={styles.textIngredients}>
                  <Icon name="trash" type="font-awesome" size={15} /> Borrar
                  Ingrediente
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/*Generar un textInput por medio de un boton para ingresar paso a paso las preparaciones*/}
          <View style={styles.styleForm}>
            <Text style={styles.titles}>Preparaciones</Text>
            <>
              {arrayPreparations.map((arr, j) => (
                <Input
                  key={`preparacion${j}`}
                  placeholder={`Ej: Paso # ${j + 1}`}
                  color={"black"}
                  onChangeText={(val) => {
                    arrayPreparations[j] = val;
                    console.log(arrayPreparations);
                  }}
                />
              ))}
            </>
            <View style={styles.styleIngredients}>
              <TouchableOpacity onPress={handleAddInputPreparation}>
                <Text style={styles.textIngredients}>
                  <Icon name="plus" type="font-awesome" size={15} /> Agregar
                  Paso
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDeleteInputPreparation}>
                <Text style={styles.textIngredients}>
                  <Icon name="trash" type="font-awesome" size={15} /> Borrar
                  Paso
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.button}>
            <Button
              title="Guardar"
              color="#7c3593"
              onPress={() => {
                if (
                  image &&
                  title &&
                  description &&
                  arrayIngredients &&
                  arrayPreparations
                ) {
                  createRecipe(
                    image,
                    title,
                    description,
                    arrayIngredients,
                    arrayPreparations,
                    state.user.id,
                    state.user.fullname
                  );
                  navigation.navigate("Home");
                }
              }}
            />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 8,
    margin: 0,
  },
  recipeImage: {
    borderRadius: 40,
    justifyContent: "space-between",
    //Sombra
    shadowColor: "black",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.32,
    shadowRadius: 3.9,
  },
  formRecipes: {
    paddingTop: 10,
  },
  styleForm: {
    backgroundColor: "#FFFFFF98",
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 12,
  },
  titles: {
    fontWeight: "bold",
    fontSize: 15,
  },
  styleIngredients: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 11,
    marginBottom: 11,
  },
  textIngredients: {
    fontSize: 16,
  },
  button: {
    marginTop: 15,
    marginBottom: 25,
    backgroundColor: "#FFFFFF98",
    borderRadius: 20,
    fontWeight: "bold",
    marginLeft: width * 0.12,
    marginRight: width * 0.12,
  },
});

export default AddRecipes;
