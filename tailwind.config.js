module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue: { 50: "#e8f6fd", 500: "#1aa7ec", "500_1e": "#1aa7ec1e" },
        gray: { 100: "#f3f4f4", 700: "#5f6368" },
        blue_gray: { 100: "#ced1d4", 200: "#9dc0d1", 400: "#888e95" },
        black: { 900: "#000000" },
        cyan: { 900: "#0b4765" },
        white: { A700: "#ffffff" },
        light_blue: { 900: "#106690" },
      },
      fontFamily: { sourcesanspro: "Source Sans Pro" },
      boxShadow: { bs: "0px 20px  36px 0px #1aa7ec1e" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
