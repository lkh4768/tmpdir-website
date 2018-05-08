import winston from 'winston';
import fs from 'fs';
import Config from '_modules/config';

if (!fs.existsSync(Config.log.path)) {
  fs.mkdirSync(Config.log.path);
}

const timestamp = () => (new Date()).toLocaleTimeString();

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      timestamp,
      colorize: true,
      level
    }),
    new (require('winston-daily-rotate-file'))({
      level,
      filename: `${logDir}/${Config.log.filename}-.log`,
      timestamp,
      datePattern: Config.log.dateFormat,
      prepend: true,
    })
  ]
});

export default logger;
