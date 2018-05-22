import express from 'express';

import render from '_modules/render';
import Const from '_modules/common/const';

const router = express.Router();

router.get('/', (req, res) => res.end(render(Const.appType.upload)));

router.get('/:id', (req, res) => res.end(render(Const.appType.download)));

export default router;
