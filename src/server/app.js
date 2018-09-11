import express from 'express';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import pageRoutes from '_routes/page';
import apiRoutes from '_routes/api';
import Config from 'config';
import ConsoleLogger, { ExpressLoggerMiddleware } from '_modules/logger';
import webpackServerConfig from '../../webpack.config.server';
import webpackDevConfig from '../../webpack.config.dev';

const app = express();

ConsoleLogger.info(process.env.NODE_ENV, 'NODE_ENV');
ConsoleLogger.info(Config, 'config');
if (process.env.NODE_ENV !== 'production') {
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
app.use(express.static(path.resolve(__dirname, '../../build')));
app.use(express.static(path.resolve(__dirname, '../../node_modules')));
ExpressLoggerMiddleware.use(app);
app.use('/', pageRoutes);
app.use('/api', apiRoutes);

app.listen(Config.get('server.port'));
