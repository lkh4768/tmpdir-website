import { post, get } from 'axios';
import fs from 'fs';
import FormData from 'form-data';

import logger from '_modules/logger';
import getConfig from '_modules/config';
import Utils from '_modules/common/utils';

const Config = getConfig();

const reqUploadService = async (formData) => {
  const config = {
    headers: {
      accept: 'application/json',
      'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`,
    },
    maxContentLength: Config.tmpdir.file.maxSize,
  };
  return post(Utils.getUploadUrl(), formData, config);
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
  if(!files) {
    const err = 'Files is null'
    logger.error(err, 'reqUploadService failed');
    return { err };
  }
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

const getFileInfo = async fileId => {
  try {
    const res = await get(`${Utils.getDownloadUrl()}/file-info/${fileId}`);
    logger.info({ code: res.status, data: res.data }, 'getfileInfo success');
    return { code: res.status, data: res.data };
  } catch (err) {
    logger.error(err, 'getFileInfo failed');
    return { err };
  }
};

const download = async fileId => {
  try {
    const res = await get(`${Utils.getDownloadUrl()}/file/${fileId}`, { responseType: 'arraybuffer' })
    logger.info({ code: res.status, headers: res.headers }, 'download success');
    return { code: res.status, data: res.data, headers: res.headers };
  } catch (err) {
    logger.error(err, 'download failed');
    return { err };
  }
};

export default {
  upload,
  getFileInfo,
  download,
}  ;
