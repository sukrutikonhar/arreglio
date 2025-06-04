/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)"],
      },
      colors: {
        primary: {
          DEFAULT: "#2C3E50",
          light: "#34495E",
          dark: "#243342",
        },
        secondary: {
          DEFAULT: "#2ECC71",
          light: "#40D47E",
          dark: "#27AE60",
        },
        text: {
          body: "#707070",
          title: {
            light: "#2C3E50",
            dark: "#FFFFFF",
          },
        },
        background: {
          light: {
            primary: "#FFFFFF",
            secondary: "#E7E7E7",
          },
          dark: {
            primary: "#2C3E50",
            secondary: "#95A5A6",
          },
        },
      },
      boxShadow: {
        button: "0px 3px 6px #00000029",
      },
      borderRadius: {
        button: "8px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
