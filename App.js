import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Load from "./src/components/screens/Load";
import Login from "./src/components/screens/Login";
import ChangePassword from "./src/components/screens/ChangePassword";
import NewUser from "./src/components/screens/NewUser";
import NavigationTab from "./src/components/navigation/NavigationTab";
import Recipes from "./src/components/screens/Recipes";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Load"
              component={Load}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewUser"
              component={NewUser}
              options={{
                title: "Nuevo Usuario",
                headerStyle: {
                  backgroundColor: "#7c3593",
                },
                headerTintColor: "#ebecf2",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={{
                title: "Cambiar Contraseña",
                headerStyle: {
                  backgroundColor: "#7c3593",
                },
                headerTintColor: "#ebecf2",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen name="tab" component={NavigationTab} />
            <Stack.Screen name="Recipes" component={Recipes} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
});
