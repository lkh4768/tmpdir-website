import { post, get } from 'axios';
import fs from 'fs';
import FormData from 'form-data';

import logger from '_modules/logger';
import getConfig from '_modules/config';
import Utils from '_modules/common/utils';

const Config = getConfig();

const reqUploadService = async (formData) => {
  const uploadConfig = Config.tmpdir.service.upload;
  const uploadUrl = Utils.getUrl(uploadConfig.hostname, uploadConfig.protocol, uploadConfig.port);
  const config = {
    headers: {
      accept: 'application/json',
      'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`,
    },
    maxContentLength: Config.tmpdir.file.maxSize,
  };
  return post(uploadUrl, formData, config);
};

const formDataAppendFiles = (files) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append(
      file.fieldName,
      fs.createReadStream(file.path),
      { filename: file.name, contentType: file.type },
    );
  });
  return formData;
};

const upload = async (files) => {
  logger.debug({ files }, 'Recv files');
  logger.info(`Recv file count(${files.length})`);
  const formData = formDataAppendFiles(files);
  try {
    const res = await reqUploadService(formData);
    logger.info({ code: res.status, data: res.data }, 'reqUploadService success');
    return { code: res.status, data: res.data };
  } catch (err) {
    logger.error(err, 'reqUploadService failed');
    return { err };
  }
};

const getDownloadUrl = () => {
  const downloadConfig = Config.tmpdir.service.download;
  return Utils.getUrl(
    downloadConfig.hostname,
    downloadConfig.protocol,
    downloadConfig.port,
  );
};

const getFileInfo = fileId => get(`${getDownloadUrl()}/file-info/${fileId}`);
const download = fileId => get(`${getDownloadUrl()}/file/${fileId}`, { responseType: 'arraybuffer' });

export default {
  upload,
  getFileInfo,
  download,
};
