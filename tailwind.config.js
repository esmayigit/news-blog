module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    fontFamily: {
      sans: ["'Playfair Display'", "sans-serif"],
    },
    extend: {
      keyfranes: {
        loading: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        loading: "loading 1 s ease-in-out inifinite",
      },
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
