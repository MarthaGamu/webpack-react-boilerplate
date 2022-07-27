const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    clean: true,
    filename: '[name].[contenthash].js',
    sourceMapFilename: '[name].js.map',
  },
  target: 'web',
  devServer: {
    // contentBase: path.resolve(__dirname, './dist'),
    hot: true,
    historyApiFallback: true,
    port: '3000',
    static: [path.resolve(__dirname, './dist')],
    liveReload: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.js?$/,
        exclude: /node_modules(?!(\/|\\)buble)/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
    }),
/*     new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(process.cwd(), './node_modules/@vfuk/core-theme-ws10/assets/fonts'),
          to: 'dist/assets/ws10/fonts',
        },
        {
          from: path.resolve(process.cwd(), './node_modules/@vfuk/core-theme-ws10/assets/logos'),
          to: 'dist/assets/ws10/logos',
        },
        {
          from: path.resolve(process.cwd(), './node_modules/@vfuk/core-theme-ws10/assets/animations'),
          to: 'dist/assets/ws10/animations',
        },
        {
          from: path.resolve(process.cwd(), './node_modules/@vfuk/source-system-icons/dist/assets'),
          to: 'dist/assets/icons/SourceSystemIcons',
        },
      ],
    }), */
  ],
}
