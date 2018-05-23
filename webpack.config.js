var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var chalk = require('chalk');

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
      path: './',
      filename: 'lib/index.js',
      libraryTarget: "umd"
    },
    plugins: [
      new ProgressBarPlugin({
          format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
        clear: false
      })
    ],
    externals: [
      {
        'react': {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react'
        }
      },
      {
        'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom'
        }
      }
    ],
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: 'style!css',
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
            cacheDirectory: true,
            presets: ['es2015', 'react', 'stage-0']
          }
        },
        {
          test: /\.json$/,
          loader: 'json',
          exclude: /node_modules/
        },
        {
          test: /\.(woff|ttf|eot|svg)(\?[a-z0-9]+)?$/,
          loader: 'url?limit=100000',
          exclude: /node_modules/
        }
      ]
    }
}
