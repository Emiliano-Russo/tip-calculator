import React, { useCallback, useEffect, useState } from "react";
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
import { useFocusEffect } from "@react-navigation/native";
import { getData } from "../data/local.repo";
import { Country, countries } from "../data/countries";
import { useTranslation } from "react-i18next";

const image = require("../assets/multicolor.png");
const { width, height } = Dimensions.get("window");

export const Home = () => {
  const [country, setCountry] = useState<Country>({
    name: "Brazil",
    image: "https://img.icons8.com/color/48/brazil-circular.png",
    tip: 10,
  });
  const [sliderValue, setSliderValue] = useState(1);
  const [amount, setAmount] = useState(0);
  const { t, i18n } = useTranslation();

  const loadCountryData = useCallback(() => {
    console.log("fifi country");
    getData("country").then((c) => {
      if (c) {
        const result = countries.find((x) => x.name == c);
        if (result) setCountry(result);
      }
    });
  }, []);

  useEffect(() => {
    loadCountryData();
  }, []);

  // Aquí es donde usamos useFocusEffect
  useFocusEffect(
    useCallback(() => {
      loadCountryData();
      return () => {}; // función de limpieza, si es necesario
    }, [loadCountryData])
  );

  const getLabel = () => {
    switch (sliderValue) {
      case 0:
        return t("Regular");
      case 1:
        return t("Buena");
      case 2:
        return t("Excelente");
      default:
        return "";
    }
  };

  const tip = {
    "0": 1 + country.tip / 100,
    "1": 1 + (2 * country.tip) / 100,
    "2": 1 + (3 * country.tip) / 100,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text
          style={{
            marginTop: height * 0.1,
            fontFamily: "boldFont",
            fontSize: 17,
            marginBottom: height * 0.01,
          }}
        >
          {t("Monto a pagar")}
        </Text>

        <ImageBackground source={image} style={styles.backgroundImage}>
          <View style={styles.inputContainer}>
            <TextInput
              value={amount.toString()}
              onChange={(e) => {
                console.log(e.nativeEvent.text);
                if (e.nativeEvent.text == "") setAmount(0);
                else setAmount(parseInt(e.nativeEvent.text));
              }}
              style={styles.textInput}
              keyboardType="numeric"
            />
            <Text style={styles.currencySymbol}>$</Text>
          </View>
        </ImageBackground>

        <Text
          style={{
            marginTop: height * 0.1,
            fontFamily: "boldFont",
            fontSize: 17,
            marginBottom: height * 0.01,
          }}
        >
          {t("Experiencia")}
        </Text>
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
            marginTop: height * 0.11,
          }}
        >
          {"Total •"}{" "}
          {Math.round(
            amount * tip[sliderValue == 0 ? "0" : sliderValue == 1 ? "1" : "2"]
          )}
          $
        </Text>

        <Text
          style={{
            fontSize: 30,
            fontFamily: "boldFont",
            marginTop: height * 0.01,
          }}
        >
          {t("Propina •")}{" "}
          {Math.round(
            (tip[sliderValue == 0 ? "0" : sliderValue == 1 ? "1" : "2"] - 1) *
              amount
          )}
          $
        </Text>
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
  },
  backgroundImageSlider: {
    width: width * 0.7,
    height: height * 0.15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    overflow: "hidden",
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
});
