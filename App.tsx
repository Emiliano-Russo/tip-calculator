import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Easing,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./screens/Home";
import { Location } from "./screens/Location";
import { History } from "./screens/History";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import "./i18next";
import {
  interpolate,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import * as SplashScreen from "expo-splash-screen";
import { useTranslation } from "react-i18next";
// import "@formatjs/intl-getcanonicallocales/polyfill";
// import "@formatjs/intl-locale/polyfill";
// import "@formatjs/intl-pluralrules/polyfill";
// import "@formatjs/intl-numberformat/polyfill";
// import "@formatjs/intl-datetimeformat/polyfill";
// import "@formatjs/intl-listformat/polyfill";
// import "@formatjs/intl-relativetimeformat/polyfill";
// import "@formatjs/intl-displaynames/polyfill";

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Evita que la pantalla de inicio se oculte automáticamente
    SplashScreen.preventAutoHideAsync()
      .then(() => loadFonts())
      .catch((error) => console.warn(error));
  }, []);

  async function loadFonts() {
    try {
      await Font.loadAsync({
        boldFont: require("./assets/VisbyBold.otf"),
        lightFont: require("./assets/VisbyLight.otf"),
      });
      setFontsLoaded(true);
      // Oculta la pantalla de inicio una vez que las fuentes estén cargadas
      SplashScreen.hideAsync();
    } catch (error) {
      console.warn(error);
    }
  }

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            const scale = useSharedValue(focused ? 1.2 : 1);
            scale.value = withSpring(focused ? 1.2 : 1);
            const animatedStyle = {
              transform: [
                { scale: interpolate(scale.value, [0, 1.2], [0, 1.2]) },
              ],
            };
            const icon =
              route.name === "Home"
                ? "home"
                : route.name === "Location"
                ? "location"
                : "time";
            return (
              <Animated.View style={animatedStyle}>
                <Ionicons name={icon} size={size} color={color} />
              </Animated.View>
            );
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
          tabBarLabel: ({ color, focused }) => {
            const labelText =
              route.name === "Home" ? t("Inicio") : t("Ubicación");
            return (
              <Text style={{ color, fontFamily: "boldFont" }}>{labelText}</Text>
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Location" component={Location} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
