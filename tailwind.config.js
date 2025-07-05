/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)'],
      },
      colors: {
        'brand': {
          50: '#fce1d7',
          100: '#f8c0af',
          200: '#f49d87',
          300: '#ef7762',
          400: '#4fbbb7',
          500: '#4fbbb7',
        },
        'brandDark': {
          50: '#fce1d7',
          100: '#f8c0af',
          200: '#f49d87',
          300: '#ef7762',
          400: '#282828',
          500: '#282828',
        },
        'appColor': {
          100: '#feead3',
          200: '#fdd5a5',
          300: '#fac075',
          400: '#f7a941',
          500: '#f39200',
        },
        'appText': {
          100: '#fcddd1',
          200: '#f7b8a3',
          300: '#f29076',
          400: '#ec654d',
          500: '#e6332a',
        },        
      },
  },
  plugins: [],
}
}