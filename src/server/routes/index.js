import express from 'express';

import render from '../modules/render';
import File from '../modules/file';

const router = express.Router();

router.get('/', (req, res) => res.end(render.render()));
router.post('/files', (req, res) => {
  File.uploadFiles(req, (err, data) => {
    if (err) {
      console.log(err.response);
      return res.status(err.response.data.status).end(err.response.data.error);
    }
    return res.status(data.code).json(data.data).end();
  });
});

export default router;
