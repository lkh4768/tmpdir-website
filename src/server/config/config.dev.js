import path from 'path';

const Config = {
  name: 'tmpdir-dev',
  server: {
    port: 3001,
  },
  tmpdir: {
    service: {
      upload: {
        protocol: 'http',
        hostname: 'localhost',
        port: 6000,
      },
      download: {
        protocol: 'http',
        hostname: 'localhost',
        port: 6001,
      },
    },
    file: {
      expireTermDay: 1,
      maxSize: 1000 * 1000 * 1000,
    },
  },
  log: {
    path: path.resolve(__dirname, '../../../logs'),
    filename: 'tmpdir-website',
    level: 'debug',
    fileDateFormat: '%Y%m%d%H',
  },
  dependency: {
    css: ['bootstrap/dist/css/bootstrap.min.css'],
  },
};

export default Config;
