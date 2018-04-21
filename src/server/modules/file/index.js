import fs from 'fs';
import Multiparty from 'multiparty';
import request from 'request';

const uploadFiles = (req, callback) => {
  const form = new Multiparty.Form();

  form.on('part', (part) => {
    if (!part.filename) {
      part.resume();
    } else {
      const { filename } = part;
      const filepath = ['/tmp/', filename].join('');
      const writeStream = fs.createWriteStream(filepath);

      part.pipe(request.post('http://localhost:6001/file'));
    }
  });

  form.on('close', () => callback(null));
  form.on('error', error => callback(error));
  form.on('progress', (byteRead, byteExpected) => {
    console.log(`Reading total ${byteRead}/${byteExpected}`);
  });
  form.parse(req);
};

export default {
  uploadFiles,
};
