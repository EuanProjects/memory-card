/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        valorantred: "#ff4655",
        valorantblack: "#111111"
      }
    },
  },
  plugins: [],
}