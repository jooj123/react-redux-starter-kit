var path = require('path');
var express = require('express');
// var webpack = require('webpack');
// var webpackConfig = require('../webpack.config');
import clean from './clean';
import copy from './copy';
import run from './run';



import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';


const DEBUG = true;


// Patch the client-side bundle configurations
// to enable Hot Module Replacement (HMR) and React Transform
// config.entry = ['webpack-hot-middleware/client'].concat(config.entry);
// config.plugins.push(new webpack.HotModuleReplacementPlugin());
// config.plugins.push(new webpack.NoErrorsPlugin());

// config
//   .module
//   .loaders
//   .filter(x => x.loader === 'babel-loader')
//   .forEach(x => (x.query = {
//     ...x.query,

//     // Wraps all React components into arbitrary transforms
//     // https://github.com/gaearon/babel-plugin-react-transform
//     plugins: [
//       ...(x.query ? x.query.plugins : []),
//       ['react-transform', {
//         transforms: [
//           {
//             transform: 'react-transform-hmr',
//             imports: ['react'],
//             locals: ['module'],
//           },
//           {
//             transform: 'react-transform-catch-errors',
//             imports: ['react', 'redbox-react'],
//           },
//         ],
//       },
//       ],
//     ],
//   }));





async function start() {
  await run(clean);
  await run(copy);

    await new Promise(resolve => {
      // Patch the client-side bundle configurations
      // to enable Hot Module Replacement (HMR) and React Transform
      webpackConfig.entry = ['webpack-hot-middleware/client'].concat(webpackConfig.entry);
      webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
      webpackConfig.plugins.push(new webpack.NoErrorsPlugin());

      webpackConfig
          .module
          .loaders
          .filter(x => x.loader === 'babel-loader')
          .forEach(x => (x.query = {
              ...x.query,

              // Wraps all React components into arbitrary transforms
              // https://github.com/gaearon/babel-plugin-react-transform
              plugins: [
                  ...(x.query ? x.query.plugins : []),
                  ['react-transform', {
                      transforms: [
                          {
                              transform: 'react-transform-hmr',
                              imports: ['react'],
                              locals: ['module'],
                          },
                          {
                              transform: 'react-transform-catch-errors',
                              imports: ['react', 'redbox-react'],
                          },
                      ],
                  },
                  ],
              ],
          }));

      console.log('Building ...');
      console.log('Public Path: ', webpackConfig.output.publicPath);

      const bundler = webpack(webpackConfig);
      const wpMiddleware = webpackDevMiddleware(bundler, {

        // IMPORTANT: webpack middleware can't access config,
        // so we should provide publicPath by ourselves
        publicPath: 'http://localhost:8080/build/',

        // Pretty colored output
        stats: webpackConfig.stats,

        // For other settings see
        // https://webpack.github.io/docs/webpack-dev-middleware
      });

      const hotMiddlewares = webpackHotMiddleware(bundler);

      let handleServerBundleComplete = () => {

          let app = express();
          app.use(wpMiddleware);
          app.use(hotMiddlewares);

          app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../build/index.html'));
          });

          app.listen(8080, function(err) {
            if (err) {
              console.log(err);
              return;
            }

            console.log('Listening at http://localhost:8080');

            resolve();
          });


          // const bs = browserSync.create();
          // bs.init({
          //     ...(DEBUG ? {} : { notify: false, ui: false }),

          //     server: {
          //         port: 8080,
          //         middleware: [wpMiddleware, hotMiddlewares],
          //     },

          //     // no need to watch '*.js' here, webpack will take care of it for us,
          //     // including full page reloads if HMR won't work
          //     files: ['build/dist/*.*'],
          // }, resolve);

          // browserSync({
          //     server: {
          //       baseDir: webpackConfig.output.publicPath,
          //       middleware: [wpMiddleware, hotMiddlewares],
          //     },

          //     // no need to watch '*.js' here, webpack will take care of it for us,
          //     // including full page reloads if HMR won't work
          //     files: [
          //       'app/dist/*.html',
          //     ]
          // });

      };

      console.log('Got here..');

      bundler.plugin('done', () => handleServerBundleComplete());
  });

  // console.log('Got here...');
  // var app = express();
  // var compiler = webpack(config);

  // app.use(require('webpack-dev-middleware')(compiler, {
  //   noInfo: true,
  //   publicPath: config.output.publicPath
  // }));

  // app.use(require('webpack-hot-middleware')(compiler));

  // app.get('*', function(req, res) {
  //   res.sendFile(path.join(__dirname, '../build/index.html'));
  // });

  // app.listen(3000, function(err) {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }

  //   console.log('Listening at http://localhost:3000');
  // });
}

export default start;