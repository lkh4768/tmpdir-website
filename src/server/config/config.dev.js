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
        hostname: 'dev-tmpdir-fileupload.run.goorm.io',
        port: 80,
      },
      download: {
        protocol: 'http',
        hostname: 'dev-tmpdir-filedownload.run.goorm.io',
        port: 80,
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
  manifest: path.resolve(__dirname, '../../../build/manifest.json'),
};

export default Config;
