import express from 'express';

import render from '_modules/render';
import Utils from '_modules/utils';

const router = express.Router();

router.get('/', (req, res) => res.end(render(Utils.appType.upload)));

router.get('/:id', (req, res) => res.end(render(Utils.appType.download)));

export default router;
