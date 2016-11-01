/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');

module.exports = {

  //output：webpack出口
  output: {
    filename: 'main.js',
    publicPath: '/assets/'
  },
//开启webpack增量编译
  cache: true,
  debug: true,
  //在output对应文件时，生成sourcemap，方便我们在浏览器的devtool中调试
  devtool: 'sourcemap',
  //entry：webpack入口
  entry: [
      //加载的是node moudle文件夹下的文件
      'webpack/hot/only-dev-server',
      './src/components/ReactTestApp.js'
  ],
//执行输出相关的选项
  stats: {
    colors: true,
    reasons: true
  },

  //resolve：模块解析配置项
  resolve: {
    extensions: ['', '.js', '.jsx'],
    //alias：为module解析路径或者名字，指定一个简称
    //它可以将require('.../src/style/main.scss')简写成 require('style/main.scss')
    alias: {
      'styles': __dirname + '/src/styles',
      'mixins': __dirname + '/src/mixins',
      'components': __dirname + '/src/components/'
    }
  },
  //loaders：使图片等文件可以直接require
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      //这里的loader从右往左依次执行
      loader: 'react-hot!babel-loader'
    }, {
      test: /\.scss/,
      loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version"]}!sass-loader?outputStyle=expanded'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version"]}'
    },{
      test: /\.json$/,
        loader:'json-loader'
    },{
      test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=8192'
    }]
  },

  //webpack插件
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]

};
