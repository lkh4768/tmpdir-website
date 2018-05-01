import manifest from '../../../../build/manifest.json';

console.log(manifest);
const getJsUrls = () => Object.keys(manifest).filter(key => /\.js$/.exec(manifest[key])).map(key => manifest[key]);
const getCssUrls = () => Object.keys(manifest).filter(key => /\.css$/.exec(manifest[key])).map(key => manifest[key]);

export default {
  getJsUrls,
  getCssUrls,
};
