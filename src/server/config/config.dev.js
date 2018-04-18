const Config = {
  server: {
    port: 3001,
  },
  tmpdir: {
    service: {
      upload: {
        hostname: 'localhost',
        port: 6000,
      },
      download: {
        hostname: 'localhost',
        port: 6001,
      },
    },
    file: {
      expireTermDay: 1,
      maxSizeGB: 1,
    },
  },
  log: {
    path: 'logs',
    file: 'tmpdir-website.log',
  },
};

export default Config;
