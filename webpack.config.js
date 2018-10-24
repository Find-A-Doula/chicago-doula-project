const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  devtool: 'cheap-eval-source-map',
  output: {
    // path: path.resolve("public/assets"),
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: 'assets'
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: './public',
    port: 3000,
    // proxy: {
    //   "/api/**": "http://localhost:8080"
    // }
    proxy: { 
      '/api/**': { 
        target: 'http://localhost:8080/', 
        pathRewrite: { '^/api': '' }, 
        secure: false, 
        logLevel: 'debug' 
      }
    }
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new OpenBrowserPlugin({url: 'http://localhost:3000'})
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  }
};
