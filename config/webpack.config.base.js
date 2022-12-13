const path = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = require('../package.json');

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new ESLintPlugin(),
    new webpack.DefinePlugin({
      'VERSION': JSON.stringify(config.version)
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
};
