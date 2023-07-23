/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'LexendDeca': ['Lexend Deca', 'cursive'],
      },
      screens: {
        'sm': '320px',
        'md': '568px',
        // Add more breakpoints here if needed
      },
    },
  },
  plugins: [],
};
