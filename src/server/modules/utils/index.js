const makeCssNode = url => `<link type="text/css" rel="stylesheet" href="${url}">`;
const makeJsNode = url => `<script src="${url}"></script>`;
const getUrl = (hostname, protocol = 'http', port = '') => `${protocol}://${hostname}:${port}`;

export default {
  makeJsNode,
  makeCssNode,
  getUrl,
};
