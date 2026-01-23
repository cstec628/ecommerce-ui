/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          50: "rgb(var(--main-50) / <alpha-value>)",
          100: "rgb(var(--main-100) / <alpha-value>)",
          200: "rgb(var(--main-200) / <alpha-value>)",
          300: "rgb(var(--main-300) / <alpha-value>)",
          400: "rgb(var(--main-400) / <alpha-value>)",
          500: "rgb(var(--main-500) / <alpha-value>)",
          600: "rgb(var(--main-600) / <alpha-value>)",
          700: "rgb(var(--main-700) / <alpha-value>)",
          800: "rgb(var(--main-800) / <alpha-value>)",
          900: "rgb(var(--main-900) / <alpha-value>)",
          950: "rgb(var(--main-950) / <alpha-value>)",
        },
        main2: {
          50: "rgb(var(--main2-50) / <alpha-value>)",
          100: "rgb(var(--main2-100) / <alpha-value>)",
          200: "rgb(var(--main2-200) / <alpha-value>)",
          300: "rgb(var(--main2-300) / <alpha-value>)",
          400: "rgb(var(--main2-400) / <alpha-value>)",
          500: "rgb(var(--main2-500) / <alpha-value>)",
          600: "rgb(var(--main2-600) / <alpha-value>)",
          700: "rgb(var(--main2-700) / <alpha-value>)",
          800: "rgb(var(--main2-800) / <alpha-value>)",
          900: "rgb(var(--main2-900) / <alpha-value>)",
          950: "rgb(var(--main2-950) / <alpha-value>)",
        },
      },

      fontSize: {
        h1: ["48px", "64px"],
        h2: ["40px", "48px"],
        h3: ["32px", "40px"],
        h4: ["24px", "32px"],
        h5: ["20px", "26px"],
        body: ["16px", "20px"],
        bodySm: ["14px", "18px"],
        caption: ["12px", "16px"],
      },
      fontFamily: {
        sans: ["var(--font-wix)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
