import { createStore } from 'redux';
import reducer from '../../../public/data/reducers/index';
import Utils from '../utils';
import manifest from '../manifast';

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
