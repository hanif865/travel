/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: {
          "100": "#333",
          "200": "#292d33",
        },
        lightsteelblue: "#adcce9",
        whitesmoke: "#f2f2f2",
        orangered: "#f04a0e",
        gray: {
          "100": "#808080",
          "200": "#1a1a1a",
          "300": "#111",
        },
        black: "#000",
        gainsboro: "#e5e5e5",
        lightgray: "#ccd3db",
        lightblue: "#c9e4f9",
      },
      fontFamily: {
        "open-sans": "'Open Sans'",
        "playfair-display": "'Playfair Display'",
        "pt-sans": "'PT Sans'",
      },
    },
    fontSize: {
      base: "1rem",
      "smi-8": "0.8rem",
      sm: "0.88rem",
      lg: "1.13rem",
      "29xl": "3rem",
      "5xl": "1.5rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
