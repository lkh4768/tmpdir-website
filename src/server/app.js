import express from 'express';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import webpackServerConfig from '../../webpack.config.server';
import webpackDevConfig from '../../webpack.config.dev';

import routes from './routes';
import Config from './modules/config';

const app = express();

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
}
app.use('/', express.static(path.resolve(__dirname, '../../build')));
app.use('/', routes);

app.listen(Config().server.port);
