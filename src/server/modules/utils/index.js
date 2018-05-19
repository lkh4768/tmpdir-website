const makeCssNode = url => `<link type="text/css" rel="stylesheet" href="${url}">`;
const makeJsNode = url => `<script src="${url}"></script>`;
const getUrl = (hostname, protocol = 'http', port = '') => `${protocol}://${hostname}:${port}`;
const emptyFunc = f => f;
const appType = {
  upload: {
    id: 0,
    name: 'uploadApp',
  },
  download: {
    id: 1,
    name: 'downloadApp',
  },
};

export default {
  makeJsNode,
  makeCssNode,
  getUrl,
  emptyFunc,
  appType,
};
