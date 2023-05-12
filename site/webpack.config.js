const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
mode: process.env.NODE_ENV,
// devtool: isProduction ? 'none' : 'inline-source-map',
entry: path.resolve(__dirname, 'src/js/main.js'),
  output: {
    // filename: '[name].js[hash]',
    filename: 'my-first-webpack.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
    module:{
      rules:[
        {
            test: /\.scss$/,
            use:   [
              MiniCssExtractPlugin.loader, 
              'css-loader', 
              'sass-loader'
            ]
        },
        {
            test: /\.(svg|png|jpg|jpeg|gif)$/, 
            type: 'asset/resource', 
        },
        {
            test: /\.html$/,
            use: ["html-loader"]
        },
        {
          test: /\.(js)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader'
        }
      ]
    },
    externals: {
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    },

    plugins: [
        // new webpack.ProvidePlugin({
        // $: "jquery/dist/jquery.min.js",
        // jQuery: "jquery/dist/jquery.min.js",
        // "window.jQuery": "jquery/dist/jquery.min.js"
        // }),
        new HtmlWebpackPlugin({
        template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "[name].[contentHash].css"})
    ]
  
};