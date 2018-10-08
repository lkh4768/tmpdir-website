const path = require('path');

module.exports = {
  name: 'tmpdir-test',
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
    file: common.file,
  },
  log: {
    path: path.resolve(__dirname, '../../../logs'),
    filename: 'tmpdir-website-test',
    level: {
      console: 'debug',
      express: 'info',
    },
    fileDateFormat: '%Y%m%d%H',
  },
  dependency: common.dependency,
  manifest: path.resolve(__dirname, '../../test/manifest.json'),
};
