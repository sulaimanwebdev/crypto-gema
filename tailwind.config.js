/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm9': '346px',
        'sm8': '421px',
        'sm7': '510px',
        'sm6': '386px',
        'sm5': '448px',
        'sm4': '586px',
        'sm3': '862px',
        'sm2': '838px',
        'lg3': '900px',
        'lg2': '1139px'
      }
    },
  },
  plugins: [],
}
