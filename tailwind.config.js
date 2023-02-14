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
        ...theme.color,
        ...theme.palette
      }
    }
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")]
};
