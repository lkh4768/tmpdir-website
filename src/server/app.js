import express from 'express';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import routes from '_routes';
import getConfig from '_modules/config';
import { expressLogger, expressErrorLogger } from '_modules/logger';
import webpackServerConfig from '../../webpack.config.server';
import webpackDevConfig from '../../webpack.config.dev';

const Config = getConfig();
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
expressLogger(app);
app.use('/', routes);
expressErrorLogger(app);

app.listen(Config.server.port);
