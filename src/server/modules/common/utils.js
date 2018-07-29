const makeCssNode = url => `<link type="text/css" rel="stylesheet" href="${url}">`;
const makeJsNode = url => `<script src="${url}"></script>`;
const getUrl = (hostname, protocol = 'http', port = '') => `${protocol}://${hostname}${port ? `:${port}` : ''}`;
const emptyFunc = f => f;
const getLangInAcceptLangHeader = (acceptLang) => {
  const language = acceptLang.split(';')[0].split(',')[0];
  return language.toLowerCase().split(/[_-]+/)[0];
};
const stringifyState = state => JSON.stringify(state).replace(/</g, '\\x3c');

export default {
  makeJsNode,
  makeCssNode,
  getUrl,
  emptyFunc,
  getLangInAcceptLangHeader,
  stringifyState,
};
