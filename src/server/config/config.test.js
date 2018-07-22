import path from 'path';

const Config = {
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
    file: {
      expireTermDay: 1,
      maxSize: 1000 * 1000 * 1000,
    },
  },
  log: {
    level: 'debug',
  },
  dependency: {
    css: ['bootstrap/dist/css/bootstrap.min.css'],
  },
  manifest: path.resolve(__dirname, '../../tests/manifest.json'),
};

export default Config;
