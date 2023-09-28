/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dropdownin: {
          '0%': { marginTop: '-2.5%', opacity: 0 },
          '100%': { marginTop: '0%', opacity: 1 }
        },
      },
      fontFamily: {
        valorant: ['Valorant', 'mono'],
      },
      colors: {
        valorantred: "#ff4655",
        valorantblack: "#111111"
      }
    },
    animation: {
      dropdownin: 'dropdownin 0.25s',
    }
  },
  plugins: [],
}