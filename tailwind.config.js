/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: "#ffba49",
        green: "#20a39e",
        red: "#ef5b5b",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
