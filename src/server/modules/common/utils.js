import Config from 'config';

const makeCssNode = url => `<link type="text/css" rel="stylesheet" href="${url}">`;
const makeJsNode = url => `<script src="${url}"></script>`;
const getUrl = (hostname, protocol = 'http', port = '') => `${protocol}://${hostname}${port ? `:${port}` : ''}`;
const emptyFunc = f => f;
const getLangInAcceptLangHeader = (acceptLang) => {
  const language = acceptLang.split(';')[0].split(',')[0];
  return language.toLowerCase().split(/[_-]+/)[0];
};
const stringifyState = state => JSON.stringify(state).replace(/</g, '\\x3c');
const getExternalServiceUrl = (serviceType) => {
  const externalServiceConfig = Config.get(`tmpdir.service.${serviceType}`);
  if (externalServiceConfig) {
    return getUrl(
      externalServiceConfig.hostname,
      externalServiceConfig.protocol,
      externalServiceConfig.port,
    );
  }
  return '';
};
const getDownloadUrl = () => getExternalServiceUrl('download');

const getUploadUrl = () => getExternalServiceUrl('upload');

export default {
  makeJsNode,
  makeCssNode,
  getUrl,
  emptyFunc,
  getLangInAcceptLangHeader,
  stringifyState,
  getDownloadUrl,
  getUploadUrl,
};
