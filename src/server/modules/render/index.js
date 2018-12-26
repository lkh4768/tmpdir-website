import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import Config from 'config';

import Utils from '_modules/common/utils';
import Const from '_modules/common/const';
import manifest from '_modules/manifest';
import ConsoleLogger from '_modules/logger';

const render = (type, lang) => {
  if (!type) {
    ConsoleLogger.error({ type, lang }, 'render type is empty');
    return '';
  }
  const html = `
    <!doctype html>
    <html>
      <head>
      ${Config.get('dependency.css').map(url => Utils.makeCssNode(url)).join('')}
      ${Utils.makeCssNode(manifest.getCssUri(type.name))}
      </head>
      <body>
        <div id="root">
          ${renderToString(<Provider store={type.store}><IntlProvider locale={lang}>{type.component}</IntlProvider></Provider>)}
        </div>
        <script>
          ${Const.windowInitialVar.state} = ${Utils.stringifyState(type.store.getState())}
          ${Const.windowInitialVar.lang} = "${lang}"
        </script>
        ${Utils.makeJsNode(manifest.getJsUri(Const.vendor))}
        ${Utils.makeJsNode(manifest.getJsUri(type.name))}
      </body>
    </html>
  `;
  ConsoleLogger.info({ type, lang, html }, 'render html info');
  return html;
};

export default render;
