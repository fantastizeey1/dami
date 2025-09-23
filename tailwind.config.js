/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "sans-serif"], // default body + headings
      },
      colors: {
        brand: {
          primary: "#FF6F61",   // Peachy Coral
          secondary: "#FFD166", // Golden Yellow
          accent: "#06B6D4",    // Teal
          hover: "#CDB4DB",     // Soft Lilac
          neutral: "#F5F5DC",   // Sand
          text: "#36454F",      // Charcoal Gray
        },
      },
      screens: {
        xs: "350px",
        sm: "430px",
        md: "768px",
        lg: "1024px",
        xl: "1256px",
        "2xl": "1440px",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.brand.text"),
            fontFamily: theme("fontFamily.sans").join(","),
            h1: {
              fontWeight: "700",
              letterSpacing: "-0.02em",
              color: theme("colors.brand.text"),
            },
            h2: {
              fontWeight: "600",
              letterSpacing: "-0.01em",
              color: theme("colors.brand.text"),
            },
            h3: {
              fontWeight: "600",
              letterSpacing: "0",
              color: theme("colors.brand.text"),
            },
            p: {
              fontWeight: "400",
              lineHeight: "1.6",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
