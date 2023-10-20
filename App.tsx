import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./screens/Home";
import { Location } from "./screens/Location";
import { History } from "./screens/History";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import "./i18next";

const Tab = createBottomTabNavigator();

function loadFonts() {
  return Font.loadAsync({
    boldFont: require("./assets/VisbyBold.otf"),
    lightFont: require("./assets/VisbyLight.otf"),
  });
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded)
    return (
      <AppLoading
        startAsync={loadFonts}
        onError={(error) => console.warn(error)}
        onFinish={() => setFontsLoaded(true)}
      />
    );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const icon =
              route.name === "Home"
                ? "home"
                : route.name === "Location"
                ? "location"
                : "time";
            return <Ionicons name={icon} size={size} color={color} />;
          },
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#000000",
            height: 80,
            paddingBottom: 20,
            paddingTop: 10,
          },
          tabBarLabelStyle: {
            fontFamily: "boldFont", // Aquí es donde estableces el fontFamily
          },
        })}
      >
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Location" component={Location} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
