import createDataContext from "./createDataContext";
import { firebase } from "../Firebase/index";

const recipeReducer = (state, action) => {
  switch (action.type) {
    case "toastMessage":
      return { ...state, error: action.payload };
    case "createRecipe":
      return { ...state, recipes: action.payload, created: true };
    case "getRecipes":
      return { ...state, recipes: action.payload };
    case "getRecipesByUserID ":
      return { ...state, recipesByUserID: action.payload };
    case "updateRecipe ":
      return { ...state, recipesByUserID: action.payload };
    case "deleteRecipe":
      return {
        ...state,
        recipesByUSerID: action.payload,
        recipes: action.payload,
      };
    default:
      return state;
  }
};

/*Guarda una nueva receta dependiendo del usuario*/
const createRecipe = (dispatch) => async (
  image,
  title,
  description,
  arrayIngredients,
  arrayPreparations,
  userId,
  fullname
) => {
  const response = await fetch(image);
  const blob = await response.blob();

  /*Proceso para guardar la imagen en firebase storage*/
  let ref = firebase.storage().ref().child(`images/${title}`);
  ref
    .put(blob)
    .then(async () => {
      /*consigo la url de la imagen que ingreso el usuario */
      let getImage = await ref.getDownloadURL();

      /*Consigo un id aleatorio */
      let idRecipe = firebase.firestore().collection("recipes").doc().id;

      firebase
        .firestore()
        .collection("recipes")
        .doc(idRecipe)
        .set({
          id: idRecipe,
          title,
          description,
          arrayIngredients,
          arrayPreparations,
          getImage,
          userId,
          fullname,
        })
        .then(() => {
          dispatch({
            type: "createRecipe",
            payload: "Se creo la nueva receta",
          });
        })
        .catch((error) => {
          dispatch({
            type: "toastMessage",
            payload: error.message,
          });
        });
    })
    .catch((error) => {
      dispatch({
        type: "toastMessage",
        payload: error.message,
      });
    });
};

/*Traer los datos de firebase segun el user id*/
const getRecipes = (dispatch) => async () => {
  let recipes = [];
  const snapshot = await firebase
    .firestore()
    .collection("recipes")
    .orderBy("title")
    .get();

  snapshot.forEach((doc) => {
    recipes.push(doc.data());
  });

  dispatch({
    type: "getRecipes",
    payload: recipes,
  });
  dispatch({type: "toastMessage", payload: "Receta generadas exitosamente"});
};

/*Traer los datos de firebase segun el user id*/
const getRecipesByUserID = (dispatch) => async (userId) => {
  let recipesByUserID = [];
  const snapshot = await firebase
    .firestore()
    .collection("recipes")
    .where("userId", "==", userId)
    .orderBy("title")
    .get();

  snapshot.forEach((doc) => {
    recipesByUserID.push(doc.data());
  });

  dispatch({
    type: "getRecipesByUserID ",
    payload: recipesByUserID,
  });
  dispatch({type: "toastMessage", payload: "Receta generadas exitosamente"});
};

const updateRecipes = (dispatch) => (
  title,
  id,
  description,
  arrayIngredients,
  arrayPreparations,
  getImage
) => {
  firebase
    .firestore()
    .collection("recipes")
    .doc(id)
    .update({
      title,
      description,
      arrayIngredients,
      arrayPreparations,
      getImage,
    })
    .then(() => {
      console.log("Recetas Actualizadas");
    });
    dispatch({type: "toastMessage", payload: "Receta actualizada por favor refresque la app"});
};

const deleteRecipe = (dispatch) => (id) => {
  firebase
    .firestore()
    .collection("recipes")
    .doc(id)
    .delete()
    .then(() => {
      console.log("Se borra la receta");
    })
    dispatch({type: "toastMessage", payload: "Receta borrada por favor refresque la app"})
    .catch((error) => {
      console.log(error.message);
    });
  
};

//Exportar las funcionalidades del contexto

export const { Provider, Context } = createDataContext(
  recipeReducer,
  { createRecipe, getRecipesByUserID, getRecipes, updateRecipes, deleteRecipe },
  {
    recipes: [],
    recipesByUserID: [],
    error: "",
  }
);
