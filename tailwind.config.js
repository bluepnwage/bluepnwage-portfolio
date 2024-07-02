const theme = require("./theme.json");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        neutral: {
          50:'#F2F2F2',
          100:'#D6D6D6',
          200:'#B9B9B9',
          300:'#7F7F7F',
          400:'#454545',
          500: '#282828',
          600: '#1A1A1A',
          700: '#131313',
          800: '#0F0F0F',
          900: '#0B0B0B'
        },
        gray: {
          50: '#e4f3f6',
          100: '#d0d9e0',
          200: '#b8c1c6',
          300: '#9da8ad',
          400: '#849095',
          500: '#6a777b',
          600: '#525c61',
          700: '#384145',
          800: '#1d262b',
          900: '#020917',
        }
      }
    }
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")]
};
