import React, { useContext, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Home from "../screens/Home";
import MyRecipes from "../screens/MyRecipes";
import AddRecipes from "../screens/AddRecipes";
import { Context as AuthContext } from "../../providers/AuthContext";
import Login from "../screens/Login";

const Tab = createBottomTabNavigator();

const NavigationTab = ({ navigation }) => {
  const { signout } = useContext(AuthContext);
  const [refresh, setRefresh] = useState(false);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#7c3593",
        style: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
        onPress={() => {
          setRefresh(!refresh);
        }}
        initialParams={{ refresh: refresh }}
      />
      <Tab.Screen
        name={"MyRecipes"}
        component={MyRecipes}
        options={{
          tabBarLabel: "Mis recetas",
          tabBarIcon: ({ color }) => (
            <Icon name="spoon" color={color} size={25} />
          ),
        }}
        onPress={() => {
          setRefresh(!refresh);
        }}
        initialParams={{ refresh: refresh }}
      />
      <Tab.Screen
        name={"AddRecipes"}
        component={AddRecipes}
        options={{
          tabBarLabel: "Add",
          tabBarIcon: ({ color }) => (
            <Icon name="plus-circle" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={"Login"}
        component={Login}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Icon
              name="sign-out"
              color={color}
              size={25}
              onPress={() => {
                signout();
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
