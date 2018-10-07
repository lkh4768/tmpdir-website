const path = require('path');

module.exports = {
  name: 'tmpdir-website-stage',
  server: {
    port: 443,
    ssl: {
      key: path.resolve(__dirname, '../../certs/dev.sw-warehouse.xyz/privkey.pem'),
      cert: path.resolve(__dirname, '../../certs/dev.sw-warehouse.xyz/cert.pem'),
      ca: path.resolve(__dirname, '../../certs/dev.sw-warehouse.xyz/chain.pem'),
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
    file: {
      expireTermDay: 1,
      maxSize: 1000 * 1000 * 1000,
      tempPath: '/tmp',
    },
  },
  db: {
    url: 'mongodb://tmpdir:09WESdlatlwjwkdth@tmpdir-mongo-stage:27017/TMP_DIR',
  },
  log: {
    path: '/logs/',
    filename: 'tmpdir-website-stage',
    level: {
      console: 'error',
      express: 'error',
    },
    fileDateFormat: '%Y%m%d%H',
  },
  dependency: {
    css: ['bootstrap/dist/css/bootstrap.min.css'],
  },
  manifest: path.resolve(__dirname, '../../build/manifest.json'),
};
