module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        violet: {
          darkest: "#2E1541",
          dark: "#4A2268",
          DEFAULT: "#662F90",
          light: "#803BB5",
          lightest: "#995AC9",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
}
