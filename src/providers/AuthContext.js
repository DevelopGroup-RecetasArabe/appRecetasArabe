import createDataContext from "./createDataContext";
import { firebase } from "../Firebase";
import * as Google from "expo-google-app-auth";
import { appIdGoogleIOS, appIdGoogleAndroid } from "../../enviroment";

// Acciones disponibles para el reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case "errorMessage":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { ...state, user: action.payload, loggedIn: true };
    case "signout":
      return { ...state, user: action.payload, loggedIn: false };
    case "changePassword":
      return { ...state, user: action.payload };
    case "persistLogin":
      return {
        ...state,
        user: action.payload.user,
        loggedIn: action.payload.loggedIn,
        loading: false,
      };
    case "signInWithGoogle":
      return { ...state, user: action.payload, loggedIn: true };
    case "signup":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

// Permite el inicio de sesión mediante firebase con email y password
const signin = (dispatch) => (email, password) => {
  // Hacer la petición al API de firebasee
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      // Obtener el Unique Identifier generado para cada usuario
      // Firebase -> Authentication
      const uid = response.user.uid;

      // Obtener la colección desde Firebase
      const usersRef = firebase.firestore().collection("users");

      // Verificar que el usuario existe en Firebase authentication
      // y también está almacenado en la colección de usuarios.
      usersRef
        .doc(uid)
        .get()
        .then((firestoreDocument) => {
          if (!firestoreDocument.exists) {
            dispatch({
              type: "errorMessage",
              payload: "User does not exist in the database!",
            });
          } else {
            // Llamar el reducer y enviarle los valores del usuario al estado
            dispatch({ type: "errorMessage", payload: "" });
            dispatch({ type: "signin", payload: firestoreDocument.data() });
          }
        });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

// Cierra la sesión del usuario
const signout = (dispatch) => () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: "signout", payload: {} });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

// Verifica si existe el token de firebase para iniciar sesión sin credenciales
const persistLogin = (dispatch) => () => {
  const userRef = firebase.firestore().collection("users");

  // Si el usuario ya se ha autenticado previamente, retornar
  // la información del usuario, caso contrario,retonar un objeto vacío.
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userRef
        .doc(user.uid)
        .get()
        .then((document) => {
          dispatch({
            type: "persistLogin",
            payload: { user: document.data(), loggedIn: true },
          });
        })
        .catch((error) => {
          dispatch({ type: "errorMessage", payload: error.message });
        });
    } else {
      dispatch({
        type: "persistLogin",
        payload: { user: {}, loggedIn: false },
      });
    }
  });
};

//Entrar con Google
const signInWithGoogle = (dispatch) => async () => {
  const result = await Google.logInAsync({
    androidClientId: appIdGoogleAndroid,
    iosClientId: appIdGoogleIOS,
    scopes: ["profile", "email"],
  });

  if (result.type === "success") {
    const credential = firebase.auth.GoogleAuthProvider.credential(
      result.idToken
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((response) => {
        const uid = response.user.uid;
        const name = response.user.displayName;
        const data = {
          id: uid,
          fullname: name,
        };

        firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .set(data)
          .then(() => {
            console.log("hola");
            dispatch({ type: "signInWithGoogle", payload: data });
          })
          .catch((error) => {
            dispatch({ type: "errorMessage", payload: error.message });
          });
      });
  }
};

const signup = (dispatch) => (fullname, email, password, navigation) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      // Obtener el Unique Identifier generado para cada usuario
      // Firebase -> Authentication
      const uid = response.user.uid;

      // Construir el objeto que le enviaremos a la collección de "users"
      const data = {
        id: uid,
        fullname,
        email,
      };

      // Obtener la colección desde Firebase
      const usersRef = firebase.firestore().collection("users");

      // Almacenar la información del usuario que se registra en Firestore
      usersRef
        .doc(uid)
        .set(data)
        .then(() => {
          dispatch({
            type: "signup",
            payload: data,
          });
          navigation.navigate("Login");
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

//Cambiar la contraseña
const changePassword = (dispatch) => (email, navigation) => {
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      dispatch({
        type: "changePassword",
        payload: "Se envio a su correo la contraseña",
      });
      navigation.navigate("Login");
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

// Exportar las funcionalidades requeridas al contexto
export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signin,
    signup,
    changePassword,
    signout,
    persistLogin,
    signInWithGoogle,
  },
  {
    user: {},
    errorMessage: "",
    loggedIn: false,
    loading: true,
  }
);
