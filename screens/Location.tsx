import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { countries } from "../data/countries";
import { Picker } from "@react-native-picker/picker";
import { storeData } from "../data/local.repo";
import { useTranslation } from "react-i18next";

export const Location = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0].name);
  const { t, i18n } = useTranslation();
  const [languageCode, setLanguageCode] = useState(i18n.language);
  const { width, height } = Dimensions.get("window");

  const flagLanguage =
    languageCode == "es"
      ? "Spain"
      : languageCode == "en"
      ? "United States"
      : "Brazil";

  const changeAppLanguage = (newLanguageCode: string) => {
    i18n.changeLanguage(newLanguageCode); // Cambiar el idioma de la app
    setLanguageCode(newLanguageCode); // Actualizar el estado local con el nuevo código de idioma
    storeData("language", newLanguageCode); // Guardar el idioma seleccionado en el almacenamiento local
  };

  const countrySelected = countries.find((x) => x.name == selectedCountry);
  const description =
    languageCode == "es"
      ? countrySelected?.description?.es
      : countrySelected?.description?.en;

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "flex-end",
          marginTop: 10,
        }}
      >
        <Image
          style={{ width: 20, height: 20, marginRight: 10 }}
          source={{
            uri: countries.find((country) => country.name == flagLanguage)
              ?.image,
          }}
        />
        <Picker
          selectedValue={languageCode}
          onValueChange={changeAppLanguage}
          style={{ width: 150, height: 50 }}
        >
          {[
            <Picker.Item
              key={1}
              label={"Español"}
              value={"es"}
              style={styles.pickerItem}
            />,
            <Picker.Item
              key={1}
              label={"English"}
              value={"en"}
              style={styles.pickerItem}
            />,
            <Picker.Item
              key={1}
              label={"Português"}
              value={"pt"}
              style={styles.pickerItem}
            />,
          ]}
        </Picker>
      </View>
      <Image
        style={{ width: 50, height: 50, marginTop: 100 }}
        source={{
          uri: countries.find((country) => country.name == selectedCountry)
            ?.image,
        }}
      />
      <View
        style={{
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 50,
          marginTop: 20,
        }}
      >
        <Picker
          selectedValue={selectedCountry}
          onValueChange={(itemValue) => {
            setSelectedCountry(itemValue);
            storeData("country", itemValue);
          }}
          style={styles.picker}
        >
          {countries
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((country, index) => (
              <Picker.Item
                key={index}
                label={country.name}
                value={country.name}
                style={styles.pickerItem}
              />
            ))}
        </Picker>
      </View>
      <Text style={{ fontFamily: "boldFont", marginTop: height * 0.04 }}>
        Propina {countries.find((x) => x.name == selectedCountry)?.tip + "%"}
      </Text>
      <Text
        style={{
          fontFamily: "lightFont",
          width: "60%",
          marginTop: height * 0.02,
          textAlign: "center",
        }}
      >
        {description}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  picker: {
    width: 200,
    height: 50,
    fontFamily: "boldFont",
  },
  pickerItem: {
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "boldFont",
  },
});
