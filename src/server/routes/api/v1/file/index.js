import express from 'express';

import logger from '_modules/logger';
import File from '_modules/file';

const router = express.Router();

router.post('/', (req, res) => {
  File.uploadFiles(req, (err, data) => {
    if (err) {
      if (!err.response) {
        logger.error('500 internal error');
        return res.status(500).end();
      }

      logger.error(`${err.response.data.status} ${err.response.data.error}`);
      return res.status(err.response.data.status).end(err.response.data.error);
    }
    logger.info('Client -> Server, Req Success code(data.code)');
    return res.status(data.code).json(data.data).end();
  });
});

router.get('/info/:fileId', async (req, res) => {
  try {
    const fileInfo = await File.getFileInfo(req.params.fileId);
    res.json(fileInfo.data);
  } catch (err) {
    console.log(err);
  }
});

export default router;
