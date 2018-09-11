import { post, get } from 'axios';
import fs from 'fs';
import FormData from 'form-data';
import Config from 'config';

import ConsoleLogger from '_modules/logger';
import Utils from '_modules/common/utils';


const reqUploadService = async (formData) => {
  const config = {
    headers: {
      accept: 'application/json',
      'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`,
    },
    maxContentLength: Config.get('tmpdir.file.maxSize'),
  };
  return post(`${Utils.getUploadUrl()}/api/v1/file`, formData, config);
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
  if (!files) {
    const err = 'Files is null';
    ConsoleLogger.error(err, 'reqUploadService failed');
    return { err };
  }
  ConsoleLogger.debug({ files }, 'Recv files');
  ConsoleLogger.info(`Recv file count(${files.length})`);
  const formData = formDataAppendFiles(files);
  try {
    const res = await reqUploadService(formData);
    ConsoleLogger.info({ code: res.status, data: res.data }, 'reqUploadService success');
    return { code: res.status, data: res.data };
  } catch (err) {
    ConsoleLogger.error(err, 'reqUploadService failed');
    return { err };
  }
};

const getFileInfo = async (fileId) => {
  try {
    const res = await get(`${Utils.getDownloadUrl()}/file-info/${fileId}`);
    ConsoleLogger.info({ code: res.status, data: res.data }, 'getfileInfo success');
    return { code: res.status, data: res.data };
  } catch (err) {
    ConsoleLogger.error(err, 'getFileInfo failed');
    return { err };
  }
};

const download = async (fileId) => {
  try {
    const res = await get(`${Utils.getDownloadUrl()}/file/${fileId}`, { responseType: 'arraybuffer' });
    ConsoleLogger.info({ code: res.status, headers: res.headers }, 'download success');
    return { code: res.status, data: res.data, headers: res.headers };
  } catch (err) {
    ConsoleLogger.error(err, 'download failed');
    return { err };
  }
};

export default { upload, getFileInfo, download };
