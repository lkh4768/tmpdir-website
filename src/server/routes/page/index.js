import express from 'express';

import render from '_modules/render';

const router = express.Router();

router.get('/', (req, res) => res.end(render.render()));

export default router;
