import express from 'express';
import multipart from 'connect-multiparty';
import Config from 'config';

import ConsoleLogger from '_modules/logger';
import File from '_modules/file';

const router = express.Router();
const multipartMiddleware = multipart({ maxFilesSize: Config.get('tmpdir.file.maxSize') });

router.post('/', multipartMiddleware, async (req, res) => {
  const { err, code, data } = await File.upload(Object.keys(req.files).map(key => req.files[key]));
  if (err) {
    if (!err.response) {
      ConsoleLogger.error(err, 'Upload file error');
      return res.status(500).end();
    }
    ConsoleLogger.error(err, 'Upload file error');
    return res.status(err.response.data.status).end(err.response.data.error);
  }
  ConsoleLogger.info({ code, data }, 'Upload file success');
  return res.status(code).json(data).end();
});

router.get('/info/:fileId', async (req, res) => {
  const { err, code, data } = await File.getFileInfo(req.params.fileId);
  if (err) {
    if (!err.response) {
      ConsoleLogger.error(err, 'Get file info error');
      return res.status(500).end();
    }
    ConsoleLogger.error(err, 'Get file info error');
    return res.status(err.response.data.status).end(err.response.data.error);
  }
  ConsoleLogger.info({ code, data }, 'Get file info success');
  return res.json(data).end();
});

router.get('/:fileId', async (req, res) => {
  const {
    err, code, data, headers,
  } = await File.download(req.params.fileId);
  if (err) {
    if (!err.response) {
      ConsoleLogger.error(err, 'Download file error');
      return res.status(500).end();
    }
    ConsoleLogger.error(err, 'Download file error');
    return res.status(err.response.data.status).end(err.response.data.error);
  }
  ConsoleLogger.info({ code, headers }, 'Download file success');
  res.set(headers);
  return res.end(data);
});

export default router;
