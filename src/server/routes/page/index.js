import express from 'express';

import render from '_modules/render';
import Const from '_modules/common/const';
import Utils from '_modules/common/utils';

const router = express.Router();

router.get('/', (req, res) => res.end(render(
  Const.appType.upload,
  Utils.getLangInAcceptLangHeader(req.headers['accept-language']),
)));

router.get('/:id', (req, res) => res.end(render(
  Const.appType.download,
  Utils.getLangInAcceptLangHeader(req.headers['accept-language']),
)));

export default router;
