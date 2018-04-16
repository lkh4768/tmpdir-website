const Config = {
  server: {
    port: 3000,
  },
  tmpdir: {
    service: {
      upload: {
        url: 'http://tmpdir-fileupload-0.0.1-prd:6000/',
      },
      download: {
        url: 'http://tmpdir-filedownload-0.0.1-prd:6001/',
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
