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
        red: {
          DEFAULT: "#EB1F27"
        },
        orange: {
          DEFAULT: "#F78D20"
        },
        yellow: {
          DEFAULT: "#F6EB03"
        },
        green: {
          DEFAULT: "#7CC243"
        },
        blue: {
          DEFAULT: "#11AAE2"
        },
        brown: {
          DEFAULT: "#766355"
        },
        black: {
          DEFAULT: "#333333"
        },
      },
    },
    minHeight: {
      "200": "200px",
      "300": "300px",
      '275': '275px',

    },
    backgroundSize: {
      '10%': '10%',
      '20%': '20%',
    },
    backgroundPosition: {
      'right-bottom-hidden': 'right -2.1rem bottom -2.1rem'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  important: true,
}
