import express from 'express';

import logger from '_modules/logger';
import File from '_modules/file';

const router = express.Router();

router.post('/', (req, res) => {
  File.upload(req, (err, data) => {
    if (err) {
      if (!err.response) {
        logger.error('500 internal error');
        res.status(500).end();
      }

      logger.error(`${err.response.data.status} ${err.response.data.error}`);
      res.status(err.response.data.status).end(err.response.data.error);
    }
    logger.info('Client -> Server, Req Success code(data.code)');
    res.status(data.code).json(data.data).end();
  });
});

router.get('/info/:fileId', async (req, res) => {
  try {
    const fileInfo = await File.getFileInfo(req.params.fileId);
    res.json(fileInfo.data);
  } catch (err) {
    logger.error(`${err.response.data.status} ${err.response.data.error}`);
    res.status(err.response.data.status).end(err.response.data.error);
  }
});

router.get('/:fileId', async (req, res) => {
  try {
    const downloadRes = await File.download(req.params.fileId);
    res.set(downloadRes.headers);
    res.end(downloadRes.data);
  } catch (err) {
    logger.error(`${err.response.data.status} ${err.response.data.error}`);
    res.status(err.response.data.status).end(err.response.data.error);
  }
});

export default router;
