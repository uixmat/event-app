/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        mona: ['Mona-Sans', 'sans-serif'],
        'mona-bold': ['Mona-Sans-Bold', 'sans-serif']
      }
    }
  },
  plugins: []
}
