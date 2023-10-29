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
        test: /\.svg/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css'
  })
}

// promo
new HtmlWebpackPlugin({
  hash: true,
  scriptLoading: 'blocking',
  template: './src/index.html',
  filename: './index.html',
  chunks: ['index']
}),
  // about
  new HtmlWebpackPlugin({
    hash: true,
    scriptLoading: 'blocking',
    template: './src/about.html',
    filename: './about.html',
    chunks: ['index']
  }),
  // artic
  new HtmlWebpackPlugin({
    hash: true,
    scriptLoading: 'blocking',
    template: './src/artic.html',
    filename: './artic.html',
    chunks: ['index']
  }),
  // gid
  new HtmlWebpackPlugin({
    hash: true,
    scriptLoading: 'blocking',
    template: './src/gid.html',
    filename: './gid.html',
    chunks: ['index']
  }),
  // kult
  new HtmlWebpackPlugin({
    hash: true,
    scriptLoading: 'blocking',
    template: './src/kult.html',
    filename: './kult.html',
    chunks: ['index']
  }),
  // philosophy
  new HtmlWebpackPlugin({
    hash: true,
    scriptLoading: 'blocking',
    template: './src/philosophy.html',
    filename: './philosophy.html',
    chunks: ['index']
  })

// First
new HtmlWebpackPlugin({
  hash: true,
  scriptLoading: 'blocking',
  template: './src/artic/first.html',
  filename: './artic/first.html',
  chunks: ['index']
}),
  // First2
  new HtmlWebpackPlugin({
    hash: true,
    scriptLoading: 'blocking',
    template: './src/artic/first2.html',
    filename: './artic/first2.html',
    chunks: ['index']
  }),
  // First3
  new HtmlWebpackPlugin({
    hash: true,
    scriptLoading: 'blocking',
    template: './src/artic/first3.html',
    filename: './artic/first3.html',
    chunks: ['index']
  }),
  // eat
  new HtmlWebpackPlugin({
    hash: true,
    scriptLoading: 'blocking',
    template: './src/gid/eat.html',
    filename: './gid/eat.html',
    chunks: ['index']
  }),
  // fun
  new HtmlWebpackPlugin({
    hash: true,
    scriptLoading: 'blocking',
    template: './src/gid/fun.html',
    filename: './gid/fun.html',
    chunks: ['index']
  }),
  // bogem
  new HtmlWebpackPlugin({
    hash: true,
    scriptLoading: 'blocking',
    template: './src/gid/bogem.html',
    filename: './gid/bogem.html',
    chunks: ['index']
  }),
  // exhibition
  new HtmlWebpackPlugin({
    hash: true,
    scriptLoading: 'blocking',
    template: './src/kult/exhibition.html',
    filename: './kult/exhibition.html',
    chunks: ['index']
  }),
  // bea
  new HtmlWebpackPlugin({
    hash: true,
    scriptLoading: 'blocking',
    template: './src/kult/bea.html',
    filename: './kult/bea.html',
    chunks: ['index']
  }),
  // see
  new HtmlWebpackPlugin({
    hash: true,
    scriptLoading: 'blocking',
    template: './src/kult/see.html',
    filename: './kult/see.html',
    chunks: ['index']
  }),
  // trev
  new HtmlWebpackPlugin({
    hash: true,
    scriptLoading: 'blocking',
    template: './src/kult/trev.html',
    filename: './kult/trev.html',
    chunks: ['index']
  }),
  // vdoh
  new HtmlWebpackPlugin({
    hash: true,
    scriptLoading: 'blocking',
    template: './src/kult/vdoh.html',
    filename: './kult/vdoh.html',
    chunks: ['index']
  }),
  // work
  new HtmlWebpackPlugin({
    hash: true,
    scriptLoading: 'blocking',
    template: './src/philosoohy/work.html',
    filename: './philosoohy/work.html',
    chunks: ['index']
  }),
  // inspo
  new HtmlWebpackPlugin({
    hash: true,
    scriptLoading: 'blocking',
    template: './src/philosoohy/inspo.html',
    filename: './philosoohy/inspo.html',
    chunks: ['index']
  }),
  // self
  new HtmlWebpackPlugin({
    hash: true,
    scriptLoading: 'blocking',
    template: './src/philosoohy/self.html',
    filename: './philosoohy/self.html',
    chunks: ['index']
  })

optimization: {
  minimizer: [new CssMinimizerPlugin()]
}
