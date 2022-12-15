const merge = require('webpack-merge');
const base = require('./webpack.config.base');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = merge(base, {
  mode: 'production',
  entry: './src/umd.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'vue-konami.umd.js',
    libraryTarget: 'umd'
  },
  plugins: [
    new FileManagerPlugin({
      events: {
        onEnd: {
          copy: [
            { source: path.resolve(__dirname, '../dist/vue-konami.umd.js'), destination: path.resolve(__dirname, '../public/assets/vue-konami.umd.js') }
          ]
        }
      }
    })
  ]
});
