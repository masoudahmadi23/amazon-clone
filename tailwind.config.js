/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        amazonclone: {
          background: "#eaeded",
          light_blue: "#232f3a",
          yellow: "#febd69",
          DEFAULT: "#131921",
        },
      },
    },
  },
  plugins: [],
};
