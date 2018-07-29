import Multiparty from 'multiparty';
import { post, get } from 'axios';
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

const upload = (req, callback) => {
  const form = new Multiparty.Form({ maxFilesSize: Config.tmpdir.file.maxSize });
  const formData = new FormData();
  formData.maxDataSize = Infinity;
  let count = 0;

  form.on('part', (part) => {
    if (!part.filename) {
      part.resume();
    } else {
      formData.append(
        ['file', count].join(''),
        part,
        {
          filename: part.filename,
          contentType: part['content-type'],
        },
      );
      count += 1;
      part.resume();
      logger.info({ filename: part.filename, byteCount: part.byteCount, headers: part.headers }, 'Rev file on Multiparty formData');
      logger.debug(part, 'Rev file on Multiparty formData detail');
    }
  });

  form.on('close', async () => {
    try {
      const res = await reqUploadService(formData);
      callback(null, { code: res.status, data: res.data });
    } catch (err) {
      logger.error(err, 'Axios post error');
      callback(err);
    }
  });
  form.on('error', (err) => {
    logger.error(err, 'Multiparty form error');
    return callback(err);
  });
  form.parse(req);
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
