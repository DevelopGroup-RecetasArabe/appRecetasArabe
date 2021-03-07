import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";
import AddRecipes from "../screens/AddRecipes";

const Tab = createBottomTabNavigator();

const NavigationTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#fff",
        style: {
          backgroundColor: "#7c3593",
          borderRadius: 20,
          margin: 8,
        },
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name={"Favorites"}
        component={Favorites}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Icon name="heart" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={"AddRecipes"}
        component={AddRecipes}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Icon name="plus-circle" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={"Profiles"}
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
