import express from 'express';

import render from '../modules/render';

const router = express.Router();

router.get('/', (req, res) => res.end(render.render()));
router.post('/files', (req, res) => {
  res.end('ok');
});

export default router;
