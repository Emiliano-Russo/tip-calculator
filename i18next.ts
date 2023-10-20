// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Monto a pagar": "Amount to pay",
      Experiencia: "Experience",
      Regular: "Regular",
      Buena: "Good",
      Excelente: "Excellent",
      "Total •": "Total •",
      "Propina •": "Tip •",
      Lenguaje: "Language",
    },
  },
  es: {
    translation: {
      "Monto a pagar": "Monto a pagar",
      Experiencia: "Experiencia",
      Regular: "Regular",
      Buena: "Buena",
      Excelente: "Excelente",
      "Total •": "Total •",
      "Propina •": "Propina •",
      Lenguaje: "Lenguaje",
    },
  },
  pt: {
    translation: {
      "Monto a pagar": "Quantia a pagar",
      Experiencia: "Experiência",
      Regular: "Regular",
      Buena: "Boa",
      Excelente: "Excelente",
      "Total •": "Total •",
      "Propina •": "Gorjeta •",
      Lenguaje: "Linguagem",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // lenguaje por defecto
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: "v3",
});

export default i18n;
