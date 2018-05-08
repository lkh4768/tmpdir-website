import manifest from '../../../../build/manifest.json';
import logger from '_modules/logger';

const getJsUrls = () => {
  const jsUrls = Object.keys(manifest).filter(key => /\.js$/.exec(manifest[key])).map(key => manifest[key]);
logger.info();
  return jsUrls;
};
const getCssUrls = () => Object.keys(manifest).filter(key => /\.css$/.exec(manifest[key])).map(key => manifest[key]);

export default {
  getJsUrls,
  getCssUrls,
};
