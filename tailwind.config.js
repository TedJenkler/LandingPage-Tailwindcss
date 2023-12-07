/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-bg': '#EDFBFF',
        'btn-bg' : '#FF52C1',
        'footer-bg' : '#00252E',
    },
    backgroundImage: {
      'hero-pattern1m': "url('./images/Path 3.png')",
    },
    },
  },
  plugins: [],
}

