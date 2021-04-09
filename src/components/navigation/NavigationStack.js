import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import { Context as AuthContext } from "../../providers/AuthContext";
import Login from "../screens/Login";
import NewUser from "../screens/NewUser";
import ChangePassword from "../screens/ChangePassword";
import NavigationTab from "./NavigationTab";
import Recipes from "../screens/Recipes";
import UpdateRecipes from "../screens/UpdateRecipes";

const Stack = createStackNavigator();

const NavigationStack = () => {
  const { state, persistLogin } = useContext(AuthContext);

  // Verificar si ya existen credenciales de autenticación
  useEffect(() => {
    persistLogin();
  }, []);

  // Prevenir que se oculte la pantalla de splash
  SplashScreen.preventAutoHideAsync();

  // Ocultar la pantalla de splash al verificar que existe un token de inicio
  if (!state.loading) SplashScreen.hideAsync();

  return (
    <NavigationContainer>
      {!state.loading && (
        <>
          {state.loggedIn ? (
            <Stack.Navigator initialRouteName="tab">
              <Stack.Screen
                name="tab"
                component={NavigationTab}
                options={{
                  headerStyle: { backgroundColor: "#7c3593" },
                  headerTitle: "Recetas Arabes",
                  headerTintColor: "#fff",
                  headerTitleAlign: "center",
                }}
              />
              <Stack.Screen
                name="Recipes"
                component={Recipes}
                options={{
                  headerTitle: "",
                  //headerStyle: { backgroundColor: "#fff" },
                  headerStyle: { backgroundColor: "#7c3593" },
                  //headerTransparent: true,
                  headerTintColor: "#fff",
                }}
              />
              <Stack.Screen
                name="UpdateRecipes"
                component={UpdateRecipes}
                options={{
                  headerTitle: "",
                  headerStyle: { backgroundColor: "#7c3593" },
                  headerTintColor: "#fff",
                }}
              />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NewUser"
                component={NewUser}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ChangePassword"
                component={ChangePassword}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          )}
        </>
      )}
    </NavigationContainer>
  );
};

export default NavigationStack;
