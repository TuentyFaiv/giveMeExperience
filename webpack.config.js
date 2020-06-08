const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  devtool: dev ? 'cheap-source-map' : 'hidden-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: dev ? 'js/[name].js' : 'js/[name].[hash].js',
    publicPath: '/',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  devServer: {
    port: 3000,
    publicPath: '/',
    hot: true,
    historyApiFallback: true,
    stats: { colors: true }
  },
  optimization: {
    minimize: !dev,
    minimizer: dev ? [] : [new TerserWebpackPlugin({}), new OptimizeCSSAssetsPlugin({})],
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
        enforce: 'pre',
        use: {
          loader: 'eslint-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(sc|c)ss$/,
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
    dev ? new webpack.HotModuleReplacementPlugin() : () => {},
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    }),
    new MiniCSSExtractPlugin({
      filename: dev ? 'css/main.css' : 'css/main.[hash].css'
    })
  ]
}