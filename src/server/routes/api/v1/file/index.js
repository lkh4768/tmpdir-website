import express from 'express';

import logger from '_modules/logger';
import File from '_modules/file';

const router = express.Router();

router.post('/', (req, res) => {
  File.upload(req, (err, data) => {
    if (err) {
      if (!err.response) {
        logger.error(err, 'Upload file error');
        return res.status(500).end();
      }

      logger.error(err, 'Upload file error');
      return res.status(err.response.data.status).end(err.response.data.error);
    }
    logger.info(data, 'Upload file success');
    return res.status(data.code).json(data.data).end();
  });
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
    }, 'Download fileInfo success');
    res.set(downloadRes.headers);
    res.end(downloadRes.data);
  } catch (err) {
    logger.error(err, 'Download fileInfo error');
    res.status(err.response.data.status).end(err.response.data.error);
  }
});

export default router;
