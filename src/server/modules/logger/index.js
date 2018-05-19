import winston from 'winston';
import WinstonDailyRotateFile from 'winston-daily-rotate-file';
import expressWinston from 'express-winston';
import fs from 'fs';
import getConfig from '_modules/config';

const Config = getConfig();

if (!fs.existsSync(Config.log.path)) {
  fs.mkdirSync(Config.log.path);
}

const timestamp = () => (new Date()).toLocaleTimeString();
const transports = [
  new winston.transports.Console({
    timestamp,
    colorize: true,
    level: Config.log.level,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.colorize(),
      winston.format.simple(),
    ),
  }),
  new WinstonDailyRotateFile({
    level: Config.log.level,
    dirname: Config.log.path,
    filename: `${Config.log.filename}-%DATE%.log`,
    timestamp,
    datePattern: Config.log.dateFormat,
    prepend: true,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.colorize(),
      winston.format.simple(),
    ),
  }),
];

const logger = winston.createLogger({
  transports,
});

export const expressLogger = (app) => {
  app.use(expressWinston.logger({
    winstonInstance: logger,
    meta: true,
    msg: 'HTTP {{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}',
    expressFormat: true,
    colorize: false,
    ignoreRoute: () => false,
  }));
};

export const expressErrorLogger = (app) => {
  app.use(expressWinston.errorLogger({
    winstonInstance: logger,
    msg: 'HTTP {{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}',
    colorize: false,
  }));
};

export default logger;
