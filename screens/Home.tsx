import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider from "@react-native-community/slider";
import { Switch } from "react-native";

const image = require("../assets/multicolor.png");
const { width, height } = Dimensions.get("window");

export const Home = () => {
  const [sliderValue, setSliderValue] = useState(1);
  const [isRoundUp, setIsRoundUp] = useState(false); // Para gestionar el estado del Switch

  const getLabel = () => {
    switch (sliderValue) {
      case 0:
        return "Regular";
      case 1:
        return "Buena";
      case 2:
        return "Excelente";
      default:
        return "";
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <ImageBackground source={image} style={styles.backgroundImage}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} keyboardType="numeric" />
            <Text style={styles.currencySymbol}>$</Text>
          </View>
        </ImageBackground>

        <ImageBackground source={image} style={styles.backgroundImageSlider}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={2}
            step={1}
            value={sliderValue}
            onValueChange={(value) => setSliderValue(value)}
            thumbTintColor="black"
          />
          <Text style={styles.sliderLabel}>{getLabel()}</Text>
        </ImageBackground>

        <Text
          style={{
            fontSize: 40,
            fontFamily: "boldFont",
            marginTop: height * 0.15,
          }}
        >
          Total • 200$
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "boldFont",
            marginTop: height * 0.01,
          }}
        >
          Propina • 15$
        </Text>
        <View style={styles.roundUpContainer}>
          <Text style={styles.roundUpText}>Redondear hacia arriba</Text>
          <Switch
            value={isRoundUp}
            onValueChange={(value) => setIsRoundUp(value)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    alignItems: "center",
    flex: 1,
  },
  backgroundImage: {
    width: width * 0.7,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    overflow: "hidden",
    marginTop: height * 0.1,
  },
  backgroundImageSlider: {
    width: width * 0.7,
    height: height * 0.15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    overflow: "hidden",
    marginTop: height * 0.1,
  },
  textInput: {
    width: "100%",
    height: "100%",
    fontFamily: "boldFont",
    fontSize: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "relative",
  },
  currencySymbol: {
    fontFamily: "boldFont",
    fontSize: 20,
    position: "absolute",
    left: 20,
  },
  slider: {
    width: "100%", // Modificado para que ocupe un poco menos del ancho total
    height: 60, // Aumentado para que el slider sea más grande
    marginTop: 10,
  },
  sliderLabel: {
    marginTop: 10,
    fontFamily: "boldFont",
    fontSize: 16,
    textAlign: "center",
  },
  roundUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  roundUpText: {
    marginRight: 10,
    fontSize: 16,
    fontFamily: "boldFont",
  },
});
