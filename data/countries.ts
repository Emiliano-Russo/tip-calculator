export interface Country {
  name: string;
  image: string;
  tip: number;
  description?: string;
}

export const countries: Country[] = [
  {
    name: "Argentina",
    image: "https://img.icons8.com/color/48/argentina-circular.png",
    tip: 10,
    description:
      "En Argentina, la propina no es obligatoria pero es una práctica común, especialmente en cafés y restaurantes.",
  },
  {
    name: "Brazil",
    image: "https://img.icons8.com/color/48/brazil-circular.png",
    tip: 10,
    description:
      "En Brasil, la propina suele estar incluida en la factura como 'servicio'. Sin embargo, es común redondear el monto en efectivo.",
  },
  {
    name: "Canada",
    image: "https://img.icons8.com/color/48/canada-circular.png",
    tip: 15,
    description:
      "En Canadá, se espera una propina del 15-20% sobre el monto total antes de impuestos en restaurantes.",
  },
  {
    name: "China (Not customary)",
    image: "https://img.icons8.com/color/48/china-circular.png",
    tip: 0,
    description:
      "La propina no es tradicional en China y puede ser considerada grosera en algunos lugares.",
  },
  {
    name: "France (Service charge included)",
    image: "https://img.icons8.com/color/48/france-circular.png",
    tip: 0,
    description:
      "En Francia, la propina está incluida en la factura como 'service compris'. Aunque no es obligatorio, es común dejar monedas sueltas.",
  },
  {
    name: "Germany",
    image: "https://img.icons8.com/color/48/germany-circular.png",
    tip: 10,
    description:
      "En Alemania, es común redondear el monto total a una cifra completa como propina.",
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
