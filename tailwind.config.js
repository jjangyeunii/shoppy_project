/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#9575cd",
      },
      backgroundImage: {
        banner: `url(../public/images/banner.jpg)`,
        redirectHome: `url(../public/images/payResultBanner.jpg)`,
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
