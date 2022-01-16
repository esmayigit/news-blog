module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    fontFamily: {
      sans: ["'Playfair Display'", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#00bcd4",
      },
      fontSize: {
        base: ["16px", "21px"],
      },
      screens: {
        xs: "375px",
        s: "425px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
