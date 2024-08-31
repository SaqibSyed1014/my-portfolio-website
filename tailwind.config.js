/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-grey': '#f9f9f9',
        'soft-black': '#222',
        'inverted-soft-black': '#d6d6d6'
      }
    },
  },
  plugins: [],
}

