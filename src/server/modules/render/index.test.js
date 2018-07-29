import { createStore } from 'redux';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';

import Utils from '_modules/common/utils';
import Const from '_modules/common/const.js';
import uploadReducer from '_data/reducers/upload';
import UploadApp from '_app/Upload/App';

import render from './index.js'

describe('render', () => {
  it('render, uploadApp Success', () => {
    const lang = T_ACCEPT_LANG.TYPE.EN;
    const html = render(Const.appType.upload, lang);
    const store = createStore(uploadReducer);
    expect(html).toEqual(expect.stringContaining(T_MANIFEST['uploadApp.js']));
    expect(html).toEqual(expect.stringContaining(T_MANIFEST['vendor.js']));
    T_APP_CONFIG.dependency.css.map(css => {
      expect(html).toEqual(expect.stringContaining(css));
    });
    expect(html).toEqual(
      expect.stringContaining(
        `${Const.windowInitialVar.state} = ${Utils.stringifyState(store.getState())}`
    ));
    expect(html).toEqual(
      expect.stringContaining(
      `${Const.windowInitialVar.lang} = "${lang}"`
    ));
    expect(html).toEqual(
      expect.stringContaining(
        `<div id="root">
          ${renderToString(
            <Provider store={store}>
              <IntlProvider locale={lang}>
                <UploadApp />
              </IntlProvider>
            </Provider>
          )}
        </div>`
    ));
  });
});
