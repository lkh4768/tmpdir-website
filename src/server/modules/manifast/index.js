import manifest from '../../../../build/manifest.json';

const getJsUrls = () => Object.keys(manifest).filter(key => /\.js$/.exec(manifest[key]));
const getCssUrls = () => Object.keys(manifest).filter(key => /\.css$/.exec(manifest[key]));

export default {
  getJsUrls,
  getCssUrls,
};
