import HomePage from './src/pages/HomePage'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: '#a6a6a6',
        color2: '#595959',
      },
    },
  },
  plugins: [],
}