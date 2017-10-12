'use strict'

const Path = require('path')
const Webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ExtractSASS = new ExtractTextPlugin('bundle-[hash].css')

module.exports = (options) => {
  const dest = Path.join(__dirname, 'docs')

  let webpackConfig = {
    devtool: options.devtool,
    entry: [
      './src/index'
    ],
    output: {
      path: dest,
      filename: 'bundle-[hash].js'
    },
    plugins: [
      new Webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(options.isProduction ? 'production' : 'development')
        }
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new BundleTracker({filename: './webpack-stats.json'}),
      new Webpack.ProvidePlugin({
        riot: 'riot'
      })
    ],
    module: {
      rules: [{
        test: /\.tag$/,
        enforce: 'pre',
        exclude: /(node_modules|bower_components)/,
        include: /src/,
        use: {
          loader: 'riotjs-loader',
          options: {
            type: 'none'
          }
        }
      }, {
        test: /\.js$|\.tag$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }]
    }
    }

  if (options.isProduction) {
    webpackConfig.entry = ['./src/index']

    webpackConfig.plugins.push(
      new Webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }),
      ExtractSASS
    )

    webpackConfig.module.rules.push({
      test: /\.scss$/i,
      use: ExtractSASS.extract([{
       loader: 'css-loader',
       options: {
        minimize: true
       }
      }, 'sass-loader'])
    })

  } else {
    webpackConfig.plugins.push(
      new Webpack.HotModuleReplacementPlugin()
    )

    webpackConfig.module.rules.push({
      test: /\.scss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.js$/,
      use: {
        loader: 'eslint-loader',
        options: {
          rules: {
            semi: 0
          }
        }
      },
      exclude: /node_modules/
    })

    webpackConfig.devServer = {
      contentBase: dest,
      hot: true,
      port: options.port,
      inline: true
    }
  }

  return webpackConfig

}
