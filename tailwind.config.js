/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-Primary': '#4A72FF',
        'custom-SemiBlack': '#172048',
      },
    },
  },
  plugins: [],
}

