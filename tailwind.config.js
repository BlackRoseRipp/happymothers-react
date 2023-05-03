/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#2274A5",
        "blue-secondary": "#2a90cb",
        "blue-light": "#45a3d9",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
