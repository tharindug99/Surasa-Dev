/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './components/**/*.{html,js,jsx}',
    './pages/**/*.{html,js,jsx}',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        NavBarBG: '#f3f3f3',
        SurasaYellow:'#F0C903',
        SurasaBrown: '#291603'
      },
      fontSize: {
        'body-lg': '3rem',
        'body': '.875rem',
      }
    },
  },
  plugins: [],
}

