/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#02a202",
        secondary: "#dd0051",
        tertiary: "#818181",
      },
    },
  },
  plugins: [],
};
