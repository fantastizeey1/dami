/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-up": "slideUp 15s linear infinite",
        "slide-down": "slideDown 15s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      colors: {
        "brand-maroon": "#800020",
        brand: {
          maroon: "#850000",
          black: "#000000",
          gray: "#4A4A4A",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
