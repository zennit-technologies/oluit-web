module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarygray: "#f8f8f8",
        qblack: "#292929",
        qyellow: "#119744",
        qyellowlow: "#2D6F6D",
        qred: "#EF262C",
        qgray: "#797979",
        qblacktext: "#292929",
        qgraytwo: "#8E8E8E",
        "qgray-border": "#EFEFEF",
        "qblue-white": "#CBECFF",
        "qh2-green": "#2D6F6D",
      },
      scale: {
        60: "0.6",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["focus-within"],
      borderColor: ["last"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
