const Config = {
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
    path: 'logs',
    filename: 'tmpdir-website',
    level: 'debug',
    dateFormat:'yyyyMMdd',
  },
};

export default Config;
