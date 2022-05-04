const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
     mode: "development",
     entry: {
         index: './src/index.js',
         app: './src/app.js',
         task: './src/task.js',
         list: './src/list.js',
         render: './src/renderUI.js',
     },
     plugins: [
         new HtmlWebpackPlugin({
             template: "./src/index.html",
             inject: 'body'
         }),
     ],
     output: {
         filename: '[name].bundle.js',
         path: path.resolve(__dirname, 'dist'),
         clean: true,
     },
     module: {
         rules: [
             {
                 test: /\.css$/i,
                 use: ['style-loader', 'css-loader'],
             },
         ],
     },
 };