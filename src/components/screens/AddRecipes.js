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
  const { state: recipeState, createRecipe } = useContext(RecipeContext);
  const { state } = useContext(AuthContext);

  useEffect(() => {}, [recipeState.darkMode]);

  /*Variable para almacenar la imagen */
  const [image, setImage] = useState(null);

  /*Variables para el formulario*/
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState(false);

  /*Objeto de ingrediente y de preparaciones*/
  const [arrayIngredients, setArrayIngredients] = useState([]);
  const [arrayPreparations, setArrayPreparations] = useState([]);

  /*Controlar si hay un error en cada input*/
  const [ingredientError, setIngredientError] = useState([]);
  const [preparationError, setPreparationError] = useState([]);

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
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
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

  /*Agregar inputs de los ingredientes por medio de un boton */
  const handleAddInputIngredient = () => {
    setArrayIngredients([...arrayIngredients, ""]);
  };

  /*Eliminar el inputs de los ingredientes por medio de un boton*/
  const handleDeleteInputIngredient = () => {
    arrayIngredients.pop();
    setArrayIngredients([...arrayIngredients]);
  };

  /*Agregar inputs por medio de la preparacion de un boton */
  const handleAddInputPreparation = () => {
    setArrayPreparations([...arrayPreparations, ""]);
  };

  /*Eliminar el inputs por medio de un boton*/
  const handleDeleteInputPreparation = () => {
    arrayPreparations.pop();
    setArrayPreparations([...arrayPreparations]);
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

  const handleDeleteByPositon = (position) => {
    arrayIngredients.splice(position, 1);
    setArrayIngredients([...arrayIngredients]);
  };

  const handleDeleteByPositonPreparation = (position) => {
    arrayPreparations.splice(position, 1);
    setArrayPreparations([...arrayPreparations]);
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
          <View
            style={
              recipeState.darkMode === "light"
                ? [
                    styles.styleForm,
                    { backgroundColor: "#FFFFFF98", borderRadius: 10 },
                  ]
                : [
                    styles.styleForm,
                    { backgroundColor: "green", borderRadius: 10 },
                  ]
            }
          >
            <Text
              style={
                recipeState.darkMode === "light"
                  ? [styles.titles, { color: "black" }]
                  : [styles.titles, { color: "#fff" }]
              }
            >
              Nombre de la receta
            </Text>
            <Input
              placeholder={"Ejemplo: Kibbe"}
              value={title}
              onChangeText={setTitle}
              color={recipeState.darkMode === "light" ? "#245071" : "#fff"}
              onBlur={() => {
                handleVerify("title");
              }}
              errorMessage={
                titleError ? "Por favor ingrese el nombre de la receta" : null
              }
            />
            <Text
              style={
                recipeState.darkMode === "light"
                  ? [styles.titles, { color: "black" }]
                  : [styles.titles, { color: "#fff" }]
              }
            >
              Descripcion de la receta
            </Text>
            <Input
              placeholder={"Ejemplo: Rico platillos"}
              value={description}
              onChangeText={setDescription}
              color={recipeState.darkMode === "light" ? "#245071" : "#fff"}
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
          <View
            style={
              recipeState.darkMode === "light"
                ? [
                    styles.styleForm,
                    { backgroundColor: "#FFFFFF98", borderRadius: 10 },
                  ]
                : [
                    styles.styleForm,
                    { backgroundColor: "green", borderRadius: 10 },
                  ]
            }
          >
            <Text
              style={
                recipeState.darkMode === "light"
                  ? [styles.titles, { color: "black" }]
                  : [styles.titles, { color: "#fff" }]
              }
            >
              Ingredientes
            </Text>
            <>
              {arrayIngredients.map((arr, i) => (
                <View key={i}>
                  <Input
                    key={`ingredients${i}`}
                    placeholder={"Ej: 1 kilo de harina"}
                    value={arr}
                    color={
                      recipeState.darkMode === "light" ? "#245071" : "#fff"
                    }
                    onChangeText={(val) => {
                      arrayIngredients[i] = val;
                      setArrayIngredients([...arrayIngredients]);
                    }}
                    onBlur={() => {
                      if (!arrayIngredients[i]) {
                        ingredientError[i] = true;
                        setIngredientError([...ingredientError]);
                      } else {
                        ingredientError[i] = false;
                        setIngredientError([...ingredientError]);
                      }
                    }}
                    errorMessage={
                      ingredientError[i] === true
                        ? "Ingrese un ingrediente porfavor"
                        : null
                    }
                  />
                  <Icon
                    key={`close${i}`}
                    name="close"
                    color={recipeState.darkMode === "light" ? "black" : "#fff"}
                    type="font-awesome"
                    font-awesome
                    size={30}
                    onPress={() => {
                      handleDeleteByPositon(i);
                    }}
                  />
                </View>
              ))}
            </>
            <View style={styles.styleIngredients}>
              <TouchableOpacity onPress={handleAddInputIngredient}>
                <Text
                  style={
                    recipeState.darkMode === "light"
                      ? [styles.textIngredients, { color: "black" }]
                      : [styles.textIngredients, { color: "#fff" }]
                  }
                >
                  <Icon
                    name="plus"
                    type="font-awesome"
                    size={15}
                    color={recipeState.darkMode === "light" ? "black" : "#fff"}
                  />{" "}
                  Agregar Ingrediente
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDeleteInputIngredient}>
                <Text
                  style={
                    recipeState.darkMode === "light"
                      ? [styles.textIngredients, { color: "black" }]
                      : [styles.textIngredients, { color: "#fff" }]
                  }
                >
                  <Icon
                    name="trash"
                    type="font-awesome"
                    size={15}
                    color={recipeState.darkMode === "light" ? "black" : "#fff"}
                  />{" "}
                  Borrar Ingrediente
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/*Generar un textInput por medio de un boton para ingresar paso a paso las preparaciones*/}
          <View
            style={
              recipeState.darkMode === "light"
                ? [
                    styles.styleForm,
                    { backgroundColor: "#FFFFFF98", borderRadius: 10 },
                  ]
                : [
                    styles.styleForm,
                    { backgroundColor: "green", borderRadius: 10 },
                  ]
            }
          >
            <Text
              style={
                recipeState.darkMode === "light"
                  ? [styles.titles, { color: "black" }]
                  : [styles.titles, { color: "#fff" }]
              }
            >
              Preparaciones
            </Text>
            <>
              {arrayPreparations.map((arr, j) => (
                <View key={j}>
                  <Input
                    key={`preparacion${j}`}
                    placeholder={`Ej: Paso # ${j + 1}`}
                    value={arr}
                    color={
                      recipeState.darkMode === "light" ? "#245071" : "#fff"
                    }
                    onChangeText={(val) => {
                      arrayPreparations[j] = val;
                      setArrayPreparations([...arrayPreparations]);
                    }}
                    onBlur={() => {
                      if (!arrayPreparations[j]) {
                        preparationError[j] = true;
                        setPreparationError([...preparationError]);
                      } else {
                        preparationError[j] = false;
                        setPreparationError([...preparationError]);
                      }
                    }}
                    errorMessage={
                      preparationError[j] === true
                        ? "Ingrese un paso porfavor"
                        : null
                    }
                  />
                  <Icon
                    key={`close${j}`}
                    name="close"
                    type="font-awesome"
                    color={recipeState.darkMode === "light" ? "black" : "#fff"}
                    font-awesome
                    size={30}
                    onPress={() => {
                      handleDeleteByPositonPreparation(j);
                    }}
                  />
                </View>
              ))}
            </>
            <View style={styles.styleIngredients}>
              <TouchableOpacity onPress={handleAddInputPreparation}>
                <Text
                  style={
                    recipeState.darkMode === "light"
                      ? [styles.textIngredients, { color: "black" }]
                      : [styles.textIngredients, { color: "#fff" }]
                  }
                >
                  <Icon
                    name="plus"
                    type="font-awesome"
                    size={15}
                    color={recipeState.darkMode === "light" ? "black" : "#fff"}
                  />{" "}
                  Agregar Paso
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDeleteInputPreparation}>
                <Text
                  style={
                    recipeState.darkMode === "light"
                      ? [styles.textIngredients, { color: "black" }]
                      : [styles.textIngredients, { color: "#fff" }]
                  }
                >
                  <Icon
                    name="trash"
                    type="font-awesome"
                    size={15}
                    color={recipeState.darkMode === "light" ? "black" : "#fff"}
                  />{" "}
                  Borrar Paso
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.button}>
            <Button
              title="Guardar"
              color={recipeState.darkMode === "light" ? "#7c3593" : "#7c3593"}
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
    //backgroundColor: "#FFFFFF98",
    padding: 10,
    //borderRadius: 10,
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
