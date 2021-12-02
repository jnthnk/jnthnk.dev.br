const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: false,
  theme: {
    screens: {
      xs: '400px',
      sm: '600px',
      md: '800px',
      lg: '1000px',
      xl: '1200px',
      '2xl': '1400px'
    },
    colors: {
      primary: colors.red,
      secondary: colors.fuchsia,
      gray: colors.gray,
      white: colors.white,
      black: colors.black
    },
    extend: {
      fontFamily: {
        dm: ["'DM Mono', monospace"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
