
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Purple: '#5F00D9',
        yellow: '#FFEAAE',
        White: "#FFFFFF",
        black: '#000000',
        orange: '#F6820C',
        grey: 'grey',
      },
      fontFamily:'Inter'
    },
  },
  plugins: [],
}