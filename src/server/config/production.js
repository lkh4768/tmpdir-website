const path = require('path');

module.exports = {
  name: 'tmpdir-website',
  server: {
    port: 443,
    ssl: {
      key: path.resolve(__dirname, '../../certs/live/tmpdir.sw-warehouse.xyz/privkey.pem'),
      cert: path.resolve(__dirname, '../../certs/live/tmpdir.sw-warehouse.xyz/cert.pem'),
      ca: path.resolve(__dirname, '../../certs/live/tmpdir.sw-warehouse.xyz/chain.pem'),
    },
  },
  tmpdir: {
    service: {
      upload: {
        protocol: 'http',
        hostname: 'tmpdir-fileupload-1.0.0-prd',
        port: 6000,
      },
      download: {
        protocol: 'http',
        hostname: 'tmpdir-filedownload-0.0.1-prd',
        port: 6001,
      },
    },
    file: {
      expireTermDay: 1,
      maxSize: 1000 * 1000 * 1000,
      tempPath: '/tmp',
    },
  },
  db: {
    url: 'mongodb://tmpdir:09WESdlatlwjwkdth@tmpdir-mongo-prd:27017/TMP_DIR',
  },
  log: {
    path: '/logs/',
    filename: 'tmpdir-website',
    level: {
      console: 'error',
      express: 'error',
    },
    fileDateFormat: '%Y%m%d%H',
  },
  dependency: common.dependency,
  manifest: path.resolve(__dirname, '../../build/manifest.json'),
};
