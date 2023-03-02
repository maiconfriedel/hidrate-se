import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";

import Day from "./src/screens/Day";
import Month from "./src/screens/Month";
import Week from "./src/screens/Week";
import Year from "./src/screens/Year";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Dia") {
              return (iconName = focused ? (
                <Ionicons name="today" size={30} color={color} />
              ) : (
                <Ionicons name="today-outline" size={30} color={color} />
              ));
            } else if (route.name === "Mês") {
              return (iconName = focused ? (
                <MaterialCommunityIcons
                  name="calendar-month"
                  size={30}
                  color={color}
                />
              ) : (
                <MaterialCommunityIcons
                  name="calendar-month-outline"
                  size={30}
                  color={color}
                />
              ));
            } else if (route.name === "Semana") {
              return (iconName = focused ? (
                <FontAwesome5 name="calendar-week" size={28} color={color} />
              ) : (
                <MaterialCommunityIcons
                  name="calendar-week"
                  size={30}
                  color={color}
                />
              ));
            } else if (route.name === "Ano") {
              return (iconName = focused ? (
                <Ionicons name="ios-calendar" size={30} color={color} />
              ) : (
                <Ionicons name="ios-calendar-outline" size={30} color={color} />
              ));
            }
          },
          tabBarActiveTintColor: "#3498db",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            height: 55,
            paddingBottom: 5,
            paddingTop: 5,
          },
        })}
      >
        <Tab.Screen
          name="Dia"
          component={Day}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Semana"
          component={Week}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Mês"
          component={Month}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Ano"
          component={Year}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
