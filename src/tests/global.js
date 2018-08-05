import React from 'react';
import { IntlProvider, intlShape } from "react-intl";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

import getConfig from '_modules/config';

import manifest from './manifest.json';

const Config = getConfig();

Enzyme.configure({ adapter: new Adapter() });

/* import */
global.React = React;

/* var */
global.T_FILES = [
  new File(['1'], 'file1'),
  new File(['2'], 'file2'),
  new File(['3'], 'file3'),
  new File(['4'], 'file4'),
];
global.T_STR = 'test';
global.T_URI = '/path/test';
global.T_HOSTNAME = global.T_STR;
global.T_PROTOCOL = 'ftp';
global.T_PORT = 32;
global.T_ACCEPT_LANG = {
  SEP: ',',
  TYPE: {
    ES: 'es',
    EN: 'en',
    EN_US: 'en-US',
  }
};
global.T_MANIFEST = manifest;
global.T_APP_CONFIG = Config;
global.T_OBJECT = {
  name: 'tom',
  age: 23
};
global.T_INCLUE_HTML_OBJECT = {
  ...global.T_OBJECT,
  img: '<img src="img.jpg" />',
};
global.T_FILE_SIZE = {
  TEN_MB: '10mb',
  GB: 'gb',
};

/* func */
global.T_NEW_FILES = (count) => {
  const filenamePrefix = 'newfile';
  let nFiles = [];
  for (let i = 0; i < count; i++) {
    nFiles.push(
      new File([[filenamePrefix, i].join('')], [filenamePrefix, i].join(''))
    );
  }
  return nFiles;
};

const makeIntlProvider = (locale, messages) => new IntlProvider(
  {
    locale,
    messages,
  },
  {}
);

const getIntl = intlProvider => intlProvider.getChildContext().intl;

const nodeWithIntlProp = (node, intl) => React.cloneElement(node, { intl });

global.T_SHALLOW_WITH_INTL = (node, locale = 'en', messages = {}, { context, ...options } = {}) => {
  const intlProv = makeIntlProvider(locale, messages);
  const intl = getIntl(intlProv);
  return Enzyme.shallow(nodeWithIntlProp(node, intl), {
    ...options,
    context: {
      ...context,
      intl
    }
  });
};

global.T_MOUNT_WITH_INTL = (node, locale = 'en', messages = {}, { context, childContextTypes, ...options } = {}) => {
  const intlProv = makeIntlProvider(locale, messages);
  const intl = getIntl(intlProv);
  return Enzyme.mount(nodeWithIntlProp(node, intl), {
    ...options,
    context: {
      ...context,
      intl
    },
    childContextTypes: {
      intl: intlShape,
      ...childContextTypes
    }
  });
};

global.T_MULTI_ACCEPT_LANGS = (LANGS) => {
  let ret = '';
  for(let lang in LANGS) {
    ret = `${lang}${global.T_ACCEPT_LANG.SEP}`
  }
  return ret.substring(0, ret.length - 1);
};

const makeTestFile = (size = global.T_FILE_SIZE.TEN_MB, count = 1) => {
  let scriptPath = path.resolve(__dirname, '../../script/make10mbFile.js');
  if (size === global.T_FILE_SIZE.GB) {
    scriptPath = path.resolve(__dirname, '../../script/makeGbFile.js');
  }
  for (let i = 0; i < count; i++) {
    execSync(`node ${scriptPath}`);
  }
};

const getSubFileInfoList = srcPath => fs.readdirSync(srcPath).map(name => ({
  name,
  path: path.join(srcPath, name),
  size: fs.statSync(path.join(srcPath, name)).size
}));

global.T_GET_FILES = ({ size = global.T_FILE_SIZE.TEN_MB, count = 1 } = {}) => {
  const testDataPath = path.resolve(__dirname, '../../data/test');
  let testFileInfos = getSubFileInfoList(testDataPath).filter(fileInfo => fileInfo.name.indexOf(size) !== -1);
  if (testFileInfos.length <= 0) {
    makeTestFile(size, count);
  }
  testFileInfos = getSubFileInfoList(testDataPath).filter(fileInfo => fileInfo.name.indexOf(size) !== -1);

  return testFileInfos.map((file, i) => ({
    fieldName: `file${i}`,
    originalFilename: file.name,
    path: file.path,
    size: file.size,
    name: file.name,
    type: path.extname(file.name),
  }));
};
