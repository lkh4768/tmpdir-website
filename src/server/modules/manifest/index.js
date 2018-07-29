import logger from '_modules/logger';
import getConfig from '_modules/config';
import fs from 'fs';

const Config = getConfig();
const manifest = JSON.parse(fs.readFileSync(Config.manifest));

const getUriInManifest = (name, extension) => {
  let uri = '';
  if (name) {
    uri = manifest[[name, `.${extension}`].join('')];
  }
  logger.info(`${extension} file of ${name} is ${uri}`);
  return uri;
};

const getJsUri = name => getUriInManifest(name, 'js');

export default {
  getJsUri,
};
