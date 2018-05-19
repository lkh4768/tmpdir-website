import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import UploadApp from '_app/Upload/App';
import DownloadApp from '_app/Download/App';
import { createStore } from 'redux';
import reducer from '_data/reducers/index';
import Utils from '_modules/utils';
import manifast from '_modules/manifast';

const store = createStore(reducer);

const getApp = (id) => {
  switch (id) {
    case Utils.appType.upload.id:
      return (
        <Provider store={store}>
          <UploadApp />
        </Provider>
      );
    default:
      return <DownloadApp />;
  }
};

const render = type => [
  '<!doctype html>',
  '<html>',
  '<head>',
  Utils.makeCssNode(manifast.getCssUrls(type.name)),
  '</head>',
  '<body>',
  '<div id="root">',
  renderToString(getApp(type.id)),
  '</div>',
  '<script>',
  `window.INITIAL_STATE = ${JSON.stringify(store.getState()).replace(/</g, '\\x3c')}`,
  '</script>',
  Utils.makeJsNode(manifast.getJsUrls(type.name)),
  '</body>',
  '</html>',
].join('');

export default render;
