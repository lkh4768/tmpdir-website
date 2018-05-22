import path from 'path';

const Config = {
  name: 'tmpdir-prd',
  server: {
    port: 3000,
  },
  tmpdir: {
    service: {
      upload: {
        protocol: 'http',
        hostname: 'tmpdir-fileupload-0.0.1-prd',
        port: 6000,
      },
      download: {
        protocol: 'http',
        hostname: 'tmpdir-filedownload-0.0.1-prd',
        port: 6000,
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
    level: 'info',
    dateFormat: 'YYYYMMDDHH',
  },
};

export default Config;
