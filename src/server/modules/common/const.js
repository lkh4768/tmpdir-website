const vendor = 'vendor';
const appType = {
  upload: {
    id: 0,
    name: 'uploadApp',
  },
  download: {
    id: 1,
    name: 'downloadApp',
  },
};

const defaultLoggerConfig = {
  name: 'app',
  level: 'info',
};

const windowInitialVar = {
  state: 'window.INITIAL_STATE',
  lang: 'window.INITIAL_LANG',
};

export default {
  vendor,
  appType,
  defaultLoggerConfig,
  windowInitialVar,
};
