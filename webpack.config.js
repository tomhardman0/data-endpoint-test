const path = require('path');
const webpack = require('webpack');
const environment = process.env.NODE_ENV || 'development';

const plugins = {
  development: [],
  production: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};

module.exports = [{
    entry: ['babel-polyfill', './src/index.jsx'],
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'index.js'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },
    plugins: plugins[environment],
    watch: environment === 'development'
}];
