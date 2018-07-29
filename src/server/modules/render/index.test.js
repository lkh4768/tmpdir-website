import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';

import Utils from '_modules/common/utils';
import Const from '_modules/common/const.js';
import manifest from '_modules/manifest';

import render from './index.js'

describe('render', () => {
  it('render, apptype = uploadApp Success', () => {
    const lang = T_ACCEPT_LANG.TYPE.EN;
    const appType = Const.appType.upload;
    const html = render(appType, lang);
    expect(html).toEqual(
      expect.stringContaining(manifest.getJsUri(Const.appType.name))
    );
    expect(html).toEqual(
      expect.stringContaining(manifest.getJsUri(Const.vendor))
    );
    T_APP_CONFIG.dependency.css.map(css => {
      expect(html).toEqual(expect.stringContaining(css));
    });
    expect(html).toEqual(
      expect.stringContaining(
        `${Const.windowInitialVar.state} = ${Utils.stringifyState(appType.store.getState())}`
    ));
    expect(html).toEqual(
      expect.stringContaining(
      `${Const.windowInitialVar.lang} = "${lang}"`
    ));
    expect(html).toEqual(
      expect.stringContaining(
        `<div id="root">
          ${renderToString(
            <Provider store={appType.store}>
              <IntlProvider locale={lang}>
                {appType.component}
              </IntlProvider>
            </Provider>
          )}
        </div>`
    ));
  });
  it('render, appType=null  Success', () => {
    const lang = T_ACCEPT_LANG.TYPE.EN;
    const html = render(null, lang);
    expect(html).toEqual('');
  });
});
