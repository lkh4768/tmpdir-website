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
      '<title>tmpdir</title>',
      '<meta charset="utf-8">',
      '<meta http-equiv="x-ua-compatible" content="ie=edge">',
      '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">',
      '<meta name="application-name" content="tmpdir">',
      '<meta name="theme-color" content="#009688">',
      `<link rel="icon" sizes="151x192" href="${logo192h}"/>`,
      `<link rel="apple-touch-icon" href="${logo192h}">`,
      `<link rel="apple-touch-icon" sizes="152x152" href="${logo152h}">`,
      `<link rel="apple-touch-icon" sizes="167x167" href="${logo167h}">`,
      `<link rel="apple-touch-icon" sizes="180x180" href="${logo180h}">`,
      `<link rel="shortcut icon" href="${logoIco}"/>`,
      '<link href="https://fonts.googleapis.com/css?family=Exo" rel="stylesheet"/>',
      '<link href="https://fonts.googleapis.com/css?family=Russo+One" rel="stylesheet"/>',
      '<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet"/>',
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
