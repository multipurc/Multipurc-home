/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors:{
        primary:'#1b434d'
      },
      fontFamily:{
        'display': ['poppins', 'sans-serif'],
        'body': ['inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

