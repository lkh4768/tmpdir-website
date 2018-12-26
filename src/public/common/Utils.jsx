import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ko from 'react-intl/locale-data/ko';
import ja from 'react-intl/locale-data/ja';
import configureStore from '_data/store';

import Const from './Const';

const Utils = {
  removeEvent: (e) => {
    e.stopPropagation();
    e.preventDefault();
  },
  emptyFunc: f => f,
  convertFileSize: (byte) => {
    let cnt = 0;
    let remainSize = byte;
    while (Math.floor(remainSize / Const.FILE.SIZE.WARTERMARK) > 0) {
      remainSize /= Const.FILE.SIZE.WARTERMARK;
      cnt += 1;
    }
    return [remainSize.toFixed(2), Const.FILE.SIZE.UNITS[cnt]].join(' ');
  },
  getTotalFileSize: (files = []) => {
    if (files && files.length > 0) {
      return files.reduce((sum, file) => sum + file.size, 0);
    }
    return 0;
  },
  uniqArray: (arr, prop) => {
    const uniqKeySet = new Set([...arr].map(elem => elem[prop]));
    return arr.filter((elem) => {
      const has = uniqKeySet.has(elem[prop]);
      if (has) {
        uniqKeySet.delete(elem[prop]);
      }
      return has;
    });
  },
  render: (app, reducer, locale) => () => {
    const initState = window.INITIAL_STATE;
    const store = configureStore(reducer, initState);
    const language = window.INITIAL_LANG || 'en';
    const messages = locale[language] || locale.en;
    addLocaleData([...en, ...ko, ...ja]);

    render(
      <Provider store={store}>
        <IntlProvider locale={language} messages={messages}>
          {app}
        </IntlProvider>
      </Provider>,
      document.getElementById('root'),
    );
  },
};

export default Utils;
