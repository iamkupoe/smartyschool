/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#FFFEEA",
        primary_dark: "#FDF9C3",
        secondary: "#23252A",
        accent: "#40A170",
        accent_dark: "#27634C",
      },
    },
    boxShadow: {
      paper: "5px 5px 18px 6px rgba(0, 0, 0, 0.15)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
