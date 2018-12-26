import fs from 'fs';
import Config from 'config';
import ConsoleLogger from '_modules/logger';

const manifest = JSON.parse(fs.readFileSync(Config.get('manifest')));

const getUriInManifest = (name, extension) => {
  let uri = '';
  if (name) {
    uri = manifest[[name, `.${extension}`].join('')];
  }
  ConsoleLogger.info(`${extension} file of ${name} is ${uri}`);
  return uri;
};

const getJsUri = name => getUriInManifest(name, 'js');
const getCssUri = name => getUriInManifest(name, 'css');

export default {
  getJsUri,
  getCssUri,
};
