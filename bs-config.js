module.exports = {
  proxy: '127.0.0.1:8000',
  files: [
    'templates/**/*.php',
    'templates/assets/**/*',
    'templates/build/**/*.{css,js}',
  ],
}
