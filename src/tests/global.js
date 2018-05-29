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
