/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#9575cd",
      },
      backgroundImage: {
        banner: `url(../public/images/banner.jpg)`,
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
