import express from 'express';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpack from 'webpack';
import webpackServerConfig from '../../webpack.config.server';
import webpackDevConfig from '../../webpack.config.dev';

import devConfig from './config/config.dev';
import prdConfig from './config/config.prd';

import routes from './routes';

const app = express();
let Config;

if (process.env.NODE_ENV !== 'prd') {
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
app.use('/', routes);

app.listen(Config.server.port);
