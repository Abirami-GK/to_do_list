/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html', 
  ],
  theme: {
    extend: {
      colors: {
        'peach': '#FFB0B0',
        'beige': '#FFECC8'
      },
    },
  },
  plugins: [],
};
