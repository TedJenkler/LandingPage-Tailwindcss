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
        'btn-bg-effect' : '#FF9ADB',
        'btn-text-effect' : '#808E9A',
    },
    backgroundImage: {
      'hero-patternm': "url('./images/Path 3.png')",
      'hero-patternd': "url('./images/Path 3Desktop.png')",
    },
    },
  },
  plugins: [],
}

