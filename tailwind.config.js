/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FFFEEA',
        primary_dark: '#FDF9C3',
        secondary: '#23252A',
        accent: '#40A170',
        accent_dark: '#27634C',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
