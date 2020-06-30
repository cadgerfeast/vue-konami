module.exports = {
  dist: 'dist/docs',
  watch: [
    './src/**/*'
  ],
  static: [
    {
      src: './dist/vue-konami.umd.js'
    },
    {
      src: './.madoc/static'
    }
  ]
};
