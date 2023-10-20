interface Description {
  es?: string;
  en?: string;
  pt?: string;
}

export interface Country {
  name: string;
  image: string;
  tip: number;
  description?: Description;
}

export const countries: Country[] = [
  {
    name: "Argentina",
    image: "https://img.icons8.com/color/48/argentina-circular.png",
    tip: 10,
    description: {
      es: "En Argentina, la propina no es obligatoria pero es una práctica común, especialmente en cafés y restaurantes.",
      en: "In Argentina, tipping isn't mandatory but it's a common practice, especially in cafes and restaurants.",
    },
  },
  {
    name: "Brazil",
    image: "https://img.icons8.com/color/48/brazil-circular.png",
    tip: 10,
    description: {
      es: "En Brasil, la propina suele estar incluida en la factura como 'servicio'. Sin embargo, es común redondear el monto en efectivo.",
      en: "In Brazil, the tip is usually included in the bill as 'service'. However, it's common to round up the total in cash.",
    },
  },
  {
    name: "Canada",
    image: "https://img.icons8.com/color/48/canada-circular.png",
    tip: 15,
    description: {
      es: "En Canadá, se espera una propina del 15-20% sobre el monto total antes de impuestos en restaurantes.",
      en: "In Canada, a 15-20% tip on the total amount before taxes is expected in restaurants.",
    },
  },
  {
    name: "China (Not customary)",
    image: "https://img.icons8.com/color/48/china-circular.png",
    tip: 0,
    description: {
      es: "La propina no es tradicional en China y puede ser considerada grosera en algunos lugares.",
      en: "Tipping isn't customary in China and can be considered rude in some places.",
    },
  },
  {
    name: "France (Service charge included)",
    image: "https://img.icons8.com/color/48/france-circular.png",
    tip: 0,
    description: {
      es: "En Francia, la propina está incluida en la factura como 'service compris'. Aunque no es obligatorio, es común dejar monedas sueltas.",
      en: "In France, the tip is included in the bill as 'service compris'. Though not mandatory, it's common to leave loose change.",
    },
  },
  {
    name: "Germany",
    image: "https://img.icons8.com/color/48/germany-circular.png",
    tip: 10,
    description: {
      es: "En Alemania, es común redondear el monto total a una cifra completa como propina.",
      en: "In Germany, it's common to round up the total bill to a whole figure as a tip.",
    },
  },
  {
    name: "India",
    image: "https://img.icons8.com/color/48/india-circular.png",
    tip: 5,
  },
  {
    name: "Japan (Not customary)",
    image: "https://img.icons8.com/color/48/japan-circular.png",
    tip: 0,
  },
  {
    name: "Mexico",
    image: "https://img.icons8.com/color/48/mexico-circular.png",
    tip: 10,
  },
  {
    name: "United States",
    image: "https://img.icons8.com/color/48/usa-circular.png",
    tip: 15,
  },
  {
    name: "United Kingdom",
    image: "https://img.icons8.com/color/48/uk-circular.png",
    tip: 10,
  },
  {
    name: "Australia (Not customary)",
    image: "https://img.icons8.com/color/48/australia-circular.png",
    tip: 0,
  },
  {
    name: "Italy (Service charge included)",
    image: "https://img.icons8.com/color/48/italy-circular.png",
    tip: 0,
  },
  {
    name: "Spain",
    image: "https://img.icons8.com/color/48/spain-circular.png",
    tip: 5,
  },
  {
    name: "Russia",
    image: "https://img.icons8.com/color/48/russia-circular.png",
    tip: 5,
  },
  {
    name: "Uruguay",
    image: "https://img.icons8.com/color/48/uruguay-circular.png",
    tip: 10,
  },
  {
    name: "Chile",
    image: "https://img.icons8.com/color/48/chile-circular.png",
    tip: 10,
  },
];
