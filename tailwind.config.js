/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-up": "slideUp 15s linear infinite",
        "slide-down": "slideDown 15s linear infinite",
      },
      colors: {
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
  plugins: [],
};
