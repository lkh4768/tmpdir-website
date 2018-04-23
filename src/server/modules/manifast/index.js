import manifest from '../../../../build/manifest.json';

console.log(manifest);
const getJsUrls = () => Object.values(manifest).filter(filename => /\.js$/.exec(filename));
const getCssUrls = () => Object.values(manifest).filter(filename => /\.css$/.exec(filename));

export default {
  getJsUrls,
  getCssUrls,
};
