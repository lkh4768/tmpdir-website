import logger from '_modules/logger';
import manifest from '../../../../build/manifest.json';

const getJsUrls = (name) => {
  let jsUrls = '';
  if (name) {
    jsUrls = manifest[[name, '.js'].join('')];
  }
  logger.info(jsUrls);
  return jsUrls;
};
const getCssUrls = (name) => {
  let cssUrls = '';
  if (name) {
    cssUrls = manifest[[name, '.css'].join('')];
  }
  logger.info(cssUrls);
  return cssUrls;
};

export default {
  getJsUrls,
  getCssUrls,
};
