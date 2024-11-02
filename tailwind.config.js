/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        surface: '#282828',
        primary: '#1DB954',
        secondary: '#B3B3B3',
        accent: '#1ED760'
      }
    },
  },
  plugins: [],
};