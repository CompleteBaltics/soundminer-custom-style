module.exports = {
  plugins: [
    require('postcss-import')(),
    require('tailwindcss')('webpack/tailwind.config.js'),
    require('autoprefixer'),
    require('postcss-preset-env')({
      browsers: 'last 2 versions',
      autoprefixer: { grid: true },
      features: {
          'nesting-rules': true
      }
    }),
    require('cssnano')
  ],
};