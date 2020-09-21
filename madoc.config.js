const pkg = require('./package.json');

module.exports = {
  title: 'Vue Konami',
  description: pkg.description,
  distPath: '.docs',
  components: [
    require('@madoc/component-repl')
  ],
  // TODO watch folders
  assets: [
    { src: 'dist/vue-konami.umd.js' },
    { src: 'assets' }
  ]
};
