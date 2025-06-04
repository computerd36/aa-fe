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
        text: "#e0e5ee",
        background1: "#0b0b0e",
        background2: "#0e0e11",
        primary: "#0693e3",
        secondary: "#8ed1fc",
        accent: "#356bcc",
      }
    },
  },
  darkMode: "class",
  plugins: [
    heroui()
  ],
}

