let colors = {
  black: '#131313',
  red: '#ff3700',
  white: '#fff',
  grey: '#676767',
  transparent: 'transparent'
}

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors,
      inset: {
        '4': '1rem',
        '8': '2rem',
        '16': '4rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
