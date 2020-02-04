const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniSccExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config ={
    splitChunks: {
      chunks: 'all'
    }
  };

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config;
};


module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.js',
    analytics: './analytics.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: optimization(),
  resolve: {
    extensions: ['.js', '.png'],
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@': path.resolve(__dirname, 'src'),
    }
  },
  devServer: {
    port: 4200,
    hmr: isDev
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'public/favicon.ico'),
        to: path.resolve(__dirname, 'dist')
      }
    ]),
    new MiniSccExtractPlugin({
      filename: '[name].[contenthash].css',
      hmr: isDev
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniSccExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniSccExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true
            }
          },
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.(xml)$/,
        use: ['xml-loader']
      },
      {
        test: /\.(csv)$/,
        use: ['csv-loader']
      }
    ]
  }
}
