/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        divAnimation: 'divAnimation 2s ease',
        imgAnimation: 'imgAnimation 2s ease'
      },
      keyframes: {
        divAnimation: {
          '0%': {transform: 'translateY(-800px)'},
          '100%': {transform: 'translateY(0)'}
        },
        imgAnimation: {
          '0%': {transform: 'translateX(1000px)'},
          '100%': {transform: 'translateX(0)'}
        }
      }
    },
  },
  plugins: [],
}

