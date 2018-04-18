const Config = {
  server: {
    port: 3000,
  },
  tmpdir: {
    service: {
      upload: {
        hostname: 'tmpdir-fileupload-0.0.1-prd',
        port: 6000,
      },
      download: {
        hostname: 'tmpdir-filedownload-0.0.1-prd',
        port: 6000,
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
