const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter"],
      },
      scale: {
        300: "3",
      },
      colors: {
        trueGray: colors.trueGray,
        warmGray: colors.warmGray,
      },
      fontSize: {
        "10xlc": "9rem",
        "10xlc": "10rem",
        "11xlc": "11rem",
        "12xlc": "12rem",
      },
      fontWeight: {
        extraBlack: 1100,
      },
      margin: {
        ".7": "0.175rem",
      },
    },
  },
  variants: {
    extend: {
      translate: ["hover"],
      outline: ["active"],
      filter: ["hover"],
    },
  },
  plugins: [],
}
