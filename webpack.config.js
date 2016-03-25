const path = require('path');

module.exports = {
  entry: {
    app: [path.resolve(__dirname, 'src/index.js')],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
    ],
  },
};



// import path from 'path';
// import webpack from 'webpack';

// module.exports = {
//   devtool: 'cheap-module-eval-source-map',
//   entry: [
//     // listen to code updates emitted by hot middleware:
//     'webpack-hot-middleware/client',
//     path.join(__dirname, 'src/index.js'),
//   ],
//   output: {
//     path: path.join(__dirname, 'build'),
//     filename: 'bundle.js',
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoErrorsPlugin(),
//   ],
//   module: {
//     loaders: [{
//       test: /\.js$/,
//       loaders: ['babel'],
//       include: path.join(__dirname, 'src'),
//     }],
//   },
// };
