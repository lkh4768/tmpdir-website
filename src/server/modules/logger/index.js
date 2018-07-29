import bunyan from 'bunyan';
import RotatingFileStream from 'bunyan-rotating-file-stream';
import expressBunyanLogger from 'express-bunyan-logger';
import path from 'path';
import fs from 'fs';

import getConfig from '_modules/config';
import Const from '_modules/common/const';

const Config = getConfig();
let stream;

if (Config.log.path && Config.log.filename && Config.log.fileDateFormat) {
  if (!fs.existsSync(Config.log.path)) {
    fs.mkdirSync(Config.log.path);
  }

  stream = new RotatingFileStream({
    path: [path.join(Config.log.path, Config.log.filename), '_', Config.log.fileDateFormat, '.log'].join(''),
    period: '1h',
    gzip: true,
  });
}

const getConsoleLoggerConfig = () => {
  const config = {
    name: Config.name || Const.defaultLoggerConfig.name,
    level: Config.log.level || Const.defaultLoggerConfig.level,
    src: true,
  };

  if (stream) {
    config.streams = [{ stream }];
  }

  return config;
};

const logger = bunyan.createLogger(getConsoleLoggerConfig());

const getExpressLoggerConfig = () => {
  if (stream) {
    return { stream };
  }
  return null;
};

export const expressLogger = (app) => {
  app.use(expressBunyanLogger(getExpressLoggerConfig()));
};

export default logger;
