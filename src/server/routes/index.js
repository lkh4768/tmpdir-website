import express from 'express';

import render from '../modules/render';
import File from '../modules/file';

const router = express.Router();

router.get('/', (req, res) => res.end(render.render()));
router.post('/files', (req, res) => {
  File.uploadFiles(req, (error) => {
    if (error) {
      console.log(error);
      return res.end('failed');
    }

    return res.end('success');
  });
});

export default router;
