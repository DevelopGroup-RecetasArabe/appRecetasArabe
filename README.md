# Recetas Arabes
> appRecetasArabe

<h1 align="center">
  <br>
  <a href="https://github.com/DevelopGroup-RecetasArabe/appRecetasArabe"><img src="https://i.pinimg.com/564x/53/f5/18/53f5185ac2c4275ef53daa3a05158e06.jpg" alt="Recetas Arabes" width="500"></a>
  <br>
  Recetas Arabes
  <br>
  <p align="center">
  <a href="#"><img src="https://deshire.github.io/portafolio.github.io/image/react.png" alt="React Native" width="50"></a> •
  <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" width="50"></a> •
  <a href="#"><img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="Node.js" width="50"></a> •
  <a href="#"><img src="https://iconape.com/wp-content/files/kd/291769/png/expo-logo.png" alt="Expo" width="50"></a> •
  <a href="#"><img src="https://iconape.com/wp-content/png_logo_vector/git-icon.png" alt="Git" width="50"></a> •
  <a href="#"><img src="https://cdn2.downdetector.com/static/uploads/logo/github.logo.png" alt="GitHub" width="50"></a> •
  <a href="#"><img src="https://www.returngis.net/wp-content/uploads/2015/11/VS-Code.png" alt="Visual Code" width="50"></a>
</p>
</h1>

### Unete a nosotros
 _Lo que conocemos es un gota, lo que ignoramos es un oceano, asi que ayudanos con tus recetas arabes que conoces y aprende de las que desconoces._
<br>

  ## Desarrolladores
 - Gustavo Cano **[gustavocano23](https://github.com/gustavocano23)**
 - Carlos Navarro **[Carloscuadra1400](https://github.com/Carloscuadra1400)**
 - Hugo Murillo **[huguito17](https://github.com/huguito17)**
<a>
  
  ## Nosotros
appRecetasArabe es una aplicación movil creada con React Native, utilizando Expo.cli y los conceptos de Node.js, se implemento React Hooks y un patrón de diseño basado en componentes, aplicando los principios de reutilización de código, se aplico CRUD al diseño y funcionalidad de la misma. Utilizamos Git como Sistema de Control de Versiones y GitHub como repositorio distribuido en la nube.

  ## Objetivos
  - Ampliar los conocimientos sobre Javascript, React Native, Hooks, Context API, diseño móvil, API’s y almacenamiento en la nube.
  - Fortalecer las habilidades de investigación, análisis de la información, capacidad de síntesis, análisis y programación, trabajo en equipo, desarrollo y planificación de proyectos, diseño móvil y transmisión de conocimiento en la temática asignada.
  
  ## Documentación
- Navegación: **[Navigation]( https://reactnavigation.org/docs/getting-started)**
- Navegación por Stack: **[Hello React Navigation | React Navigation]( https://reactnavigation.org/docs/hello-react-navigation/ )**
- Navegación por Tab y createBottomTabNavigator: **[Tab navigation | React Navigation]( https://reactnavigation.org/docs/tab-based-navigation/)**
	<br> **[createBottomTabNavigator | React Navigation]( https://reactnavigation.org/docs/bottom-tab-navigator/ )**
- Email-Validator: **[email-validator - npm (npmjs.com)]( https://www.npmjs.com/package/email-validator )**
- Expo Constants: **[Constants - Expo Documentation]( https://docs.expo.io/versions/latest/sdk/constants/ )**
- Expo Google: **[Google - Expo Documentation]( https://docs.expo.io/versions/latest/sdk/google/ )**
	<br> **[Social Authentication | React Native Firebase (rnfirebase.io)]( https://rnfirebase.io/auth/social-auth)**
- Expo Image Picker: **[ImagePicker - Expo Documentation]( https://docs.expo.io/versions/latest/sdk/imagepicker/ )**
- Expo Linear Gradient: **[LinearGradient - Expo Documentation]( https://docs.expo.io/versions/latest/sdk/linear-gradient/ )**
- Expo splash screen: **[SplashScreen - Expo Documentation](https://docs.expo.io/versions/latest/sdk/splash-screen/ )**
- Firebase: **[Documentación  |  Firebase (google.com)](https://firebase.google.com/docs)**
            **[React Native Firebase | React Native Firebase (rnfirebase.io)]( https://rnfirebase.io/ )**
- React Native elements: **[Getting Started | React Native Elements](https://reactnativeelements.com/docs/ )**
- Código de referencias utilizados en mi proyecto:
Para poder descargar las imágenes de firebase nos apoyamos de la plataforma de youtube con el siguiente **[Video]( https://youtu.be/jy4hFM2hGkM )**

Código que se implemento de otras fuentes:
```js
/*Codigo de Image Picker conseguido en la pagina de la documentacion de expo*/
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

  if (!result.cancelled) {
    setImage(result.uri);
  }
};

/* Codigo para iniciar sesion con google conseguido en la documentacion de expo google y react native firebase social auth*/

/*En la documentacion de google */
const config = {
  expoClientId: `<YOUR_WEB_CLIENT_ID>`,
  iosClientId: `<YOUR_IOS_CLIENT_ID>`,
  androidClientId: `<YOUR_ANDROID_CLIENT_ID>`,
  iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
  androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
};
const { type, accessToken } = await Google.logInAsync(config);

if (type === "success") {
  /* Log-Out */
  await Google.logOutAsync({ accessToken, ...config });
  /* `accessToken` is now invalid and cannot be used to get data from the Google API with HTTP requests */
}

/*En la documentacion de react native firebase social auth */

// Create a Google credential with the token
const googleCredential = auth.GoogleAuthProvider.credential(idToken);

// Sign-in the user with the credential
return auth().signInWithCredential(googleCredential);

/*Pequeño fragmenta del codigo para subir la imagen a firebase storage sacado de un video de youtube CANAL: Agustin Navarro Galdon*/
const response = await fetch(image);
const blob = await response.blob();
let ref = firebase.storage().ref().child(``);
ref.put(blob);

```

  ## Dependencias
	
  _Dependencias Actuales 14/04/21_

- npm install expo-cli
- npm install npm install @react-navigation/native
- npm install @react-navigation/stack
- npm install @react-navigation/bottom-tabs
- npm install react-native-elements
- expo install expo-constants
- yarn add firebase
- npm install email-validator
- expo install expo-linear-gradient
- expo install expo-google-app-auth
- expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
- npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

  ## Versiones de las dependencias
```js
  "dependencies": {
    "@react-native-community/masked-view": "^0.1.10",
    "@react-navigation/bottom-tabs": "^5.11.8",
    "@react-navigation/native": "^5.9.3",
    "@react-navigation/stack": "^5.14.3",
    "email-validator": "^2.0.4",
    "expo": "~40.0.0",
    "expo-cli": "^4.3.5",
    "expo-constants": "~9.3.3",
    "expo-google-app-auth": "^8.1.4",
    "expo-image-picker": "~9.2.0",
    "expo-linear-gradient": "~8.4.0",
    "expo-splash-screen": "~0.8.1",
    "expo-status-bar": "~1.0.3",
    "firebase": "^8.3.2",
    "react": "^17.0.2",
    "react-dom": "16.13.1",
    "react-native": "https://github.com/expo/react-native/archive/sdk-40.0.1.tar.gz",
    "react-native-elements": "^3.3.2",
    "react-native-gesture-handler": "^1.8.0",
    "react-native-reanimated": "^1.13.3",
    "react-native-safe-area-context": "3.1.9",
    "react-native-screens": "^2.15.2",
    "react-native-vector-icons": "^8.1.0",
    "react-native-web": "~0.13.12"
  }
```
