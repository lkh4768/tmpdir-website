import logger from '_modules/logger';
import manifest from '../../../../build/manifest.json';

const getJsUrls = (name) => {
  let jsUrls = '';
  if (name) {
    jsUrls = manifest[[name, '.js'].join('')];
  }
  logger.info(`JS file of ${name} is ${jsUrls}`);
  return jsUrls;
};
const getCssUrls = (name) => {
  let cssUrls = '';
  if (name) {
    cssUrls = manifest[[name, '.css'].join('')];
  }
  logger.info(`CSS file of ${name} is ${cssUrls}`);
  return cssUrls;
};

export default {
  getJsUrls,
  getCssUrls,
};
