import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Text,
  View,
  Platform,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImageButton from "../shared/ImageButton";
import { Input, Icon } from "react-native-elements";
import { Context as AuthContext } from "../../providers/AuthContext";
import { Context as RecipeContext } from "../../providers/RecipeContext";

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
    const decrement = count - 1;
    setCount(decrement);
    setDeleteIngredient(!deleteIngredient);
    arrayIngredients.pop();
    ingredientError.pop();
  };

  /*Agregar inputs por medio de la preparacion de un boton */
  const handleAddInputPreparation = () => {
    arrayPreparations[count2] = "";
    const increment = count2 + 1;
    setCount2(increment);
  };

  /*Eliminar el inputs por medio de un boton*/
  const handleDeleteInputPreparation = () => {
    const decrement = count2 - 1;
    setCount2(decrement);
    setDeletePreparation(!deletePreparation);
    arrayPreparations.pop();
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
    <ScrollView style={styles.container}>
      {/*Image Picker*/}
      <View>
        <ImageButton image={image} callback={pickImage} />
      </View>
      {/*Formulario de recetas*/}
      <View style={styles.formRecipes}>
        <View style={styles.styleForm}>
          <Text>Nombre de la receta</Text>
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
          <Text>Descripcion de la receta</Text>
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
          <Text>Ingredientes</Text>
          <>
            {arrayIngredients.map((arr, i) => (
              <Input
                key={`ingredients${i}`}
                placeholder={"Ej: 1 kilo de harina"}
                color={"#245071"}
                onChangeText={(val) => {
                  arrayIngredients[i] = val;
                  console.log(arrayIngredients);
                }}
                onBlur={() => {
                  if (!arrayIngredients[i]) ingredientError[i] = true;
                  else ingredientError[i] = false;
                }}
                errorMessage={ingredientError[i] === true ? "Error" : null}
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
          <Text>Preparaciones</Text>
          <>
            {arrayPreparations.map((arr, j) => (
              <Input
                key={`preparacion${j}`}
                placeholder={`Ej: Paso # ${j + 1}`}
                color={"#245071"}
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
                <Icon name="plus" type="font-awesome" size={15} /> Agregar Paso
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDeleteInputPreparation}>
              <Text style={styles.textIngredients}>
                <Icon name="trash" type="font-awesome" size={15} /> Borrar Paso
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.button}>
          <Button
            title="Guardar"
            color="#7c3593"
            onPress={() => {
              console.log(state.user.id);

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
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ebecf2",
  },
  formRecipes: {
    padding: 10,
  },
  styleForm: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 12,
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
    marginBottom: 15,
  },
});

export default AddRecipes;
