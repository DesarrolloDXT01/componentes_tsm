/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#14355B',
        primaryHover: '#0F2844',
        secondary: '#FF7D26',
        secondaryHover: '#DC5A03',
      },
    },
  },
  plugins: [],
}

