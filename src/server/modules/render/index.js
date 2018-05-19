import { createStore } from 'redux';
import uploadReducer from '_data/reducers/upload';
import downloadReducer from '_data/reducers/download';
import Utils from '_modules/utils';
import manifast from '_modules/manifast';

const getStore = (id) => {
  switch (id) {
    case Utils.appType.upload.id:
      return createStore(uploadReducer);
    default:
      return createStore(downloadReducer);
  }
};

const render = (type) => {
  const store = getStore(type.id);
  return [
    '<!doctype html>',
    '<html>',
    '<head>',
    Utils.makeCssNode(manifast.getCssUrls(type.name)),
    '</head>',
    '<body>',
    '<div id="root">',
    '</div>',
    '<script>',
    `window.INITIAL_STATE = ${JSON.stringify(store.getState()).replace(/</g, '\\x3c')}`,
    '</script>',
    Utils.makeJsNode(manifast.getJsUrls(type.name)),
    '</body>',
    '</html>',
  ].join('');
};

export default render;
