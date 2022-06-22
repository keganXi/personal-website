/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-purple": "#533E62",
        "secondary-black": "#282828"
      },

      fontSize: {
        "xxl": "80px",
      },
    },
  },
  plugins: [],
}
