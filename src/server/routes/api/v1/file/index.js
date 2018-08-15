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
  const { err, code, data } = await File.getFileInfo(req.params.fileId);
  if (err) {
    if (!err.response) {
      logger.error(err, 'Get file info error');
      return res.status(500).end();
    }
    logger.error(err, 'Get file info error');
    return res.status(err.response.data.status).end(err.response.data.error);
  }
  logger.info({ code, data }, 'Get file info success');
  return res.json(data).end();
});

router.get('/:fileId', async (req, res) => {
  const {
    err, code, data, headers,
  } = await File.download(req.params.fileId);
  if (err) {
    if (!err.response) {
      logger.error(err, 'Download file error');
      return res.status(500).end();
    }
    logger.error(err, 'Download file error');
    return res.status(err.response.data.status).end(err.response.data.error);
  }
  logger.info({ code, headers }, 'Download file success');
  res.set(headers);
  return res.end(data);
});

export default router;
