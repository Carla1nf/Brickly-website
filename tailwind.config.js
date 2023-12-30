/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      
  },
  keyframes: {
    "entrance-div": {
      from: {"scale": "0.8", "opacity": "0"},
      to: {"scale": "1", "opacity": "1"}
    },
    // translate x - 100 to 0
    "entrance-token": {
      from: {"transform": "translateX(-60%)", "opacity": "0"},
      to: {"transform": "translateX(0)", "opacity": "1"}
    },
    "rotate-180": {
      from: { transform: "rotate(0deg)" },
      to: { transform: "rotate(180deg)" },
    },
    "bounce-1": {
      "0%, 100%": { transform: "translateY(0%)" },
      "50%": { transform: "translateY(-15%)" },
    }
    
  },
  animation: { 
    "enter-token": "entrance-token 0.5s",
    "enter-div": "entrance-div 0.3s ease-out",
    "spin-slow": "spin 2.2s linear infinite",
    "rotate-180-cw": "rotate-180 0.08s linear",
    "bounce-1": "bounce-1 3s linear infinite",
    
  },
  }},
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/container-queries")],
}

