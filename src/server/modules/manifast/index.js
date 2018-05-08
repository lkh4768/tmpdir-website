import logger from '_modules/logger';
import manifest from '../../../../build/manifest.json';

const getJsUrls = () => {
  const jsUrls = Object.keys(manifest).filter(key => /\.js$/.exec(manifest[key])).map(key => manifest[key]);
  logger.info(jsUrls);
  return jsUrls;
};
const getCssUrls = () => Object.keys(manifest).filter(key => /\.css$/.exec(manifest[key])).map(key => manifest[key]);

export default {
  getJsUrls,
  getCssUrls,
};
