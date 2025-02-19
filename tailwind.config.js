/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens: {
          'iphone14': {'min': '390px', 'max': '430px'}, 
        },
        colors: {
          'dodger-blue': '#0496FF',
        },
        boxShadow: {
          'inner-xl': 'inset 0 4px 20px 0 rgba(0, 0, 0, 0.1)',
        },
      },
    },
    plugins: [],
  }