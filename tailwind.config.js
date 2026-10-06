/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: "#C8913A", dark: "#A9762A", light: "#E0B066" },
        dark: { DEFAULT: "#0B0B0B", soft: "#141414", card: "#181818" },
        cream: "#FBF8F3",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        script: ['"Alex Brush"', '"Pinyon Script"', "cursive"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};