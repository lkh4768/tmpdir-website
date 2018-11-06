const path = require('path');
const common = require('./common.js');

module.exports = {
  name: 'tmpdir-website-stage',
  server: {
    port: 443,
    ssl: {
      key: path.resolve(__dirname, '../../certs/live/tmpdir.sw2h.xyz/privkey.pem'),
      cert: path.resolve(__dirname, '../../certs/live/tmpdir.sw2h.xyz/cert.pem'),
      ca: path.resolve(__dirname, '../../certs/live/tmpdir.sw2h.xyz/chain.pem'),
    },
  },
  tmpdir: {
    service: {
      upload: {
        protocol: 'http',
        hostname: 'tmpdir-fileupload-1.0.0-stage',
        port: 6000,
      },
      download: {
        protocol: 'http',
        hostname: 'tmpdir-filedownload-0.0.1-stage',
        port: 6001,
      },
    },
    file: common.file,
  },
  db: {
    url: 'mongodb://tmpdir:09WESdlatlwjwkdth@tmpdir-mongo-stage:27017/TMP_DIR',
  },
  log: {
    path: '/applog/',
    filename: 'tmpdir-website-stage',
    level: {
      console: 'error',
      express: 'error',
    },
    fileDateFormat: '%Y%m%d%H',
  },
  dependency: common.dependency,
  manifest: path.resolve(__dirname, '../../build/manifest.json'),
};
