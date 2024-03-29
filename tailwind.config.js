/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brickly50: "#fff4f1",
        brickly100: "#ffe7e1",
        brickly200: "#ffd2c7",
        brickly400: "#FF977D",
        brickly500: "#f8613b",
        brickly600: "#e5451d",
        brickly700: "#c13714",
      },
      keyframes: {
        "entrance-div": {
          from: { scale: "0.8", opacity: "0" },
          to: { scale: "1", opacity: "1" },
        },
        // translate x - 100 to 0
        "entrance-token": {
          from: { transform: "translateX(-60%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "rotate-180": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(180deg)" },
        },
        "bounce-1": {
          "0%, 100%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(-15%)" },
        },
        "enter-rowData": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
        "opacity-0": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "enter-token": "entrance-token 0.5s",
        "enter-div": "entrance-div 0.3s ease-out",
        "spin-slow": "spin 2.2s linear infinite",
        "rotate-180-cw": "rotate-180 0.08s linear",
        "bounce-1": "bounce-1 3s linear infinite",
        "row-data": "enter-rowData 0.2s linear",
        "opacity-1": "opacity-0 0.3s linear",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
  ],
};
