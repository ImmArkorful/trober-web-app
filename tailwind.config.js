/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#0F1A37',
      white: '#FFF',
      icongrey: '#8890A1',
    },
    extend: {},
  },
  plugins: [],
};
