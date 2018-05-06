import { createStore } from 'redux';
import reducer from '../../../public/data/reducers/index';
import Utils from '../utils';
import manifest from '../manifast';
import logoIco from '../../../public/static/images/favicon.ico';
import logo152h from '../../../public/static/images/logo_152h.png';
import logo167h from '../../../public/static/images/logo_167h.png';
import logo180h from '../../../public/static/images/logo_180h.png';
import logo192h from '../../../public/static/images/logo_192h.png';

class Render {
  constructor() {
    this.store = createStore(reducer);
  }
  render() {
    return [
      '<!doctype html>',
      '<html>',
      '<head>',
      manifest.getCssUrls().map(url => Utils.makeCssNode(url)),
      '</head>',
      '<body>',
      '<div id="root">',
      manifest.getJsUrls().map(url => Utils.makeJsNode(url)),
      '</div>',
      '<script>',
      `window.INITIAL_STATE = ${JSON.stringify(this.store.getState()).replace(/</g, '\\x3c')}`,
      '</script>',
      this.jsNodes,
      '</body>',
      '</html>',
    ].join('');
  }
}

const render = new Render();
export default render;
