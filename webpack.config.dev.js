const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const distFileName = 'comparison-components';

module.exports = {
  entry: './demo/index.js',
  output: {
    path: path.join(__dirname, 'demo'),
    filename: `${distFileName}.js`,
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        presets: ['es2015', 'stage-2', 'react', 'react-hmre'],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!postcss-loader!less-loader'
        ),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin(`${distFileName}.css`),
  ],
};
