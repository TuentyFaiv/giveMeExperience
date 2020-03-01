const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: dev ? 'js/[name].js' : 'js/[name].[hash].js',
    publicPath: '/'
  },
  devServer: {
    port: 3000,
    publicPath: '/',
    hot: true,
    historyApiFallback: true,
    stats: { colors: true }
  },
  optimization: {
    minimizer: dev ? [] : [new TerserWebpackPlugin()],
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: dev ? 'js/vendor.js' : 'js/vendor.[hash].js',
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return chunks.some(
              chunks =>
                chunks.name !== 'vendor' && /[\\/]node_modules[\\/]/.test(name)
            );
          }
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
            options: {
              hmr: dev
            }
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            filename: dev ? 'assets/images/[name].[ext]' : 'assets/images/[hash].[ext]'
          }
        }
      },
      {
        test: /\.ttf$/,
        use: {
          loader: 'url-loader',
          options: {
            filename: dev ? 'assets/fonts/[name].[ext]' : 'assets/fonts/[hash].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    }),
    new MiniCSSExtractPlugin({
      filename: dev ? 'css/main.css' : 'css/main.[hash].css'
    })
  ]
}