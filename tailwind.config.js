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
      },
    },
    plugins: [],
  }