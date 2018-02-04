import express from 'express'
import Path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
	res.sendFile(Path.resolve(__dirname, '/build/', 'index.html'));
});

export default router;
