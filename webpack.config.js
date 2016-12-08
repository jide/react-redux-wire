const webpack = require('webpack');
const path = require('path');
const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development' || 'false')),
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')
  }
});
const dedupePlugin = new webpack.optimize.DedupePlugin();

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: './dist',
    library: 'react-redux-wire',
    libraryTarget: 'umd'
  },
  plugins: [
    definePlugin,
    dedupePlugin
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: {
    react: 'umd react',
    'react-dom': 'umd react-dom',
    'react/lib/ReactElement': 'umd react/lib/ReactElement',
    'react-dom/lib/ReactInstanceMap': 'umd react-dom/lib/ReactInstanceMap',
    'react-dom/lib/ReactUpdates': 'umd react-dom/lib/ReactUpdates',
    'redux': 'umd redux',
    'react-redux': 'umd react-redux'
  }
};
