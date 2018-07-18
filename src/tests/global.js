import React from 'react';
import { IntlProvider, intlShape } from "react-intl";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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
