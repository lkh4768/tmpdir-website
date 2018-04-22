import Multiparty from 'multiparty';
import { post } from 'axios';
import FormData from 'form-data';

const uploadFiles = (req, callback) => {
  const form = new Multiparty.Form();
  const formData = new FormData();
  let count = 0;

  form.on('part', (part) => {
    if (!part.filename) {
      part.resume();
    } else {
      formData.append(
        ['file', count].join(''),
        part,
        {
          filename: part.filename,
          contentType: part['content-type'],
        },
      );
      count += 1;
      part.resume();
    }
  });

  form.on('close', () => {
    const config = {
      headers: {
        accept: 'application/json',
        'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`,
      },
    };
    post('http://localhost:6000/', formData, config)
      .then(res => callback(null, { code: res.status, data: res.data }))
      .catch(err => callback(err));
  });
  form.on('error', err => callback(err));
  form.on('progress', (byteRead, byteExpected) => {
    console.log(`Reading total ${byteRead}/${byteExpected}`);
  });
  form.parse(req);
};

export default {
  uploadFiles,
};
