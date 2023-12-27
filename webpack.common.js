const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.png/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(jpe?g|svg|gif|ico|eot|ttf|woff2?)(\?v=\d+\.\d+\.\d+)?$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // promo
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    // about
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html'
    }),
    // artic
    new HtmlWebpackPlugin({
      template: './src/artic.html',
      filename: './artic.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/article.html',
      filename: './article.html'
    }),
    // gid
    new HtmlWebpackPlugin({
      template: './src/gid.html',
      filename: './gid.html'
    }),
    // kult
    new HtmlWebpackPlugin({
      template: './src/kult.html',
      filename: './kult.html'
    }),
    // philosophy
    new HtmlWebpackPlugin({
      template: './src/philosophy.html',
      filename: './philosophy.html'
    }),

    // First
    new HtmlWebpackPlugin({
      template: './src/artic/first.html',
      filename: './artic/first.html'
    }),
    // First1
    new HtmlWebpackPlugin({
      template: './src/artic/first1.html',
      filename: './artic/first1.html'
    }),
    // First2
    new HtmlWebpackPlugin({
      template: './src/artic/first2.html',
      filename: './artic/first2.html'
    }),
    // eat
    new HtmlWebpackPlugin({
      template: './src/gid/eat.html',
      filename: './gid/eat.html'
    }),
    // fun
    new HtmlWebpackPlugin({
      template: './src/gid/fun.html',
      filename: './gid/fun.html'
    }),
    // bogem
    new HtmlWebpackPlugin({
      template: './src/gid/bogem.html',
      filename: './gid/bogem.html'
    }),
    // exhibition
    new HtmlWebpackPlugin({
      template: './src/kult/exhibition.html',
      filename: './kult/exhibition.html'
    }),
    // bea
    new HtmlWebpackPlugin({
      template: './src/kult/bea.html',
      filename: './kult/bea.html'
    }),
    // see
    new HtmlWebpackPlugin({
      template: './src/kult/see.html',
      filename: './kult/see.html'
    }),
    // trev
    new HtmlWebpackPlugin({
      template: './src/kult/trev.html',
      filename: './kult/trev.html'
    }),
    // vdoh
    new HtmlWebpackPlugin({
      template: './src/kult/vdoh.html',
      filename: './kult/vdoh.html'
    }),
    // work
    new HtmlWebpackPlugin({
      template: './src/philosophy/work.html',
      filename: './philosophy/work.html'
    }),
    // inspo
    new HtmlWebpackPlugin({
      template: './src/philosophy/inspo.html',
      filename: './philosophy/inspo.html'
    }),
    // self
    new HtmlWebpackPlugin({
      template: './src/philosophy/self.html',
      filename: './philosophy/self.html'
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    portableRecords: true,
  }
}
