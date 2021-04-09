import createDataContext from "./createDataContext";
import { firebase } from "../Firebase/index";

const recipeReducer = (state, action) => {
  switch (action.type) {
    case "errorMessage":
      return { ...state, error: action.payload };
    case "setCurrentRecipe":
      return { ...state, currentRecipe: action.payload };
    case "created":
      return { ...state, created: action.payload };
    case "createRecipe":
      return {
        ...state,
        recipes: [...recipes, action.payload],
        created: true,
      };
    case "getRecipes":
      return { ...state, recipes: action.payload };
    case "getRecipesByUserID ":
      return { ...state, recipesByUserID: action.payload };
    case "updateRecipe ":
      return {
        ...state,
        updated: true,
        recipesByUserID: state.recipesByUserID.map((recipe) => {
          if (recipe.id === action.payload.recipe.id) {
            return {
              ...recipe,
              title: action.payload.recipe.title,
              description: action.payload.recipe.description,
              arrayIngredients: action.payload.recipe.arrayIngredients,
              arrayPreparations: action.payload.recipe.arrayPreparations,
              getImage: action.payload.recipe.getImage,
            };
          }
        }),
      };
    case "deleteRecipe":
      return {
        state,
        deleted: true,
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

  console.log(response);
  console.log(blob);

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
            type: "CreateRecipe",
            payload: "Se creo la nueva receta",
          });
          dispatch({ type: "created", payload: true });
        })
        .catch((error) => {
          dispatch({
            type: "errorMessage",
            payload: error.message,
          });
        });
    })
    .catch((error) => {
      dispatch({
        type: "errorMessage",
        payload: error.message,
      });
    });
};

/*Traer los datos de firebase en general*/
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
    confirm: true,
  });
};

/*Traer los datos de firebase segun el user id*/
const getRecipesByUserID = (dispatch) => async (userId, updated) => {
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
};

const updateRecipes = (dispatch) => (
  title,
  id,
  description,
  arrayIngredients,
  arrayPreparations,
  getImage
) => {
  const data = {
    title,
    description,
    arrayIngredients,
    arrayPreparations,
    getImage,
  };
  firebase
    .firestore()
    .collection("recipes")
    .doc(id)
    .update(data)
    .then(() => {
      dispatch({ type: "updateRecipes", payload: { recipe: data } });
      console.log("Recetas Actualizadas");
    });
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
    .catch((error) => {
      console.log(error.message);
    });
};

const setCurrentRecipe = (dispatch) => (recipe) => {
  dispatch({ type: "setCurrentRecipe", payload: recipe });
};
const refreshRecipe = (dispatch) => (refresh) => {
  return !refresh;
};

const resetCreated = (dispatch) => () => {
  dispatch({ type: "created", payload: false });
};

//Exportar las funcionalidades del contexto

export const { Provider, Context } = createDataContext(
  recipeReducer,
  {
    createRecipe,
    getRecipesByUserID,
    getRecipes,
    updateRecipes,
    deleteRecipe,
    setCurrentRecipe,
    refreshRecipe,
    resetCreated,
  },
  {
    recipes: [],
    recipesByUserID: [],
    refresh: false,
    error: "",
    currentRecipe: {
      id: "",
      title: "",
      description: "",
      arrayIngredients: [],
      arrayPreparations: [],
      getImage: "",
    },
    created: false,
    updated: false,
    deleted: false,
  }
);
