/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        Awhite: '#FFFFFF',
        Adark: '#1C1C1C',
        Aprimary: '#0D6EFD',
        Alogo: '#0D6EFD',
        Abrand: '#8CB7F5',
        Agreen: '#00B517',
        Aorange: '#FF9017',
        Ared: '#FA3434',
        Agray: {
          100: '#F7FAFC',
          200: '#EFF2F4',
          300: '#DEE2E7',
          400: '#BDC4CD',
          500: '#8B96A5',
          600: '#505050',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}
