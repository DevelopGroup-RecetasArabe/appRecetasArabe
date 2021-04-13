import React, { useContext, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Home from "../screens/Home";
import MyRecipes from "../screens/MyRecipes";
import Profile from "../screens/Profile";
import AddRecipes from "../screens/AddRecipes";
import { Context as AuthContext } from "../../providers/AuthContext";
import Login from "../screens/Login";
import { LinearGradient } from "expo-linear-gradient";
import { Context as RecipeContext } from "../../providers/RecipeContext";

const Tab = createBottomTabNavigator();

const NavigationTab = () => {
  const { state, signout } = useContext(AuthContext);
  const { state: recipeState } = useContext(RecipeContext);
  useEffect(() => {}, [recipeState.darkMode]);

  return (
    <Tab.Navigator
      initialRouteName="MyRecipes"
      tabBarOptions={
        recipeState.darkMode === "light"
          ? {
              activeTintColor: "#7c3593",
              style: {
                backgroundColor: "#fff",
              },
            }
          : {
              activeTintColor: "#B4975A",
              style: {
                backgroundColor: "black",
              },
            }
      }
    >
      <Tab.Screen
        name={"Home"}
        component={Home}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name={"MyRecipes"}
        component={MyRecipes}
        options={{
          tabBarLabel: "Mis recetas",
          tabBarIcon: ({ color }) => (
            <Icon name="spoon" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name={"AddRecipes"}
        component={AddRecipes}
        options={{
          tabBarLabel: "Añadir",
          tabBarIcon: ({ color }) => (
            <Icon name="plus-circle" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={Profile}
        options={{
          tabBarLabel: "Salir",
          tabBarIcon: ({ color }) => (
            <Icon name="sign-out" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
