const merge = require('webpack-merge')
const base = require('./webpack.config.base')
const path = require('path')

module.exports = merge(base, {
  mode: 'production',
  entry: './src/cjs.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'vue-konami.cjs.js',
    library: 'VueKonami',
    libraryTarget: 'commonjs'
  }
})
