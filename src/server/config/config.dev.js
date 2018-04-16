const Config = {
  server: {
    port: 3001,
  },
  tmpdir: {
    service: {
      upload: {
        url: 'http://localhost:6000/',
      },
      download: {
        url: 'http://localhost:6001/',
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
