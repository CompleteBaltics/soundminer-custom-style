let colors = {
  black: '#131313',
  red: '#ff3700',
  lipstick: '#dd143c',
  white: '#fff',
  grey: '#676767',
  transparent: 'transparent',
  pink: '#e86680'
}

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors,
      spacing: {
        '1px': '1px',
        '2px': '2px',
        '18': '4.5rem',
        '36': '9rem',
        '38': '9.5rem',
        '78': '19.5rem'
      },
      inset: {
        '3': '0.75rem',
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '16': '4rem',
        '24': '6rem',
        '1/2': '50%'
      },
      fontFamily: {
        'primary': 'Akzidenz-Grotesk, sans-serif',
        'secondary': 'Lubalin Graph, sans-serif'
      },
      opacity: {
        '35': '0.35'
      },
      borderColor: colors
    },
  },
  variants: {},
  plugins: [],
}
