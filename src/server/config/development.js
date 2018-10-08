const path = require('path');
const common = require('./common.js');

module.exports = {
  name: 'tmpdir-dev',
  server: {
    port: 443,
    ssl: {
      key: path.resolve(__dirname, '../../certs/server.key'),
      cert: path.resolve(__dirname, '../../certs/server.cert'),
    },
  },
  tmpdir: {
    service: {
      upload: {
        protocol: 'http',
        hostname: 'dev.sw-warehouse.xyz',
        port: 6000,
      },
      download: {
        protocol: 'http',
        hostname: 'dev-tmpdir-filedownload.run.goorm.io',
        port: 80,
      },
    },
    file: common.file,
  },
  log: {
    path: path.resolve(__dirname, '../../logs'),
    filename: 'tmpdir-website-dev',
    level: {
      console: 'debug',
      express: 'error',
    },
    fileDateFormat: '%Y%m%d%H',
  },
  dependency: common.dependency,
  manifest: path.resolve(__dirname, '../../build/manifest.json'),
};
