/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2F5C6D",
        secondary: "#A44D24",
        tertiary: "#713616",
      },
    },
  },
  plugins: [],
}