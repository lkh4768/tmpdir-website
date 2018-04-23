import Multiparty from 'multiparty';
import { post } from 'axios';
import FormData from 'form-data';

import Config from '../../modules/config';
import Utils from '../../modules/utils';

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
    const uploadConfig = Config.tmpdir.service.upload;
    const uploadUrl = Utils.getUrl(uploadConfig.hostname, uploadConfig.protocol, uploadConfig.port);
    const config = {
      headers: {
        accept: 'application/json',
        'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`,
      },
    };
    post(uploadUrl, formData, config)
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
