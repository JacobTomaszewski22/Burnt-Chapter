/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "rgb(0, 0, 0)",
        secondary: "rgb(17, 15, 15)",
        "hover-bg": "rgb(46, 40, 40)",
        tertiary: "rgb(215, 35, 35)",
        font: "rgb(245, 237, 237)",
        "white-bg": "rgb(243, 241, 216)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      screens: {
        mobile: "479px",
        "tablet-sm": "767px",
        "tablet-lg": "991px",
      },
    },
  },
  plugins: [],
};
