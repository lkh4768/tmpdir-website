import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';

import Utils from '_modules/common/utils';
import Const from '_modules/common/const';
import manifest from '_modules/manifest';
import logger from '_modules/logger';
import getConfig from '_modules/config';

const Config = getConfig();

const render = (type, lang) => {
  if (!type) {
    logger.error({ type, lang }, 'render type is empty');
    return '';
  }
  const html = `
    <!doctype html>
    <html>
      <head>
      ${Config.dependency.css.map(url => Utils.makeCssNode(url)).join('')}
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
  logger.info({ type, lang, html }, 'render html info');
  return html;
};

export default render;
