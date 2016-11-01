const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const distFileName = 'comparison-components';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `${distFileName}.js`,
    library: 'comparison-components',
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
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
  externals: [
    {
      react: 'commonjs react',
    },
  ],
  plugins: [
    new ExtractTextPlugin(`${distFileName}.css`),
  ],
};
