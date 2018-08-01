import express from 'express';
import multipart from 'connect-multiparty';

import logger from '_modules/logger';
import getConfig from '_modules/config';
import File from '_modules/file';

const router = express.Router();
const Config = getConfig();
const multipartMiddleware = multipart({ maxFilesSize: Config.tmpdir.file.maxSize });

router.post('/', multipartMiddleware, async (req, res) => {
  const { err, code, data } = await File.upload(Object.keys(req.files).map(key => req.files[key]));
  if (err) {
    if (!err.response) {
      logger.error(err, 'Upload file error');
      return res.status(500).end();
    }
    logger.error(err, 'Upload file error');
    return res.status(err.response.data.status).end(err.response.data.error);
  }
  logger.info({ code, data }, 'Upload file success');
  return res.status(code).json(data).end();
});

router.get('/info/:fileId', async (req, res) => {
  try {
    const fileInfo = await File.getFileInfo(req.params.fileId);
    logger.info({
      status: fileInfo.status,
      statusText: fileInfo.statusText,
      headers: fileInfo.headers,
      config: fileInfo.config,
      data: fileInfo.data,
    }, 'Get fileInfo success');
    res.json(fileInfo.data);
  } catch (err) {
    logger.error(err, 'Get fileInfo error');
    res.status(err.response.data.status).end(err.response.data.error);
  }
});

router.get('/:fileId', async (req, res) => {
  try {
    const downloadRes = await File.download(req.params.fileId);
    logger.info({
      status: downloadRes.status,
      statusText: downloadRes.statusText,
      headers: downloadRes.headers,
      config: downloadRes.config,
    }, 'Download file success');
    res.set(downloadRes.headers);
    res.end(downloadRes.data);
  } catch (err) {
    logger.error(err, 'Download file error');
    res.status(err.response.data.status).end(err.response.data.error);
  }
});

export default router;
