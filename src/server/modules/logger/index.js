import bunyan from 'bunyan';
import RotatingFileStream from 'bunyan-rotating-file-stream';
import expressBunyanLogger from 'express-bunyan-logger';
import path from 'path';
import fs from 'fs';
import getConfig from '_modules/config';

const Config = getConfig();
const stream = new RotatingFileStream({
  path: [path.join(Config.log.path, Config.log.filename), '_%Y%m%dT%H%M%S.log'].join(''),
  period: '1h',
  gzip: true,
});

if (!fs.existsSync(Config.log.path)) {
  fs.mkdirSync(Config.log.path);
}

const logger = bunyan.createLogger({
  name: Config.name,
  level: Config.log.level,
  src: true,
  streams: [{
    stream,
  }],
});

export const expressLogger = (app) => {
  app.use(expressBunyanLogger({
    stream,
  }));
};

export default logger;
