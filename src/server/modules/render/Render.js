import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../../../public/components/App/App';
import reducer from '../../../public/data/reducers/index';
import logoIco from '../../../public/static/images/favicon.ico';
import logo152h from '../../../public/static/images/logo_152h.png';
import logo167h from '../../../public/static/images/logo_167h.png';
import logo180h from '../../../public/static/images/logo_180h.png';
import logo192h from '../../../public/static/images/logo_192h.png';

class NodeMaker {
  static makeNode(type, src) {
    if (!src) {
      return null;
    }
    return NodeMaker.formet[type].replace(NodeMaker.mark.url, src);
  }
}

NodeMaker.mark = {
  url: '[url]',
};

NodeMaker.type = {
  js: 0,
  css: 1,
};

NodeMaker.formet = [
  ['<script src="', NodeMaker.mark.url, '"></script>'].join(''),
  ['<link type="text/css" rel="stylesheet" href="', NodeMaker.mark.url, '">'].join(''),
];

class Render {
  constructor() {
    this.filenames = [];
    this.store = createStore(reducer);
  }
  get jsUrls() {
    return this.filenames.filter(filename => /\.js$/.exec(filename));
  }
  get cssUrls() {
    return this.filenames.filter(filename => /\.css$/.exec(filename));
  }
  get jsNodes() {
    const urls = this.jsUrls;
    return urls.map(url => NodeMaker.makeNode(NodeMaker.type.js, url));
  }
  get cssNodes() {
    const urls = this.cssUrls;
    return urls.map(url => NodeMaker.makeNode(NodeMaker.type.css, url));
  }
  renderJsx() {
    return renderToString(<Provider store={this.store}><App /></Provider>);
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
      this.cssNodes,
      '</head>',
      '<body>',
      '<div id="root">',
      this.renderJsx(),
      '</div>',
      '<script>',
      `window.INITIAL_STATE = ${JSON.stringify(this.store.getState())};`,
      '</script>',
      this.jsNodes,
      '</body>',
      '</html>',
    ].join('');
  }
}

const render = new Render();
export default render;
