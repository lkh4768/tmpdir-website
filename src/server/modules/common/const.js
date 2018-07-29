import React from 'react';
import { createStore } from 'redux';

import uploadReducer from '_data/reducers/upload';
import downloadReducer from '_data/reducers/download';
import UploadApp from '_app/Upload/App';
import DownloadApp from '_app/Download/App';

const vendor = 'vendor';
const appType = {
  upload: {
    id: 0,
    name: 'uploadApp',
    component: <UploadApp />,
    store: createStore(uploadReducer),
  },
  download: {
    id: 1,
    name: 'downloadApp',
    component: <DownloadApp />,
    store: createStore(downloadReducer),
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
