/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F5F3FF",
          100: "#f3effe",
          200: "#ae8df9",
          300: "#a27df8",
          400: "#976cf7",
          500: "#8b5cf6",
          600: "#7d53dd",
          700: "#6f4ac5",
          800: "#6140ac",
          900: "#533794",
          950: "#2a1c4a",
        },
      },
      // transitionProperty: {
      //   height: "height",
      //   width: "width",
      //   spacing: "margin, padding",
      // },
    },
  },
  plugins: [],
};
