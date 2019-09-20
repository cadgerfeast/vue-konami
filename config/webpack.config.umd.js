const merge = require('webpack-merge')
const base = require('./webpack.config.base')
const path = require('path')

module.exports = merge(base, {
  mode: 'production',
  entry: './src/umd.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'vue-konami.umd.js',
    library: 'VueKonami',
    libraryTarget: 'umd'
  }
})
