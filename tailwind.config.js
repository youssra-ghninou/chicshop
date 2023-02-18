const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      dark: '#1C1C1C',
      primary: '#0D6EFD',
      green: '#00B517',
      orange: '#FF9017',
      red: '#FA3434',
      gray: {
        100: '#F7FAFC',
        200: '#EFF2F4',
        300: '#DEE2E7',
        400: '#BDC4CD',
        500: '#8B96A5',
        600: '#505050',
      },
    },
    fontFamily: {
      sans: ['var(--font-inter)', ...fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
}
