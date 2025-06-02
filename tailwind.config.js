import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik Variable', 'serif']
      },
      colors: {
        primary: "#0693e3",
        secondary: "#8ed1fc",
      }
    },
  },
  darkMode: "class",
  plugins: [
    heroui()
  ],
}

