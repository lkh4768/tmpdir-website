import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ko from 'react-intl/locale-data/ko';
import ja from 'react-intl/locale-data/ja';
import configureStore from '_data/store';
import reducer from '_data/reducers/upload';
import App from './App';
import locale from './locale';

const initState = window.INITIAL_STATE;
const store = configureStore(reducer, initState);
const language = window.INITIAL_LANG || 'en';
const messages = locale[language] || locale.en;
addLocaleData([...en, ...ko, ...ja]);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={language} messages={messages}>
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById('root'),
);
