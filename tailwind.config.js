module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#2b2d42',
      'secondary': '#edf2f4',
      'tertiary': '#8d99ae',
      'fourth':'#d90429',
      'fifth':'#ef233c'
     }),
     fontFamily:{
      space: ['Audiowide'],
      pixelated: ['VT323'],
      neon:['Tourney'],
    },
    textColor:{
      'primary': '#2b2d42',
      'secondary': '#edf2f4',
      'tertiary': '#8d99ae',
      'fourth':'#d90429',
      'fifth':'#ef233c'
    },
    textShadow: {
      'neon':'2px 2px rgba(0,0,0,0.9)'
   }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
