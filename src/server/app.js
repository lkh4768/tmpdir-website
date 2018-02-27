import express from 'express';
import path from 'path';

import manifest from '../../build/manifest.json';
import devConfig from './config/Config.dev';
import prdConfig from './config/Config.prd';

import render from './modules/render/Render';

const app = express();
let Config;

if (process.env.NODE_ENV !== 'prd') {
  const webpack = require('webpack');
  const webpackServerConfig = require('../../webpack.config.server');
  const webpackDevConfig = require('../../webpack.config.dev');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const multiCompiler = webpack([
    webpackServerConfig,
    webpackDevConfig,
  ]);

  app.use(webpackDevMiddleware(multiCompiler, {
    noInfo: true,
    publicPath: webpackDevConfig.output.publicPath,
    serverSideRender: true,
  }));
  app.use(webpackHotMiddleware(multiCompiler.compilers.find(compiler => compiler.name === 'client')));
  Config = devConfig;
} else {
  Config = prdConfig;
}

app.use('/', express.static(path.resolve(__dirname, '../../build')));

render.filenames = Object.values(manifest).filter(filename => /\.(js|css)$/.exec(filename));
app.get('/', (req, res) => res.end(render.render()));

app.listen(Config.server.port);
