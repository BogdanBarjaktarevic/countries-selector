/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
    },
    colors: {
      darkBlueElements: "hsl(209, 23%, 22%)",
      darkBlueBackground: "hsl(207, 26%, 17%)",
      darkBlueText: "hsl(200, 15%, 8%)",
      darkGray: "hsl(0, 0%, 52%)",
      lightGray: "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {},
  },
  plugins: [],
};

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
